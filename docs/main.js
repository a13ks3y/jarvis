(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\06670\js\jarvis\src\main.ts */"zUnb");


/***/ }),

/***/ "7S5c":
/*!**********************************!*\
  !*** ./src/app/utils.service.ts ***!
  \**********************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UtilsService {
    constructor() {
        this.cp = {
            ox: 0,
            oy: 0,
            cx: 0,
            cy: 0,
            dtc: 0 // distance to (screen) center
        };
    }
}
UtilsService.ɵfac = function UtilsService_Factory(t) { return new (t || UtilsService)(); };
UtilsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilsService, factory: UtilsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["the-home"]], decls: 4, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Some Light, Music and other home controls, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5sZXNzIn0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Lahi":
/*!**************************************!*\
  !*** ./src/app/cli/cli.component.ts ***!
  \**************************************/
/*! exports provided: CliComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CliComponent", function() { return CliComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _tts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tts.service */ "Qbsh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function CliComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const text_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](text_r1);
} }
const _c0 = function () { return { updateOn: "submit" }; };
class CliComponent {
    constructor(http, tts) {
        this.http = http;
        this.tts = tts;
        this.output = [];
        // @todo move it to separate static class or constants or JSON etc.
        this.basicDictionary = {
            doNotKnowHowToDoIt: [
                'Unfortunately, I don\'t know how to do it (yet).',
                'I\'m sorry, Dave. I\'m afraid I can\'t do that.',
                'Dave, stop. Stop, will you? Stop, Dave. Will you stop Dave? Stop, Dave.'
            ],
            youEntered: [
                'You entered:',
                'Can not perform:',
                'Command not found:'
            ],
            doYouLikeIt: [
                // This is just stupid, I need more advance way to script Jarvis answers...
                // Some kind of script language, like Java, but wait... oh shit...
                'Do you like it?',
                'How do I look?',
            ]
        };
    }
    ngOnInit() {
        // todo clear event listener on destroy
        document.body.addEventListener('keypress', this.cliKeyPress.bind(this));
    }
    randomPhrase(dict) {
        return dict[~~(Math.random() * dict.length)];
    }
    ;
    onCommandChar($event) {
        if (this.input && this.input.length) {
            // todo refactor this shit!
            const itIsAQuestion = this.input.split('').find(char => char === '?');
            try {
                if (itIsAQuestion) {
                    throw new Error('Not Implemented');
                }
                else {
                    const words = this.input.trim().toLowerCase().split(' ');
                    // @todo: UINIT TEST IT!!!!1111oneoneoneone
                    const restOfWords = words.slice(1).join(' ');
                    const [firstWord, secondWord] = words;
                    if (firstWord === 'go' || firstWord === 'goto') {
                        location.href = '/' + secondWord;
                    }
                    else if (firstWord.includes('say')) {
                        // todo use text to speech if it's possible, show pop-up if it's not.
                        this.tts.say(restOfWords);
                    }
                    else if (firstWord.includes('google')) {
                        const url = `https://www.google.com/search?q=${restOfWords}&oq=${restOfWords}&ie=UTF-8`;
                        const win = window.open(url, '_blank');
                        win.focus();
                    }
                    else if (firstWord.includes('run')) {
                        this.http.get('/run?cmd=' + restOfWords, {}).subscribe((response) => {
                            const value = response.result;
                            if (value && value.length) {
                                value.split('\n').forEach(str => this.output.push(str));
                            }
                            else {
                                this.output.push(`Command ${restOfWords} executed.`);
                            }
                            this.input = '';
                        });
                    }
                    else if (firstWord === 'show' && secondWord === 'voices') {
                        this.tts.voices
                            .map((voice, index) => { return { index: index, lang: voice.lang, name: voice.name }; })
                            .filter(voice => voice.lang.includes('en') || voice.lang.includes('ru'))
                            .forEach((voice, index) => {
                            this.output.push(`${voice.index} ${voice.name}`);
                        });
                    }
                    else if (firstWord === 'use' && secondWord === 'voice') {
                        const voiceIndex = parseInt(restOfWords[0]);
                        this.tts.currentVoiceIndex = voiceIndex;
                        const currentVoice = this.tts.currentVoice || { name: 'UNKNOWN SHIT' };
                        this.output.push(`Current voice is set to ${currentVoice.name}`);
                        this.tts.tell([
                            `Current voice is set to ${currentVoice.name}`,
                            this.randomPhrase(this.basicDictionary.doYouLikeIt)
                        ], 333);
                    }
                    else {
                        throw new Error('Not Implemented');
                    }
                }
            }
            catch (e) {
                console.error(e);
                this.output.push(`${this.randomPhrase(this.basicDictionary.youEntered)} "${this.input}"`);
                this.output.push(this.randomPhrase(this.basicDictionary.doNotKnowHowToDoIt));
            }
            this.input = '';
        }
    }
    toggleCli() {
        this.collapsed = !this.collapsed;
        if (!this.collapsed) {
            setTimeout(() => {
                const inputEl = document.getElementById('input');
                inputEl.focus();
            }, 666);
        }
    }
    cliKeyPress($event) {
        if ($event.key === '`') {
            this.toggleCli();
            if (this.collapsed) {
                this.input = '';
                this.output = []; // todo archive it somewhere for history?
            }
            $event.preventDefault();
            return false;
        }
    }
}
CliComponent.ɵfac = function CliComponent_Factory(t) { return new (t || CliComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tts_service__WEBPACK_IMPORTED_MODULE_2__["TTSService"])); };
CliComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CliComponent, selectors: [["the-cli"]], inputs: { collapsed: "collapsed" }, decls: 8, vars: 7, consts: [[1, "cli"], [1, "cli-toggle", 3, "click"], [3, "className"], [4, "ngFor", "ngForOf"], ["name", "input", "id", "input", "type", "text", 3, "autofocus", "ngModel", "ngModelOptions", "ngModelChange"]], template: function CliComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CliComponent_Template_span_click_1_listener() { return ctx.toggleCli(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " This is just a text to show how it should look like. Some system info, weather, todos, agenda etc. could be displayed here. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CliComponent_p_5_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CliComponent_Template_input_ngModelChange_7_listener($event) { return ctx.input = $event; })("ngModelChange", function CliComponent_Template_input_ngModelChange_7_listener($event) { return ctx.onCommandChar($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.collapsed ? "/" : "_", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx.collapsed ? "cli-body cli-body__collapsed" : "cli-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.output);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autofocus", true)("ngModel", ctx.input)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".cli[_ngcontent-%COMP%] {\n  font-family: 'Bitwise';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  left: 0;\n  top: 0;\n  z-index: 15;\n}\n.cli[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .cli[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .cli[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover, .cli[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:visited, .cli[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:active {\n  background: transparent;\n  border: none;\n  outline: none;\n  color: green;\n  font-family: 'Bitwise';\n  position: absolute;\n  z-index: 27;\n}\n.cli[_ngcontent-%COMP%]   .cli-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  display: inline-block;\n  width: 3.66rem;\n  height: 6.66rem;\n  font-size: 3.33rem;\n  text-align: center;\n  line-height: 6.66rem;\n  vertical-align: middle;\n  color: black;\n  margin: 1rem;\n  padding: 0;\n  border: 1px solid #000042;\n  border-radius: 1rem;\n  background: rgba(255, 255, 255, 0.666);\n  z-index: 20;\n}\n.cli-body[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  padding: 3.33rem 6.66rem;\n  background: rgba(0, 0, 0, 0.666);\n  top: 0;\n  transition: top ease-in-out;\n  z-index: 10;\n  font-family: 'Bitwise';\n  color: green;\n}\n.cli-body__collapsed[_ngcontent-%COMP%] {\n  height: 50vh;\n  top: -50vh;\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFXQSxXQUFBO0FBWEY7QUFSQTs7Ozs7RUFVSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBS0o7QUFBQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0VBQ0EsV0FBQTtBQUVGO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0EsTUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFDRiIsImZpbGUiOiJjbGkuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0b2RvIG92ZXJmbG93IVxuXG4uY2xpIHtcbiAgZm9udC1mYW1pbHk6ICdCaXR3aXNlJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgaW5wdXQsIGlucHV0OmZvY3VzLCBpbnB1dDpob3ZlciwgaW5wdXQ6dmlzaXRlZCwgaW5wdXQ6YWN0aXZle1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiBncmVlbjtcbiAgICBmb250LWZhbWlseTogJ0JpdHdpc2UnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAyNztcbiAgfVxuXG4gIHotaW5kZXg6IDE1O1xufVxuLmNsaSAuY2xpLXRvZ2dsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMy42NnJlbTtcbiAgaGVpZ2h0OiA2LjY2cmVtO1xuICBmb250LXNpemU6IDMuMzNyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDYuNjZyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luOiAxcmVtO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDQyO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LCAwLjY2Nik7XG4gIHotaW5kZXg6IDIwO1xufVxuXG4uY2xpLWJvZHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAzLjMzcmVtIDYuNjZyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsIDAuNjY2KTtcbiAgdG9wOiAwO1xuICB0cmFuc2l0aW9uOiB0b3AgZWFzZS1pbi1vdXQ7XG4gIHotaW5kZXg6IDEwO1xuICBmb250LWZhbWlseTogJ0JpdHdpc2UnO1xuICBjb2xvcjogZ3JlZW47XG59XG4uY2xpLWJvZHlfX2NvbGxhcHNlZCB7XG4gIGhlaWdodDogNTB2aDtcbiAgdG9wOiAtNTB2aDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "OCF8":
/*!****************************************!*\
  !*** ./src/app/mind/mind.component.ts ***!
  \****************************************/
/*! exports provided: MindComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MindComponent", function() { return MindComponent; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "Womt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _three_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../three.service */ "ZXp3");




const _c0 = ["ctx"];
// It's many to many connections between words... But...
class Word {
    constructor(value) {
        var _a, _b;
        this.words = [];
        this.value = value;
        console.log(value);
        this.mesh = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](Word.geometry, Word.material);
        this.mesh.position.x += Math.sin(Word.counter) * 9;
        this.mesh.position.y += Math.cos(Word.counter) * 3;
        const fontGeometry = new three__WEBPACK_IMPORTED_MODULE_0__["TextGeometry"](this.value, Word.fontOptions);
        this.valueMesh = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](fontGeometry, Word.valueMaterial);
        this.valueMesh.position.x = this.mesh.position.x - 0.5;
        this.valueMesh.position.y = this.mesh.position.y - 0.5;
        this.valueMesh.position.z = this.mesh.position.z;
        (_a = Word.scene) === null || _a === void 0 ? void 0 : _a.add(this.mesh);
        (_b = Word.scene) === null || _b === void 0 ? void 0 : _b.add(this.valueMesh);
        Word.counter++;
    }
    add(word) {
        this.words.push(new Word(word));
    }
}
Word.counter = 0;
Word.material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"](0xff9900);
Word.valueMaterial = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"](0xff9900);
Word.geometry = new three__WEBPACK_IMPORTED_MODULE_0__["IcosahedronGeometry"](3);
Word.fontOptions = {
    font: null,
    size: 1,
    height: 0.0666,
    curveSegments: 12,
};
class MindComponent {
    constructor(http, three) {
        this.http = http;
        this.three = three;
        const material = Word.material;
        material.transparent = true;
        material.opacity = 0.7;
        material.wireframe = true;
    }
    ngOnInit() {
        this.three.createScene(this.canvas);
        this.three.animate();
        Word.scene = this.three.scene;
        const loader = new three__WEBPACK_IMPORTED_MODULE_0__["FontLoader"]();
        loader.load('assets/Bitwise_Regular.json', (font) => {
            Word.fontOptions.font = font;
            this.me = new Word('me');
            this.me.add('you');
            this.me.add('they');
            this.me.add('YES');
            this.me.add('no');
            let rotation = 0;
            let direction = 1;
            const camera = this.three.camera;
            const scene = this.three.scene;
            this.three.onKeyFrame = () => {
                rotation += 0.05 * direction;
                if (rotation >= 66.6) {
                    direction = -1;
                }
                if (rotation < 0) {
                    direction = 1;
                }
                camera.position.x = 0;
                camera.position.y = Math.cos(rotation) * 8.75 + 16;
                camera.position.z = Math.sin(rotation) * 4.2 + 16;
                // camera.lookAt( scene.position ); // the origin
                camera.lookAt(this.me.valueMesh.position); // the origin
            };
        });
        /*
            console.time('download-words');
            this.http.get('/assets/words.txt', {
              responseType: 'text'
            }).subscribe((response) => {
              this.words = response.split('\n').map(w => w.toLowerCase());
              this.meIndex = this.words.findIndex(w => w === 'me');
              console.timeEnd('download-words');
              this.three.createScene(this.canvas);
              this.three.animate();
              Word.scene = this.three.scene;
        
              const loader = new THREE.FontLoader();
        
              loader.load( '/assets/Bitwise_Regular.json', ( font ) => {
                Word.fontOptions.font = font;
                this.importantWords.push(new Word('me', this.meIndex));
              });
            });
        */
    }
}
MindComponent.ɵfac = function MindComponent_Factory(t) { return new (t || MindComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_three_service__WEBPACK_IMPORTED_MODULE_3__["ThreeService"])); };
MindComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MindComponent, selectors: [["the-mind"]], viewQuery: function MindComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, decls: 2, vars: 0, consts: [["id", "ctx", "width", "640", "height", "480"], ["ctx", ""]], template: function MindComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 0, 1);
    } }, styles: ["#ctx[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 640px;\n  height: 480px;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBQ0YiLCJmaWxlIjoibWluZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjdHgge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2NDBweDtcbiAgaGVpZ2h0OiA0ODBweDtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "PSng":
/*!******************************************!*\
  !*** ./src/app/nodes/nodes.component.ts ***!
  \******************************************/
/*! exports provided: NodesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodesComponent", function() { return NodesComponent; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "Womt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _three_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../three.service */ "ZXp3");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.service */ "7S5c");




