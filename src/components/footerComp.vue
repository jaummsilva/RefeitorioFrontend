<template>
  <footer>
    <div class="all">
      <div class="cardapio">
        <div class="images-1">
          <img src="@/img/image 19.png" alt="" />
        </div>
        <div class="info">
          <span>cardapio</span>
        </div>
      </div>
      <div class="vegetariano">
        <div class="images-3">
          <img src="@/img/image 23.png" alt="" />
        </div>
        <div class="info">
          <span>vegetariano</span>
        </div>
      </div>
      <div class="pagamento">
        <div class="images-2">
          <img src="@/img/image 21.png" alt="" />
        </div>
        <div class="info">
          <span>pagamento</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer {
  position: absolute;
  width: 370px;
  height: 46px;
  left: calc(40% - 370px / 2 + 1px);
  top: calc(50% - 46px / 2 + 440px);
  background: #49784d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  z-index: -1;
  flex-direction: column;
  margin-right: 50px;
}

.images-1 {
  margin: 3% 0 0 5%;
}
.images-2 {
  margin: 3% 0 0 15%;
}
.images-3 {
  margin: 3% 0 0 15%;
}

.imagens-1 img {
  box-sizing: border-box;

  position: absolute;
  left: 200px;
  top: 885px;
}

.imagens-2 img {
  box-sizing: border-box;

  position: absolute;
  width: 20px;
  height: 20px;
  left: 200px;
  top: 885px;
}

img {
  width: 20px;
  height: 20px;
  margin: 1% 0 0 30%;
}

.imagens-3 img {
  box-sizing: border-box;

  position: absolute;
  width: 24px;
  height: 24px;
  left: 200px;
  top: 800px;
  flex-wrap: wrap;
}

span {
  font-family: "Inter";
  color: #a3cfa8;
  text-transform: uppercase;
  font-size: 7pt;
  margin: 0 0 0 15%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  line-height: 7px;
  text-align: center;
  letter-spacing: 0.1em;
}

.all {
  display: flex;
  align-items: center;
  justify-content: center;
}

.info span {
  margin-right: 30px;
}
</style>
