export default function modifier2(battledimension, modifier1) {
  if (battledimension == "GRDTRK_UNT" || battledimension == "SOFUNT") {
    return {
      "-": { name: "Не визначено" },
      A: { name: "Команда/Екіпаж", sidc: "SFGP-------A" },
      B: { name: "Відділення", sidc: "SFGP-------B" },
      C: { name: "Секція", sidc: "SFGP-------C" },
      D: { name: "Взвод/загін", sidc: "SFGP-------D" },
      E: { name: "Рота/батарея/військо", sidc: "SFGP-------E" },
      F: { name: "Батальйон/ескадрон", sidc: "SFGP-------F" },
      G: { name: "Полк/група", sidc: "SFGP-------G" },
      H: { name: "Бригада", sidc: "SFGP-------H" },
      I: { name: "Дивізія", sidc: "SFGP-------I" },
      J: { name: "Корпус/Морські експедиційні сили", sidc: "SFGP-------J" },
      K: { name: "Армія", sidc: "SFGP-------K" },
      L: { name: "Група армій/фронт", sidc: "SFGP-------L" },
      M: { name: "Військовий округ", sidc: "SFGP-------M" },
      N: { name: "Командування", sidc: "SFGP-------N" }
    };
  }
  if (battledimension == "GRDTRK_EQT" && modifier1 == "M") {
    return {
      O: { name: "Колісний/обмежений", sidc: "SFGPE-----MO" },
      P: { name: "Колісний", sidc: "SFGPE-----MP" },
      Q: { name: "Гусеничний", sidc: "SFGPE-----MQ" },
      R: { name: "Колісний та гусеничний", sidc: "SFGPE-----MR" },
      S: { name: "Буксирований", sidc: "SFGPE-----MS" },
      T: { name: "Залізничний", sidc: "SFGPE-----MT" },
      U: { name: "Насніжний", sidc: "SFGPE-----MU" },
      V: { name: "Санний", sidc: "SFGPE-----MV" },
      W: { name: "Тяглові тварини", sidc: "SFGPE-----MW" },
      Y: { name: "Баржа", sidc: "SFGPE-----MY" },
      Z: { name: "«Амфі́бія»", sidc: "SFGPE-----MZ" }
    };
  }
  if (
    (battledimension == "SSUF" || battledimension == "SBSUF") &&
    modifier1 == "N"
  ) {
    return {
      S: { name: "Буксирований сонар (короткий)", sidc: "SFSPE-----NS" },
      L: { name: "Буксирований сонар (довгий)", sidc: "SFSPE-----NL" }
    };
  }

  return undefined; //{ "-": { name: "-" } };
}
