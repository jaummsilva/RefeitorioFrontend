<template>
  <div class="main">
    <div class="content">
      <div class="brand">
        <img src="@/img/logoifc.png" alt="logo_ifc" />
      </div>
      <div class="infos">
        <h2>Refeitório</h2>
        <hr />
        <h3>Cardapio da semana</h3>
      </div>
      <div class="icon">
        <img src="@/img/tresrisco.png" alt="" />
      </div>
    </div>
  </div>
</template>
<style>
.main {
  position: absolute;
  width: 428px;
  height: 233px;
  left: 0px;
  top: 0;

  background: linear-gradient(180deg, #468741 0%, rgba(217, 217, 217, 0) 100%);
}
.content {
  position: absolute;
  width: 408px;
  height: 130px;
  left: 20px;
  top: 24px;

  background: #49784d;
  mix-blend-mode: normal;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px 0px 0px 24px;
}
.brand {
  position: absolute;
  width: 85px;
  height: 85px;
  left: calc(50% - 65px / 2 - 155.5px);
  top: 24px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.infos {
  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.infos h2 {
  position: absolute;
  height: 70px;
  width: 380px;
  left: 20px;
  top: 0px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  line-height: 39px;
}
.infos hr {
  position: absolute;
  width: 328px;
  height: 0px;
  left: 100px;
  top: 65px;

  border: 1px solid rgba(255, 255, 255, 0.6);
}
.infos h3 {
  position: absolute;
  height: 70px;
  width: 380px;
  left: 130px;
  top: 50px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;
}
.icon {
  position: absolute;
  width: 21.29px;
  height: 15.68px;
  left: 369px;
  top: 30px;
}
</style>