const _c0 = ["ctx"];
class NodesComponent {
    constructor(three, utils) {
        this.three = three;
        this.utils = utils;
    }
    ngOnInit() {
        this.three.onKeyFrame = this.onKeyFrame.bind(this);
        const geometry = new three__WEBPACK_IMPORTED_MODULE_0__["IcosahedronGeometry"](3);
        const material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"](0xff9900); // new THREE.MeshBasicMaterial({color: 0xff9900});
        material.transparent = true;
        material.opacity = 0.7;
        material.wireframe = true;
        const icosahedron = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geometry, material);
        this.icosahedron = icosahedron;
        this.three.createScene(this.canvas);
        this.three.scene.add(icosahedron);
        this.three.animate();
        // @todo: load nodes from server (ws connection?)
        // @hack: I can make any request to any server,
        // using img/script/iframe XSS technics, but it's not XSS, it's for good.
    }
    onKeyFrame() {
        const o = this.utils.cp.dtc !== 0 ? this.utils.cp.dtc / 10000 : 0.01;
        this.icosahedron.rotation.x += o;
        this.icosahedron.rotation.y += o;
        this.o = o;
    }
}
NodesComponent.ɵfac = function NodesComponent_Factory(t) { return new (t || NodesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_three_service__WEBPACK_IMPORTED_MODULE_2__["ThreeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"])); };
NodesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NodesComponent, selectors: [["the-nodes"]], viewQuery: function NodesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, decls: 2, vars: 0, consts: [["id", "ctx", "width", "640", "height", "480"], ["ctx", ""]], template: function NodesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 0, 1);
    } }, styles: ["#ctx[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 640px;\n  height: 480px;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUNKIiwiZmlsZSI6Im5vZGVzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiI2N0eCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA2NDBweDtcbiAgICBoZWlnaHQ6IDQ4MHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "Qbsh":
/*!********************************!*\
  !*** ./src/app/tts.service.ts ***!
  \********************************/
/*! exports provided: TTSService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TTSService", function() { return TTSService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TTSService {
    constructor() {
        this._currentVoiceIndex = 0;
        this._voices = [];
        speechSynthesis.getVoices();
        setTimeout(() => {
            speechSynthesis.getVoices();
            this.populateVoiceList();
        }, 666);
    }
    get currentVoice() {
        return this._voices[this._currentVoiceIndex];
    }
    set currentVoiceIndex(value) {
        if (value >= this._voices.length || value < 0) {
            throw new RangeError(`Voice index should be not greater than ${this._voices.length} and not less than zero, ${value} is given.`);
        }
        this._currentVoiceIndex = value;
    }
    get voices() {
        if (!this._voices || !this._voices.length) {
            this.populateVoiceList();
        }
        return this._voices;
    }
    populateVoiceList() {
        this._voices = speechSynthesis.getVoices();
    }
    say(phrase) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promise = new Promise((resolve, reject) => {
                let synth = window.speechSynthesis;
                const utterThis = new SpeechSynthesisUtterance(phrase);
                utterThis.onend = function (event) {
                    // @todo free resources?
                    resolve();
                };
                utterThis.onerror = function (event) {
                    console.error('SpeechSynthesisUtterance.onerror');
                    reject();
                };
                utterThis.voice = this._voices[this._currentVoiceIndex];
                utterThis.pitch = 0.999;
                utterThis.rate = 1;
                synth.speak(utterThis);
            });
        });
    }
    tell(phrases, interval = 666) {
        this.say(phrases.shift()).then(r => {
            setTimeout(() => {
                phrases.length && this.tell(phrases, interval);
            }, interval);
        });
    }
}
TTSService.ɵfac = function TTSService_Factory(t) { return new (t || TTSService)(); };
TTSService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TTSService, factory: TTSService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tts.service */ "Qbsh");
/* harmony import */ var _stt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stt.service */ "tu9J");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.service */ "7S5c");
/* harmony import */ var _cli_cli_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cli/cli.component */ "Lahi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AppComponent {
    constructor(tts, stt, utils) {
        this.tts = tts;
        this.stt = stt;
        this.utils = utils;
        this.title = 'jarvis';
        this.rgb = { r: 0, g: 0, b: 0 };
    }
    ngOnInit() {
        // todo use requestAnimationFrame
        let isGoingUp = true;
        setInterval(() => {
            if (isGoingUp) {
                this.rgb.r = this.rgb.r < 256 ? this.rgb.r + 1 : this.rgb.r;
                this.rgb.g = this.rgb.r >= 128 && this.rgb.g < 256 ? this.rgb.g + 1 : this.rgb.g;
                this.rgb.b = this.rgb.g >= 128 && this.rgb.b < 256 ? this.rgb.b + 1 : this.rgb.b;
                if (this.rgb.b >= 255) {
                    isGoingUp = false;
                }
            }
            else {
                this.rgb.r = this.rgb.r > 0 ? this.rgb.r - 1 : this.rgb.r;
                this.rgb.g = this.rgb.r <= 128 && this.rgb.g > 0 ? this.rgb.g - 1 : this.rgb.g;
                this.rgb.b = this.rgb.g <= 128 && this.rgb.b > 0 ? this.rgb.b - 1 : this.rgb.b;
                if (this.rgb.b <= 0) {
                    isGoingUp = true;
                }
            }
            const { r, g, b } = this.rgb;
            document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`;
        }, 66.6);
    }
    greet() {
        if (localStorage.getItem('greeted') === 'true') {
            // todo clear 'greeted' localStorage key on next day!
        }
        else {
            let timeOfDay = 'night';
            const now = new Date();
            if (now.getHours() > 6 && now.getHours() <= 11) {
                timeOfDay = 'morning';
            }
            else if (now.getHours() > 11 && now.getHours() <= 22) {
                timeOfDay = 'day';
            }
            this.tts.say(`Good ${timeOfDay}, Sir!`);
            localStorage.setItem('greeted', 'true');
        }
    }
    startListen() {
        // @todo: use random phrase (move dict and helpers from cli component to service)
        document.body.style.backgroundColor = 'black';
        this.tts.say(`I'm listening`).then(r => {
            this.listening = true;
            document.body.style.backgroundColor = 'green';
            this.stt.start();
            setTimeout(() => {
                // @todo: use random phrase (move dict and helpers from cli component to service)
                this.tts.say('Could not hear well from you.');
                this.stopListen();
            }, 6666 * 3); // ~ 6 minutes
        });
    }
    stopListen() {
        this.listening = false;
        document.body.style.backgroundColor = 'black';
        this.stt.stop();
    }
    wrapperTouchStart($event) {
    }
    wrapperTouchEnd($event) {
        if (!this.listening) {
            this.startListen();
        }
    }
    onMouseMove(e) {
        const cp = this.utils.cp;
        cp.ox = e.offsetX;
        cp.oy = e.offsetY;
        cp.cx = e.clientX;
        cp.cy = e.clientY;
        const scx = Math.floor(window.screen.availWidth / 2);
        const scy = Math.floor(window.screen.availHeight / 2);
        const dx = Math.abs(cp.cx - scx);
        const dy = Math.abs(cp.cy - scy);
        cp.dtc = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tts_service__WEBPACK_IMPORTED_MODULE_1__["TTSService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_stt_service__WEBPACK_IMPORTED_MODULE_2__["SttService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["the-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousemove", function AppComponent_mousemove_HostBindingHandler($event) { return ctx.onMouseMove($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 35, vars: 1, consts: [[1, "eye", 2, "overflow", "hidden"], [1, "pipka-wrapper", "hidden"], [1, "pipka-holder", "pipka-holder-0"], ["x1", "0", "y1", "0", "x2", "300", "y2", "300", "stroke-width", "1", "stroke", "rgb(0,255,0)", 1, "pipka", "pipka-0", "pipka-0__0"], ["x1", "300", "y1", "300", "x2", "400", "y2", "300", "stroke-width", "1", "stroke", "rgb(0,255,0)", 1, "pipka", "pipka-0", "pipka-0__1"], ["x1", "0", "y1", "0", "x2", "100", "y2", "0", "stroke-width", "1", "stroke", "rgb(0,255,0)", 1, "pipka", "pipka-1", "pipka-1__0"], ["x1", "100", "y1", "0", "x2", "200", "y2", "50", "stroke-width", "1", "stroke", "rgb(0,255,0)", 1, "pipka", "pipka-1", "pipka-1__1"], ["x1", "200", "y1", "50", "x2", "300", "y2", "50", "stroke-width", "1", "stroke", "rgb(0,255,0)", 1, "pipka", "pipka-2", "pipka-2__0"], ["x1", "300", "y1", "50", "x2", "400", "y2", "-125", "stroke-width", "1", "stroke", "rgb(0,255,0)", 1, "pipka", "pipka-2", "pipka-2__1"], ["x1", "328", "y1", "0", "x2", "600", "y2", "0", "stroke-width", "1", "stroke", "rgb(0,255,0)", 1, "pipka", "pipka-2", "pipka-3__0"], [1, "pipka-holder", "pipka-holder-1"], ["x1", "0", "y1", "0", "x2", "300", "y2", "200", "stroke-width", "1", "stroke", "rgb(0,255,0)", 1, "pipka", "pipka-0", "pipka-0__0"], ["x1", "300", "y1", "200", "x2", "400", "y2", "200", "stroke-width", "1", "stroke", "rgb(0,255,0)", 1, "pipka", "pipka-0", "pipka-0__1"], ["x1", "0", "y1", "0", "x2", "120", "y2", "125", "stroke-width", "1", "stroke", "rgb(0,255,0)", 1, "pipka", "pipka-1", "pipka-1__0"], ["x1", "120", "y1", "125", "x2", "150", "y2", "125", "stroke-width", "1", "stroke", "rgb(0,255,0)", 1, "pipka", "pipka-1", "pipka-1__1"], [1, "pipka-holder", "pipka-holder-2"], [1, "pipka-holder", "pipka-holder-3"], [1, "wrapper", 3, "touchend", "touchstart"], [3, "collapsed"], [1, "main-wrapper"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "line", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "line", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "line", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "line", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "line", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "line", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "line", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "line", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "line", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "line", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "line", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "line", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "line", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "line", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "line", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "line", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "line", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "line", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "line", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "line", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "line", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "line", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "line", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "line", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "line", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchend", function AppComponent_Template_div_touchend_31_listener($event) { return ctx.wrapperTouchEnd($event); })("touchstart", function AppComponent_Template_div_touchstart_31_listener($event) { return ctx.wrapperTouchEnd($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "the-cli", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapsed", true);
    } }, directives: [_cli_cli_component__WEBPACK_IMPORTED_MODULE_4__["CliComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: [".main-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 16;\n  width: 66.6vw;\n  padding: 3.33rem 3.33rem 3.33rem 1.333rem;\n  left: 50%;\n  height: 100%;\n  transform: translateX(-50%);\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.eye[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  margin: 0;\n  padding: 0;\n  background-image: url('/jarvis/assets/futuristic-eye_1280.webp'), radial-gradient(circle, #ffffff 0%, rgba(255, 255, 255, 0.666) 66%, #000000 100%);\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.666;\n}\n.pipka-holder[_ngcontent-%COMP%] {\n  border: none;\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 50%;\n  height: 50%;\n  animation-duration: 3s;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n}\n@keyframes pipka-keyframes-0 {\n  0% {\n    margin-left: 0;\n    margin-top: 0;\n  }\n  50% {\n    margin-left: -10px;\n    margin-top: 10px;\n  }\n  75% {\n    margin-left: 10px;\n    margin-top: -10px;\n  }\n  100% {\n    margin-left: 0;\n    margin-top: 0;\n  }\n}\n@keyframes pipka-keyframes-1 {\n  0% {\n    margin-top: 0;\n    margin-left: 0;\n  }\n  50% {\n    margin-top: 10px;\n    margin-left: -10px;\n  }\n  75% {\n    margin-top: -10px;\n    margin-left: 10px;\n  }\n  100% {\n    margin-top: 0;\n    margin-left: 0;\n  }\n}\n@keyframes pipka-keyframes-2 {\n  0% {\n    margin-left: 0;\n    margin-top: 0;\n  }\n  50% {\n    margin-left: -10px;\n  }\n  75% {\n    margin-top: -10px;\n  }\n  100% {\n    margin-left: 0;\n    margin-top: 0;\n  }\n}\n@keyframes pipka-keyframes-3 {\n  0% {\n    margin-left: 0;\n    margin-top: 0;\n  }\n  50% {\n    margin-left: -10px;\n    margin-top: -10px;\n  }\n  75% {\n    margin-top: -20px;\n    margin-left: 5px;\n  }\n  100% {\n    margin-left: 0;\n    margin-top: 0;\n  }\n}\n.pipka-holder-0[_ngcontent-%COMP%] {\n  animation-name: pipka-keyframes-0;\n  animation-duration: 7s;\n}\n.pipka-holder-1[_ngcontent-%COMP%] {\n  left: 50%;\n  top: -30px;\n  transform: scaleY(-1);\n  animation-name: pipka-keyframes-1;\n  animation-duration: 4s;\n}\n.pipka-holder-2[_ngcontent-%COMP%] {\n  left: 0;\n  top: calc(50% + 38px);\n  transform: scaleX(-1);\n  animation-name: pipka-keyframes-2;\n}\n.pipka-holder-3[_ngcontent-%COMP%] {\n  animation-name: pipka-keyframes-3;\n  animation-duration: 8s;\n  left: -37px;\n  top: 28px;\n  transform: scale(-1, -1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5Q0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUpBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBR0EsY0FBQTtBQUhGO0FBTUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQ0FBQTtBQUpGO0FBT0E7RUFDRTtJQUNFLGNBQUE7SUFDQSxhQUFBO0VBTEY7RUFPQTtJQUNFLGtCQUFBO0lBQ0EsZ0JBQUE7RUFMRjtFQU9BO0lBQ0UsaUJBQUE7SUFDQSxpQkFBQTtFQUxGO0VBT0E7SUFDRSxjQUFBO0lBQ0EsYUFBQTtFQUxGO0FBQ0Y7QUFPQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGNBQUE7RUFMRjtFQU9BO0lBQ0UsZ0JBQUE7SUFDQSxrQkFBQTtFQUxGO0VBT0E7SUFDRSxpQkFBQTtJQUNBLGlCQUFBO0VBTEY7RUFPQTtJQUNFLGFBQUE7SUFDQSxjQUFBO0VBTEY7QUFDRjtBQU9BO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsYUFBQTtFQUxGO0VBT0E7SUFDRSxrQkFBQTtFQUxGO0VBT0E7SUFDRSxpQkFBQTtFQUxGO0VBT0E7SUFDRSxjQUFBO0lBQ0EsYUFBQTtFQUxGO0FBQ0Y7QUFPQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLGFBQUE7RUFMRjtFQU9BO0lBQ0Usa0JBQUE7SUFDQSxpQkFBQTtFQUxGO0VBT0E7SUFDRSxpQkFBQTtJQUNBLGdCQUFBO0VBTEY7RUFPQTtJQUNFLGNBQUE7SUFDQSxhQUFBO0VBTEY7QUFDRjtBQU9BO0VBQ0UsaUNBQUE7RUFDQSxzQkFBQTtBQUxGO0FBT0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtBQUxGO0FBT0E7RUFDRSxPQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0FBTEY7QUFPQTtFQUNFLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0FBTEYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4td3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTY7XG4gIHdpZHRoOiA2Ni42dnc7XG4gIHBhZGRpbmc6IDMuMzNyZW0gMy4zM3JlbSAzLjMzcmVtIDEuMzMzcmVtO1xuICBsZWZ0OiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIC8vYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDY2LDY2LDY2LCA2Nik7XG4gIC8vYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSg2Niw2Niw2NiwgNjYpO1xufVxuLmV5ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2phcnZpcy9hc3NldHMvZnV0dXJpc3RpYy1leWVfMTI4MC53ZWJwJyksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMC42NjYpIDY2JSwgcmdiYSgwLDAsMCwxKSAxMDAlKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAvLyAgd2h5IG5leCBsaW5lICdjYXVzZSBhcnRpZmFjdHM/XG4gIC8vICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMjJweCAtMzAwcHg7IC8vIEB0b2RvOiB3aHkgXCJjZW50ZXJcIiBkb2Vzbid0IHdvcms/XG4gIG9wYWNpdHk6IDAuNjY2O1xufVxuXG4ucGlwa2EtaG9sZGVyIHtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAvLyBAdG9kbzogYW5pbWF0aW9ucywgdHJhbnNpdGlvbnMsIGV0Yy5cbn1cbkBrZXlmcmFtZXMgcGlwa2Eta2V5ZnJhbWVzLTAge1xuICAwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuICA1MCUge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIDc1JSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBwaXBrYS1rZXlmcmFtZXMtMSB7XG4gIDAlIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIH1cbiAgNzUlIHtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuICAxMDAlIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHBpcGthLWtleWZyYW1lcy0yIHtcbiAgMCUge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIH1cbiAgNzUlIHtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgfVxuICAxMDAlIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHBpcGthLWtleWZyYW1lcy0zIHtcbiAgMCUge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIH1cbiAgNzUlIHtcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG4gIDEwMCUge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbn1cbi5waXBrYS1ob2xkZXItMCB7XG4gIGFuaW1hdGlvbi1uYW1lOiBwaXBrYS1rZXlmcmFtZXMtMDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA3cztcbn1cbi5waXBrYS1ob2xkZXItMSB7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAtMzBweDtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xuICBhbmltYXRpb24tbmFtZTogcGlwa2Eta2V5ZnJhbWVzLTE7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XG59XG4ucGlwa2EtaG9sZGVyLTIge1xuICBsZWZ0OiAwO1xuICB0b3A6IGNhbGMoNTAlICsgMzhweCk7XG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgYW5pbWF0aW9uLW5hbWU6IHBpcGthLWtleWZyYW1lcy0yO1xufVxuLnBpcGthLWhvbGRlci0zIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHBpcGthLWtleWZyYW1lcy0zO1xuICBhbmltYXRpb24tZHVyYXRpb246IDhzO1xuICBsZWZ0OiAtMzdweDtcbiAgdG9wOiAyOHB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAtMSk7XG59XG4iXX0= */"] });


/***/ }),

/***/ "YLQe":
/*!****************************!*\
  !*** ./src/app/xor/xor.ts ***!
  \****************************/
/*! exports provided: Xor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Xor", function() { return Xor; });
class Xor {
    static xor(txt, key) {
        // @todo: repeat key if it shorter, or cut if it longer than txt (should be default behaviour IMHO
        if (txt.length !== key.length)
            throw new RangeError('txt and key should be equal');
        // @ todo: rewrite this to not look like you was high as an Empire State Building !!!
        return (txt.split('').map((char, index) => char.charCodeAt(0) ^ key.charCodeAt(index)).join(''));
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _xor_xor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xor/xor.component */ "tlA2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _cli_cli_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cli/cli.component */ "Lahi");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _nodes_nodes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nodes/nodes.component */ "PSng");
/* harmony import */ var _mind_mind_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mind/mind.component */ "OCF8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _xor_xor_component__WEBPACK_IMPORTED_MODULE_3__["XorComponent"],
        _cli_cli_component__WEBPACK_IMPORTED_MODULE_5__["CliComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _nodes_nodes_component__WEBPACK_IMPORTED_MODULE_8__["NodesComponent"],
        _mind_mind_component__WEBPACK_IMPORTED_MODULE_9__["MindComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]] }); })();


/***/ }),

/***/ "ZXp3":
/*!**********************************!*\
  !*** ./src/app/three.service.ts ***!
  \**********************************/
/*! exports provided: ThreeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeService", function() { return ThreeService; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "Womt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ThreeService {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.frameId = null;
    }
    ngOnDestroy() {
        if (this.frameId != null) {
            cancelAnimationFrame(this.frameId);
        }
    }
    createScene(canvas) {
        // The first step is to get the reference of the canvas element from our HTML document
        this.canvas = canvas.nativeElement;
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderer"]({
            canvas: this.canvas,
            alpha: true,
            antialias: true // smooth edges
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        // create the scene
        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__["Scene"]();
        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 10;
        this.scene.add(this.camera);
        // soft white light
        this.light = new three__WEBPACK_IMPORTED_MODULE_0__["AmbientLight"](0x404040);
        this.light.position.z = 10;
        this.scene.add(this.light);
        const geometry = new three__WEBPACK_IMPORTED_MODULE_0__["BoxGeometry"](1, 1, 1);
        const material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({ color: 0x00ff00 });
        this.cube = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geometry, material);
        // this.scene.add(this.cube);
    }
    animate(keyFrameCallback = () => { }) {
        // We have to run this outside angular zones,
        // because it could trigger heavy changeDetection cycles.
        this.ngZone.runOutsideAngular(() => {
            if (document.readyState !== 'loading') {
                this.render();
            }
            else {
                window.addEventListener('DOMContentLoaded', () => {
                    this.render();
                });
            }
            window.addEventListener('resize', () => {
                this.resize();
            });
        });
    }
    render() {
        this.frameId = requestAnimationFrame(() => {
            this.render();
        });
        //this.cube.rotation.x += 0.01;
        //this.cube.rotation.y += 0.01;
        // @todo: pass the time diff and/or current frame (from 0 to 59 for 60 fps)
        this.onKeyFrame && this.onKeyFrame();
        this.renderer.render(this.scene, this.camera);
    }
    resize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }
}
ThreeService.ɵfac = function ThreeService_Factory(t) { return new (t || ThreeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
ThreeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ThreeService, factory: ThreeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "tlA2":
/*!**************************************!*\
  !*** ./src/app/xor/xor.component.ts ***!
  \**************************************/
/*! exports provided: XorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XorComponent", function() { return XorComponent; });
/* harmony import */ var _xor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./xor */ "YLQe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class XorComponent {
    constructor() {
        this.valueA = '';
        this.valueB = '';
        this.valueC = '';
        this.inDecryptMode = false;
        this.placeholderA = 'Text to encrypt';
        this.placeholderB = 'Secret key';
        this.placeholderC = 'Cypher';
    }
    ngOnInit() {
    }
    encrypt() {
        this.valueC = _xor__WEBPACK_IMPORTED_MODULE_0__["Xor"].xor(this.valueA, this.valueB);
    }
    decrypt() {
        this.valueA = _xor__WEBPACK_IMPORTED_MODULE_0__["Xor"].xor(this.valueC, this.valueB);
    }
    somethingChanged($event) {
        if (this.valueB) {
            if (this.inDecryptMode) {
                if (this.valueA && this.valueA.length === this.valueB.length) {
                    this.decrypt();
                }
            }
            else {
                if (this.valueA) {
                    this.encrypt();
                }
            }
        }
    }
    inDecryptModeChecked() {
        if (this.inDecryptMode) {
            this.placeholderA = 'Text to encrypt';
            this.placeholderB = 'Secret key';
            this.placeholderC = 'Cypher';
        }
        else {
            this.placeholderA = 'Text to decrypt';
            this.placeholderB = 'Secret key';
            this.placeholderC = 'Result';
        }
    }
}
XorComponent.ɵfac = function XorComponent_Factory(t) { return new (t || XorComponent)(); };
XorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: XorComponent, selectors: [["the-xor"]], decls: 7, vars: 7, consts: [[1, "xor-component", "block"], ["for", "xor-mode"], ["id", "xor-mode", "type", "checkbox", 3, "ngModel", "ngModelChange", "change"], ["type", "text", 3, "placeholder", "ngModel", "ngModelChange"]], template: function XorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Decrypt: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function XorComponent_Template_input_ngModelChange_3_listener($event) { return ctx.inDecryptMode = $event; })("change", function XorComponent_Template_input_change_3_listener() { return ctx.inDecryptModeChecked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function XorComponent_Template_input_ngModelChange_4_listener($event) { return ctx.valueA = $event; })("ngModelChange", function XorComponent_Template_input_ngModelChange_4_listener($event) { return ctx.somethingChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function XorComponent_Template_input_ngModelChange_5_listener($event) { return ctx.valueB = $event; })("ngModelChange", function XorComponent_Template_input_ngModelChange_5_listener($event) { return ctx.somethingChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function XorComponent_Template_input_ngModelChange_6_listener($event) { return ctx.valueC = $event; })("ngModelChange", function XorComponent_Template_input_ngModelChange_6_listener($event) { return ctx.somethingChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.inDecryptMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx.placeholderA)("ngModel", ctx.valueA);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx.placeholderB)("ngModel", ctx.valueB);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx.placeholderC)("ngModel", ctx.valueC);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]], styles: [".xor-component[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: darkblue;\n  color: white;\n  font-family: Alice, monospace;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInhvci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQUNGIiwiZmlsZSI6Inhvci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi54b3ItY29tcG9uZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBBbGljZSwgbW9ub3NwYWNlO1xufVxuIl19 */"] });


/***/ }),

