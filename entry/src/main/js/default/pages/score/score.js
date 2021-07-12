import prompt from '@system.prompt';

export default {
    data: {
        teamAScore: 0,
        teamBScore: 0,
        teamAScoreBack: 0,
        teamBScoreBack: 0,
        teamAName: "",
        teamBName: ""
    },
    addA(e) {
        this.teamAScoreBack = this.teamAScore;
        this.teamBScoreBack = this.teamBScore;
        this.teamAScore += parseInt(e.target.dataSet);
    },
    addB(e) {
        this.teamAScoreBack = this.teamAScore;
        this.teamBScoreBack = this.teamBScore;
        this.teamBScore += parseInt(e.target.dataSet);
    },
    onUndo() {
        this.teamAScore = this.teamAScoreBack;
        this.teamBScore = this.teamBScoreBack;
    },
    onReset() {
        prompt.showDialog({
            message: this.$t('strings.dialog_reset_message'),
            buttons: [{
                          text: this.$t('strings.dialog_positive_button_text'),
                          color: "#000000"
                      }, {
                          text: this.$t('strings.dialog_negative_button_text'),
                          color: "#000000"
                      }],
            success: b => {
                if (b.index == 0) {
                    this.teamAScore = 0;
                    this.teamBScore = 0;
                }
            }
        })
    }
}