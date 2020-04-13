export default function modifier1(battledimension) {
  if (battledimension == "GRDTRK_UNT") {
    return {
      "-": { name: "Не застосовується" },
      A: { name: "Штаб", sidc: "SFGP------A" },
      B: { name: "Штаб оперативної групи", sidc: "SFGP------B" },
      C: { name: "Feint Dummy HQ", sidc: "SFGP------C" },
      D: { name: "Feint Dummy/Штаб оперативної групи", sidc: "SFGP------D" },
      E: { name: "Оперативна група", sidc: "SFGP------E" },
      F: { name: "Feint Dummy", sidc: "SFGP------F" },
      G: { name: "Feint Dummy/Оперативна група", sidc: "SFGP------G" }
    };
  }
  if (battledimension == "GRDTRK_EQT") {
    return {
      "-": { name: "Не визначено" },
      M: { name: "Мобільність" }
    };
  }
  if (battledimension == "GRDTRK_INS") {
    return {
      H: { name: "Установка", sidc: "SFGP------H" }
    };
  }
  if (battledimension == "SSUF" || battledimension == "SBSUF") {
    return {
      "-": { name: "Не визначено" },
      N: { name: "Буксирований сонар" }
    };
  }

  return undefined; //{ "-": { name: "-" } };
}
