import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    templateUrl: './newSurvey.template.html',
    styleUrls: ['./newSurvey.template.css'],
})


export class NewSurveyDialog {
    surveyDetailsForm = true;
    addQuestionForm = false;
    constructor(
        public dialogRef: MatDialogRef<NewSurveyDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    /**Show add question form */
    showAddQuestion() {
        this.surveyDetailsForm = false;
        this.addQuestionForm = true;
    }
}
