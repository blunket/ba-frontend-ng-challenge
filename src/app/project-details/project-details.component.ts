import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteDialogComponent } from '../note-dialog/note-dialog.component';
import { Project } from '../project';
import { ProjectNote } from '../project-note';

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

  addNoteDialog(project: Project): void {
    const noteDialogRef = this.dialog.open(NoteDialogComponent, {
      data: {
        icon: 'note_add',
        type: 'add-note',
        title: 'Add Note',
        content: 'Type your note below.',
        actionButtonColor: 'primary',
        actionButtonText: 'Save Note',
        showCancelButton: true,
        note: '',
      }
    });
    noteDialogRef.afterClosed().subscribe(result => {
      if (result?.trim().length > 0) {
        this.addNote(project, result);
      }
    });
  }

  addNote(project: Project, note: string): void {
    project.notes.push({ id: 15, note });
  }

  deleteNoteConfirm(note: ProjectNote): void {
    const noteDialogRef = this.dialog.open(NoteDialogComponent, {
      data: {
        icon: 'warning',
        type: 'confirm',
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

  deleteNote(note: ProjectNote): void {
    const i = this.project.notes.indexOf(note);
    this.project.notes.splice(i, 1)
  }

}
