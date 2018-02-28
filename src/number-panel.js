import renderSymbol from "./render-symbol.js";
import template from "./number-panel-template.html";

import initSelect from "./number-sidc/init-select.js";

import echelonMobilityTowedarray from "./number-sidc/echelon-mobility-towedarray.js";
import headquartersTaskforceDummy from "./number-sidc/headquarters-taskforce-dummy.js";

function numberPanel(element, standardJSON, standard) {
  this.element = element;
  this.mdcSelects = {};
  this.standard = standard;
  this.standardJSON = standardJSON;
  var className;

  //Set a generic SIDC for all battle dimensions
  var symbolsets = [];
  for (var i in this.standardJSON) {
    symbolsets.push(i);
    this.standardJSON[i].code = i;
    this.standardJSON[i].sidc =
      "1003" + this.standardJSON[i].symbolset + "00000000000000";
    for (var j in this.standardJSON[i]["main icon"]) {
      this.standardJSON[i]["main icon"][j]["symbol set"] = i;
      this.standardJSON[i]["main icon"][j].sidc =
        "1003" +
        i +
        "0000" +
        this.standardJSON[i]["main icon"][j]["code"] +
        "0000";
    }
    for (var j in this.standardJSON[i]["modifier 1"]) {
      this.standardJSON[i]["modifier 1"][j].sidc =
        "1003" +
        i +
        "0000" +
        "000000" +
        this.standardJSON[i]["modifier 1"][j]["code"] +
        "00";
    }
    for (var j in this.standardJSON[i]["modifier 2"]) {
      this.standardJSON[i]["modifier 2"][j].sidc =
        "1003" +
        i +
        "0000" +
        "000000" +
        "00" +
        this.standardJSON[i]["modifier 2"][j]["code"];
    }
  }
  // Make an ordered array of the symbol sets
  symbolsets = symbolsets.sort();
  for (var i = 0; i < symbolsets.length; i++) {
    symbolsets[i] = this.standardJSON[symbolsets[i]];
  }

  var selectElement, selectItems, mdcSelect;
  var panel = document.querySelector(element);
  //First add the template to the element
  panel.innerHTML = template;

  className = ".standard-identity-1";
  this.mdcSelects[className] = this.initSelect(
    panel,
    className,
    [
      { code: 0, name: "Reality" },
      { code: 1, name: "Exercise" },
      { code: 2, name: "Simulation" }
    ],
    this.standard,
    this.mdcSelects,
    0
  );
  this.mdcSelects[className].listen(
    "MDCSelect:change",
    function() {
      this._preRenderSymbol();
    }.bind(this)
  );

  className = ".standard-identity-2";
  this.mdcSelects[className] = this.initSelect(
    panel,
    className,
    [
      { code: 0, name: "Pending", sidc: "10001000000000000000" },
      { code: 1, name: "Unknown", sidc: "10011000000000000000" },
      { code: 2, name: "Assumed Friend", sidc: "10021000000000000000" },
      { code: 3, name: "Friend", sidc: "10031000000000000000" },
      { code: 4, name: "Neutral", sidc: "10041000000000000000" },
      { code: 5, name: "Suspect/Joker", sidc: "10051000000000000000" },
      { code: 6, name: "Hostile/Faker", sidc: "10061000000000000000" }
    ],
    this.standard,
    this.mdcSelects,
    3
  );
  this.mdcSelects[className].listen(
    "MDCSelect:change",
    function() {
      this._preRenderSymbol();
    }.bind(this)
  );

  className = ".symbol-set";
  this.mdcSelects[className] = this.initSelect(
    panel,
    className,
    symbolsets,
    this.standard,
    this.mdcSelects,
    4
  );
  this.mdcSelects[className].listen(
    "MDCSelect:change",
    function() {
      this.initSelect(
        panel,
        ".headquarters-taskforce-dummy",
        headquartersTaskforceDummy(this.mdcSelects[".symbol-set"].value),
        this.standard,
        this.mdcSelects,
        0
      );
      this.initSelect(
        panel,
        ".echelon-mobility-towedarray",
        echelonMobilityTowedarray(this.mdcSelects[".symbol-set"].value),
        this.standard,
        this.mdcSelects,
        0
      );
      this.initSelect(
        panel,
        ".icon",
        this.standardJSON[this.mdcSelects[".symbol-set"].value]["main icon"],
        this.standard,
        this.mdcSelects
      );
      this.initSelect(
        panel,
        ".icon-modifier-1",
        this.standardJSON[this.mdcSelects[".symbol-set"].value]["modifier 1"],
        this.standard,
        this.mdcSelects,
        0
      );
      this.initSelect(
        panel,
        ".icon-modifier-2",
        this.standardJSON[this.mdcSelects[".symbol-set"].value]["modifier 2"],
        this.standard,
        this.mdcSelects,
        0
      ).emit("MDCSelect:change");

      this._preRenderSymbol();
    }.bind(this)
  );

  className = ".status";
  this.mdcSelects[className] = this.initSelect(
    panel,
    className,
    [
      { code: 0, name: "Present", sidc: "10031000000000000000" },
      {
        code: 1,
        name: "Planned/Anticipated/Suspect",
        sidc: "10031010000000000000"
      },
      { code: 2, name: "Present/Fully capable", sidc: "10031020000000000000" },
      { code: 3, name: "Present/Damaged", sidc: "10031030000000000000" },
      { code: 4, name: "Present/Destroyed", sidc: "10031040000000000000" },
      {
        code: 5,
        name: "Present/Full to capacity",
        sidc: "10031050000000000000"
      }
    ],
    this.standard,
    this.mdcSelects,
    0
  );
  this.mdcSelects[className].listen(
    "MDCSelect:change",
    function() {
      this._preRenderSymbol();
    }.bind(this)
  );

  className = ".headquarters-taskforce-dummy";
  this.mdcSelects[className] = this.initSelect(
    panel,
    className,
    headquartersTaskforceDummy(this.mdcSelects[".symbol-set"].value),
    this.standard,
    this.mdcSelects,
    0
  );
  this.mdcSelects[className].listen(
    "MDCSelect:change",
    function() {
      this._preRenderSymbol();
    }.bind(this)
  );

  className = ".echelon-mobility-towedarray";
  this.mdcSelects[className] = this.initSelect(
    panel,
    className,
    echelonMobilityTowedarray(this.mdcSelects[".symbol-set"].value),
    this.standard,
    this.mdcSelects,
    0
  );
  this.mdcSelects[className].listen(
    "MDCSelect:change",
    function() {
      this._preRenderSymbol();
    }.bind(this)
  );

  className = ".icon";
  this.mdcSelects[className] = this.initSelect(
    panel,
    className,
    this.standardJSON[this.mdcSelects[".symbol-set"].value]["main icon"],
    this.standard,
    this.mdcSelects,
    0
  );
  this.mdcSelects[className].listen(
    "MDCSelect:change",
    function() {
      this._preRenderSymbol();
    }.bind(this)
  );

  className = ".icon-modifier-1";
  this.mdcSelects[className] = this.initSelect(
    panel,
    className,
    this.standardJSON[this.mdcSelects[".symbol-set"].value]["modifier 1"],
    this.standard,
    this.mdcSelects,
    0
  );
  this.mdcSelects[className].listen(
    "MDCSelect:change",
    function() {
      this._preRenderSymbol();
    }.bind(this)
  );

  className = ".icon-modifier-2";
  this.mdcSelects[className] = this.initSelect(
    panel,
    className,
    this.standardJSON[this.mdcSelects[".symbol-set"].value]["modifier 2"],
    this.standard,
    this.mdcSelects,
    0
  );
  this.mdcSelects[className].listen(
    "MDCSelect:change",
    function() {
      this._preRenderSymbol();
    }.bind(this)
  );

  // Now emit a change to render first symbol
  this.mdcSelects[className].emit("MDCSelect:change");

  return this;
}

