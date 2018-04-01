import { Component } from '@angular/core'
import { Bug } from './Models/bug';

@Component({
    selector: 'app-bug-tracker',
    templateUrl: './bugTracker.component.html',
    styleUrls: ['./bugTracker.component.css']

})
export class BugTrackerComponent {
    message: string = "..your bug finder and tracker";
    buglist: Bug[] = [];


    AddBug(bugname) {

        let newBug: Bug = {
            name: bugname,
            isClosed: false
        }
        this.buglist.push(newBug);
    }

    onBugNameClick(bug: Bug) {
        bug.isClosed = !bug.isClosed;
    }

    
}