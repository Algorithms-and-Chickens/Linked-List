/* 
Problem link: https://leetcode.com/problems/design-browser-history/

Idea:  

Time complexity: O(n)

Space Complexity: O(n)

*/

class HistoryNode {
    url: string;
    prev: HistoryNode | null;
    next: HistoryNode | null;
  
    constructor(url: string) {
        this.url = url;
        this.prev = null;
        this.next = null;
    }
  }
  
  class BrowserHistory {
    current: HistoryNode;
  
    constructor(homepage: string) {
        this.current = new HistoryNode(homepage);
    }
  
    visit(url: string): void {
        const newNode = new HistoryNode(url);
        this.current.next = newNode;
        newNode.prev = this.current;
        this.current = newNode;
    }
  
    back(steps: number): string {
        while (this.current.prev !== null && steps > 0) {
            this.current = this.current.prev;
            steps--;
        }
        
        return this.current.url;
    }
  
    forward(steps: number): string {
        while (this.current.next !== null && steps > 0) {
            this.current = this.current.next;
            steps--;
        }
  
        return this.current.url;
    }
  }