new Vue({
  el: "#fight",
  data: {
    playerLife: 100,
    monsterLife: 100,
    playerPower: 10,
    playerSpecialPower: 50,
    monsterPower: 14,
    whoGotKilled: "",
    usedCure: false,
    useSpecialPower: false,
    fightLog: [],
  },
  methods: {
    checkRound() {
      if (this.playerLife <= 0 || this.monsterLife <= 0) {
        this.playerLife = this.playerLife <= 0 ? 0 : this.playerLife;
        this.monsterLife = this.monsterLife <= 0 ? 0 : this.monsterLife;

        if (this.playerLife <= 0 && this.monsterLife <= 0) {
          this.whoGotKilled = "draw";
        } else {
          this.whoGotKilled = this.playerLife === 0 ? "player" : "monster";
        }
      }
    },
    runAttack() {
      const playerPowerAttack = Math.ceil(
        Math.random() * (this.playerPower - 0) + 0
      );

      const monsterPowerAttack = Math.ceil(
        Math.random() * (this.monsterPower - 0) + 0
      );

      this.monsterLife -= playerPowerAttack;
      this.playerLife -= monsterPowerAttack;

      this.fightLog.push({
        msg: `⚔ You hit ${playerPowerAttack} points attack`,
        class: "playerHit",
      });
      this.fightLog.push({
        msg: `💀 You received a ${monsterPowerAttack} point atack`,
        class: "monsterHit",
      });

      this.checkRound();
    },
    runSpecialAttack() {
      if (this.useSpecialPower === false) {
        const playerPowerAttack = Math.ceil(
          Math.random() * (this.playerSpecialPower - 0) + 0
        );

        const monsterPowerAttack = Math.ceil(
          Math.random() * (this.monsterPower - 0) + 0
        );

        this.monsterLife -= playerPowerAttack;
        this.playerLife -= monsterPowerAttack;

        this.fightLog.push({
          msg: `🧙 You hit ${playerPowerAttack} points with special attack`,
          class: "special",
        });
        this.fightLog.push({
          msg: `💀 You received a ${monsterPowerAttack} point atack`,
          class: "monsterHit",
        });

        this.checkRound();
      }

      this.useSpecialPower = true;
    },
    runPlayerCure() {
      if (this.usedCure === false && this.playerLife < 100) {
        const playerCureValue = Math.ceil(Math.random() * (50 - 0) + 0);
        const totalLife = playerCureValue + this.playerLife;
        totalLife > 100
          ? (this.playerLife = 100)
          : (this.playerLife += playerCureValue);

        const monsterPowerAttack = Math.ceil(
          Math.random() * (this.monsterPower - 0) + 0
        );

        this.playerLife -= monsterPowerAttack;

        this.fightLog.push({
          msg: `🧡 You healed yourself by ${playerCureValue} points`,
          class: "heal",
        });
        this.fightLog.push({
          msg: `💀 You received a ${monsterPowerAttack} point atack`,
          class: "monsterHit",
        });

        this.checkRound();

        this.usedCure = true;
      }
    },
    restartGame() {
      this.playerLife = 100;
      this.monsterLife = 100;
      this.playerPower = 10;
      this.playerSpecialPower = 50;
      this.monsterPower = 14;
      this.whoGotKilled = "";
      this.usedCure = false;
      this.useSpecialPower = false;
      this.fightLog = [];
    },
  },
});