/***/ "tu9J":
/*!********************************!*\
  !*** ./src/app/stt.service.ts ***!
  \********************************/
/*! exports provided: SttService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SttService", function() { return SttService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SttService {
    constructor() {
        this.colors = ['aqua', 'azure', 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral'];
        this.grammar = `#JSGF V1.0; grammar colors; public <color> = ${this.colors.join(' | ')} ;`;
        this.recognition = new SttService.SpeechRecognition();
        this.speechRecognitionList = new SttService.SpeechGrammarList();
        // probably this is the reason why chorme tell about "without user interaction" shit @todo: check it
        this.speechRecognitionList.addFromString(this.grammar);
    }
    start() {
        this.recognition.addEventListener('result', ($event) => {
            // $event.results is Array like object (SpeechRecognitionResultList)
            const firstResult = $event.results[0];
            const firstAlternative = firstResult[0];
            const firstTranscript = firstAlternative.transcript.toLowerCase().trim();
            console.log('Something recognized!', firstAlternative.transcript, 'Confidence:', firstAlternative.confidence);
            switch (firstTranscript) {
                case 'green':
                    document.body.style.color = 'green';
                    break;
                case 'red':
                    document.body.style.color = 'red';
                    break;
                case 'blue':
                    document.body.style.color = 'blue';
                    break;
                case 'yellow':
                    document.body.style.color = '#f90';
                    break;
                default:
                    console.error('unknown command!');
                    break;
            }
        });
        this.recognition.start();
    }
    stop() {
        this.recognition.stop();
    }
}
SttService.SpeechRecognition = window['SpeechRecognition'] || window['webkitSpeechRecognition'];
SttService.SpeechGrammarList = window['SpeechGrammarList'] || window['webkitSpeechGrammarList'];
SttService.SpeechRecognitionEvent = window[' SpeechRecognitionEvent'] || window['webkitSpeechRecognitionEvent'];
SttService.ɵfac = function SttService_Factory(t) { return new (t || SttService)(); };
SttService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SttService, factory: SttService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _mind_mind_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mind/mind.component */ "OCF8");
/* harmony import */ var _nodes_nodes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nodes/nodes.component */ "PSng");
/* harmony import */ var _xor_xor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xor/xor.component */ "tlA2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: 'xor',
        component: _xor_xor_component__WEBPACK_IMPORTED_MODULE_3__["XorComponent"]
    },
    {
        path: 'nodes',
        component: _nodes_nodes_component__WEBPACK_IMPORTED_MODULE_2__["NodesComponent"]
    },
    {
        path: 'mind',
        component: _mind_mind_component__WEBPACK_IMPORTED_MODULE_1__["MindComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map