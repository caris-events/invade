#!/bin/bash

# Simple test script for MCP server
# This sends a test request to the server to verify it works

cd "$(dirname "$0")"

export INVADE_DB_PATH=../../database

echo "Testing MCP server..."
echo ""

# Test 1: List tools
echo "Test 1: Listing available tools..."
echo '{"jsonrpc":"2.0","id":1,"method":"tools/list"}' | ./invade-mcp-server 2>/dev/null | jq -r '.result.tools[].name' | head -10

echo ""
echo "Test 2: Search for items (sending request)..."
# Test 2: Search items
echo '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"search_items","arguments":{"keyword":"tencent","limit":2}}}' | ./invade-mcp-server 2>/dev/null | jq -r '.result.content[0].text' | head -20

echo ""
echo "MCP Server tests completed!"
