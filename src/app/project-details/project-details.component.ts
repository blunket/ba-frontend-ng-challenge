import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteDialogComponent } from '../note-dialog/note-dialog.component';
import { Project } from '../project';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  @Input() project: Project;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteNoteConfirm(note: any): void {
    const noteDialogRef = this.dialog.open(NoteDialogComponent, {
      data: {
        icon: 'warning',
        title: 'Confirm Deletion',
        content: 'Are you sure you want to delete this note?',
        actionButtonColor: 'warn',
        actionButtonText: 'Confirm Delete',
        showCancelButton: true,
      }
    });
    noteDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteNote(note);
      }
    });
  }

  deleteNote(note: any): void {
    const i = this.project.notes.findIndex(item => item.id === note.id);
    this.project.notes.splice(i, 1)
  }

}
