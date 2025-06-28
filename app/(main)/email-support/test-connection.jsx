"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

export default function TestConnection() {
  const [isTesting, setIsTesting] = useState(false);
  const [testResults, setTestResults] = useState([]);

  const testGoogleAppsScript = async () => {
    setIsTesting(true);
    setTestResults([]);

    const addResult = (message, type = 'info') => {
      setTestResults(prev => [...prev, { message, type, timestamp: new Date().toISOString() }]);
    };

    try {
      addResult('Starting Google Apps Script connection test...', 'info');

      // Test 1: Basic GET request
      addResult('Testing GET request...', 'info');
      try {
        const getResponse = await fetch('https://script.google.com/macros/s/AKfycbwcwcFex-gcEBE3wcZTmDsSJD_WHdIRVPn716-Jh8GsJXHQ2_TQ7QPY1wuBJFvfgFnlPg/exec', {
          method: 'GET'
        });
        addResult(`GET Response Status: ${getResponse.status}`, getResponse.ok ? 'success' : 'error');
        const getText = await getResponse.text();
        addResult(`GET Response: ${getText.substring(0, 200)}...`, 'info');
      } catch (error) {
        addResult(`GET Request Failed: ${error.message}`, 'error');
      }

      // Test 2: FormData POST request
      addResult('Testing FormData POST request...', 'info');
      try {
        const formData = new FormData();
        formData.append('test', 'true');
        formData.append('timestamp', new Date().toISOString());
        formData.append('name', 'Test User');
        formData.append('email', 'test@example.com');
        formData.append('subject', 'Test Subject');
        formData.append('message', 'This is a test message');

        const postResponse = await fetch('https://script.google.com/macros/s/AKfycbwcwcFex-gcEBE3wcZTmDsSJD_WHdIRVPn716-Jh8GsJXHQ2_TQ7QPY1wuBJFvfgFnlPg/exec', {
          method: 'POST',
          body: formData
        });
        addResult(`POST Response Status: ${postResponse.status}`, postResponse.ok ? 'success' : 'error');
        
        try {
          const postText = await postResponse.text();
          addResult(`POST Response: ${postText.substring(0, 200)}...`, 'info');
        } catch (e) {
          addResult('Could not read POST response text', 'warning');
        }
      } catch (error) {
        addResult(`POST Request Failed: ${error.message}`, 'error');
      }

      // Test 3: JSON POST request
      addResult('Testing JSON POST request...', 'info');
      try {
        const jsonData = {
          test: true,
          timestamp: new Date().toISOString(),
          name: 'Test User',
          email: 'test@example.com',
          subject: 'Test Subject',
          message: 'This is a test message'
        };

        const jsonResponse = await fetch('https://script.google.com/macros/s/AKfycbwcwcFex-gcEBE3wcZTmDsSJD_WHdIRVPn716-Jh8GsJXHQ2_TQ7QPY1wuBJFvfgFnlPg/exec', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(jsonData)
        });
        addResult(`JSON POST Response Status: ${jsonResponse.status}`, jsonResponse.ok ? 'success' : 'error');
        
        try {
          const jsonText = await jsonResponse.text();
          addResult(`JSON POST Response: ${jsonText.substring(0, 200)}...`, 'info');
        } catch (e) {
          addResult('Could not read JSON POST response text', 'warning');
        }
      } catch (error) {
        addResult(`JSON POST Request Failed: ${error.message}`, 'error');
      }

      addResult('Connection test completed!', 'success');

    } catch (error) {
      addResult(`Test failed: ${error.message}`, 'error');
    } finally {
      setIsTesting(false);
    }
  };

  const getResultColor = (type) => {
    switch (type) {
      case 'success': return 'text-green-400';
      case 'error': return 'text-red-400';
      case 'warning': return 'text-yellow-400';
      default: return 'text-blue-400';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">
            Google Apps Script Connection Test
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex gap-4">
            <Button
              onClick={testGoogleAppsScript}
              disabled={isTesting}
              className="bg-gradient-to-r from-pink-600 to-blue-700 hover:from-blue-500 hover:to-pink-600 text-white"
            >
              {isTesting ? 'Testing...' : 'Run Connection Test'}
            </Button>
            <Button
              onClick={() => setTestResults([])}
              variant="outline"
              className="border-gray-600 hover:bg-gray-800"
            >
              Clear Results
            </Button>
          </div>

          {testResults.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">Test Results:</h3>
              <div className="bg-gray-900/50 rounded-lg p-4 max-h-96 overflow-y-auto">
                {testResults.map((result, index) => (
                  <div key={index} className={`mb-2 text-sm ${getResultColor(result.type)}`}>
                    <span className="font-mono text-xs text-gray-400">
                      {new Date(result.timestamp).toLocaleTimeString()}
                    </span>
                    <span className="ml-2">{result.message}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-900/30">
            <h4 className="text-white font-semibold mb-2">Troubleshooting Tips:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• If GET request fails, your Google Apps Script might not have a doGet function</li>
              <li>• If POST requests fail, check if your script has a doPost function</li>
              <li>• Status 200 usually means success, but check the response content</li>
              <li>• CORS errors might indicate the script needs to be deployed as a web app</li>
              <li>• Make sure the script URL is correct and the script is published</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 
