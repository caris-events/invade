package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"path/filepath"

	"github.com/mark3labs/mcp-go/server"
)

func main() {
	// Determine database path
	databasePath := os.Getenv("INVADE_DB_PATH")
	if databasePath == "" {
		// Default to relative path from the repository root
		cwd, err := os.Getwd()
		if err != nil {
			log.Fatalf("Failed to get current working directory: %v", err)
		}
		// Try to find database directory
		databasePath = filepath.Join(cwd, "..", "..", "database")
		if _, err := os.Stat(databasePath); os.IsNotExist(err) {
			databasePath = filepath.Join(cwd, "database")
		}
	}

	// Load data
	dataLoader := NewDataLoader(databasePath)
	
	log.Printf("Loading items from %s...", databasePath)
	if err := dataLoader.LoadItems(); err != nil {
		log.Fatalf("Failed to load items: %v", err)
	}
	log.Printf("Loaded %d items", len(dataLoader.GetAllItems()))

	log.Printf("Loading vocabs from %s...", databasePath)
	if err := dataLoader.LoadVocabs(); err != nil {
		log.Fatalf("Failed to load vocabs: %v", err)
	}
	log.Printf("Loaded %d vocabs", len(dataLoader.GetAllVocabs()))

	// Create MCP server
	mcpServer := server.NewMCPServer(
		"Invade.tw MCP Server",
		"1.0.0",
	)

	// Register tools
	mcpTools := NewMCPTools(dataLoader)
	mcpTools.RegisterTools(mcpServer)

	log.Println("Starting Invade.tw MCP server...")
	log.Println("Server provides access to:")
	log.Printf("- %d items (companies, brands, games, etc.)", len(dataLoader.GetAllItems()))
	log.Printf("- %d vocabulary terms (Chinese invasive language)", len(dataLoader.GetAllVocabs()))
	log.Println("Available tools:")
	log.Println("  - search_items: Search for items in the database")
	log.Println("  - get_item: Get detailed info about an item")
	log.Println("  - list_item_categories: List all item categories")
	log.Println("  - search_vocabs: Search for vocabulary terms")
	log.Println("  - get_vocab: Get detailed info about a vocab")
	log.Println("  - list_vocab_categories: List all vocab categories")
	
	// Create stdio server and listen
	stdioServer := server.NewStdioServer(mcpServer)
	if err := stdioServer.Listen(context.Background(), os.Stdin, os.Stdout); err != nil {
		fmt.Fprintf(os.Stderr, "Server error: %v\n", err)
		os.Exit(1)
	}
}
