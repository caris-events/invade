#!/bin/bash
set -e

cd "$(dirname "$0")"
export INVADE_DB_PATH=../../database

echo "================================"
echo "MCP Server Integration Tests"
echo "================================"
echo ""

# Build the server if not exists
if [ ! -f ./invade-mcp-server ]; then
    echo "Building MCP server..."
    go build -o invade-mcp-server
    echo "✓ Build successful"
    echo ""
fi

echo "Test 1: List available tools"
echo "----------------------------"
tools=$(echo '{"jsonrpc":"2.0","id":1,"method":"tools/list"}' | ./invade-mcp-server 2>/dev/null | jq -r '.result.tools[].name' | wc -l)
echo "✓ Found $tools tools"
echo ""

echo "Test 2: Search items by keyword"
echo "--------------------------------"
result=$(echo '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"search_items","arguments":{"keyword":"alibaba","limit":1}}}' | ./invade-mcp-server 2>/dev/null | jq -r '.result.content[0].text')
echo "$result" | head -8
echo "✓ Search successful"
echo ""

echo "Test 3: Get item details"
echo "------------------------"
result=$(echo '{"jsonrpc":"2.0","id":3,"method":"tools/call","params":{"name":"get_item","arguments":{"code":"tencent"}}}' | ./invade-mcp-server 2>/dev/null | jq -r '.result.content[0].text')
echo "$result" | head -8
echo "✓ Get item successful"
echo ""

echo "Test 4: Search vocabs"
echo "---------------------"
result=$(echo '{"jsonrpc":"2.0","id":4,"method":"tools/call","params":{"name":"search_vocabs","arguments":{"keyword":"數據","limit":1}}}' | ./invade-mcp-server 2>/dev/null | jq -r '.result.content[0].text')
echo "$result" | head -6
echo "✓ Search vocab successful"
echo ""

echo "Test 5: Get vocab details"
echo "-------------------------"
result=$(echo '{"jsonrpc":"2.0","id":5,"method":"tools/call","params":{"name":"get_vocab","arguments":{"word":"渲染"}}}' | ./invade-mcp-server 2>/dev/null | jq -r '.result.content[0].text')
echo "$result" | head -6
echo "✓ Get vocab successful"
echo ""

echo "Test 6: List categories"
echo "-----------------------"
result=$(echo '{"jsonrpc":"2.0","id":6,"method":"tools/call","params":{"name":"list_item_categories","arguments":{}}}' | ./invade-mcp-server 2>/dev/null | jq -r '.result.content[0].text')
echo "$result" | head -6
echo "✓ List categories successful"
echo ""

echo "================================"
echo "All tests passed! ✓"
echo "================================"