numberPanel.prototype._preRenderSymbol = function() {
  var sidc = this.getSIDC();
  var symbolElement = document.querySelector(this.element + " .svg-symbol");
  symbolElement.setAttribute("sidc", sidc);
  symbolElement.setAttribute("standard", this.standard);
  document.querySelector(this.element + " .sidc").textContent = sidc;
  renderSymbol();
};

numberPanel.prototype.initSelect = initSelect;

numberPanel.prototype.getSIDC = function() {
  var sidc =
    "10" +
    this.mdcSelects[".standard-identity-1"].value +
    this.mdcSelects[".standard-identity-2"].value +
    this.mdcSelects[".symbol-set"].value +
    this.mdcSelects[".status"].value +
    (this.mdcSelects[".headquarters-taskforce-dummy"].value || "0") +
    (this.mdcSelects[".echelon-mobility-towedarray"].value || "00") +
    this.mdcSelects[".icon"].value +
    (this.mdcSelects[".icon-modifier-1"].value || "00") +
    (this.mdcSelects[".icon-modifier-2"].value || "00");
  return sidc;
};
numberPanel.prototype.setSIDC = function(sidc) {
  /*
  var sidc =
    "10" +
    this.mdcSelects[".standard-identity-1"].value +
    this.mdcSelects[".standard-identity-2"].value +
    this.mdcSelects[".symbol-set"].value +
    this.mdcSelects[".status"].value +
    (this.mdcSelects[".headquarters-taskforce-dummy"].value || "0") +
    (this.mdcSelects[".echelon-mobility-towedarray"].value || "00") +
    this.mdcSelects[".icon"].value +
    (this.mdcSelects[".icon-modifier-1"].value || "00") +
    (this.mdcSelects[".icon-modifier-2"].value || "00");
    */
  return this;
};
export default numberPanel;