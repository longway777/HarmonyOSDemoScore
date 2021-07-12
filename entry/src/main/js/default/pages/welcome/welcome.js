import router from '@system.router';

export default {
    data: {
        teamAName: "",
        teamBName: ""
    },
    onShow() {
        this.teamAName = "";
        this.teamBName = "";
    },
    onStartGame() {
        if (this.teamAName == "") this.teamAName = this.$t('strings.input_a_placeholder_text');
        if (this.teamBName == "") this.teamBName = this.$t('strings.input_b_placeholder_text');
        router.push({
            uri: 'pages/score/score',
            params: {
                teamAName: this.teamAName,
                teamBName: this.teamBName
            }
        })
    },
    onInputAChange(e) {
        this.teamAName = e.value;
    },
    onInputBChange(e) {
        this.teamBName = e.value;
    },
}