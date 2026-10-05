#!/usr/bin/env python3
"""
Simple local development server for Global Arbitrage & NRI Wealth Navigator.
Serves static assets on port 8088.
"""

import http.server
import socketserver
import os
import sys

PORT = 8088

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

if __name__ == '__main__':
    web_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(web_dir)
    
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"🚀 Serving Global Arbitrage & NRI Wealth Navigator at http://localhost:{PORT}")
        print(f"📁 Serving directory: {web_dir}")
        print("Press Ctrl+C to stop.")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")
            sys.exit(0)
