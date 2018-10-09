(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"@src/talent-list/talents.module": [
		"./src/app/talent-list/talents.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-talent-list></app-talent-list> -->\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%;\n  display: block; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const app_component_1 = __webpack_require__(/*! @src/app.component */ "./src/app/app.component.ts");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
const talents_module_1 = __webpack_require__(/*! @src/talent-list/talents.module */ "./src/app/talent-list/talents.module.ts");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpClientModule,
            talents_module_1.TalentsModule,
            router_1.RouterModule.forRoot([
                { path: '', loadChildren: '@src/talent-list/talents.module#TalentsModule' }
            ])
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/shared/format.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/shared/format.pipe.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Used like `String.format("The value is {0}", 20);` as pipe
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let FormatPipe = class FormatPipe {
    transform(val, ...args) {
        return val.replace(/{(\d+)}/g, (match, number) => {
            return typeof args[number] !== 'undefined'
                ? args[number]
                : match;
        });
    }
};
FormatPipe = __decorate([
    core_1.Pipe({
        name: 'format'
    })
], FormatPipe);
exports.FormatPipe = FormatPipe;


/***/ }),

/***/ "./src/app/talent-list/talent-list.builder.ts":
/*!****************************************************!*\
  !*** ./src/app/talent-list/talent-list.builder.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class TalentListBuilder {
    fromLevelString(levelsString, talents) {
        const copyTalents = new Map(talents);
        const levels = levelsString.split(TalentListBuilder.DELIMITER_ENTITY);
        levels.forEach(level => {
            if (!level) {
                return;
            }
            const [id, lvl] = level.split(TalentListBuilder.DELIMITER_PROPERTY);
            copyTalents.get(id).level = Number(lvl);
        });
        return copyTalents;
    }
    toLevelString(talents) {
        const result = Array.from(talents.values())
            .reduce((acc, cur, i) => acc +
            `${cur.name.trim()}` +
            `${TalentListBuilder.DELIMITER_PROPERTY}` +
            `${cur.level}` +
            `${TalentListBuilder.DELIMITER_ENTITY}`, '');
        return result;
    }
}
TalentListBuilder.DELIMITER_ENTITY = ',';
TalentListBuilder.DELIMITER_PROPERTY = ':';
exports.talentListBuilder = new TalentListBuilder();


/***/ }),

/***/ "./src/app/talent-list/talent-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/talent-list/talent-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"talents-wrapper\">\r\n    <app-talent *ngFor=\"let talentKV of talents| keyvalue\" [talent]=\"talentKV.value\" [getTalentFunction]=\"getTalent\"\r\n        (eventTalentSelected)=\"closeAllTalents()\" [ngStyle]=\"talentKV.value.coordinate\">\r\n        test\r\n    </app-talent>\r\n    <div class=\"commander-icon\"></div>\r\n</div>\r\n<div class=\"btn-wrapper-reset\">\r\n    Total Points: {{totalPoints}} <button class=\"btn btn-red\" (click)=\"reset()\">Reset</button>\r\n</div>\r\n<div class=\"btn-wrapper-generate\">\r\n    <button class=\"btn btn-blue\" (click)=\"ngxSmartModalService.getModal('shareModal').open()\">Share</button>\r\n</div>\r\n<ngx-smart-modal #shareModal identifier=\"shareModal\">\r\n    <p>Share this URL to whom you want to share the app-talent tree.</p>\r\n    <div class=\"modal-input-wrapper\">\r\n        <input #inputTarget type=\"text\" [value]=\"shareableLink\"/>\r\n        <button class=\"btn btn-blue\" [ngxClipboard]=\"inputTarget\"><fa-icon icon=\"clipboard\"></fa-icon></button>\r\n    </div>\r\n\r\n    <button class=\"btn btn-red\" (click)=\"shareModal.close()\">Close</button>\r\n</ngx-smart-modal>"

/***/ }),

/***/ "./src/app/talent-list/talent-list.component.scss":
/*!********************************************************!*\
  !*** ./src/app/talent-list/talent-list.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  background: url('img_TalentBG1.png') no-repeat;\n  display: block;\n  width: 868px; }\n\n.talents-wrapper {\n  display: inline-block;\n  position: relative;\n  width: 580px;\n  height: 580px;\n  margin: 0 0 0 80px; }\n\n.btn-wrapper-reset {\n  display: flex;\n  align-items: center;\n  color: white;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAuCAYAAADgKBFVAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAjnSURBVHhe7Zx3qGRFFsZndc05Z9ecXQMGFPMurjlgzgrumhOisisqmBOmFZRVMCdMiCjmiDkrJlxz1v13//f7DfUNx9PVc7unZ16/fnMP/Kh+76aqOt89Vbdu1Z00DuwPfTKoTe/zzdLArAFsel9/5C1XSBPRqGD/L253ZZPOXsBI2WeuwDyJ+cTiJZ1DLJhYVswt/igwjllZrCM2FjuIeQvLiL+J1cUCgvwsVP5eUSwhyAPnIm+klAnjN9vmLKwg5hcu24QxO65XfGdhOGkxQWWRRkdRUQuLdQUVjjPYBwdQ+VsWVi2wH6whNhV/EghhrcJqYmmxkuD8FgB5QQSLFtjXeUQEvjb5AUTlPIAFQIoISOM5LYCdBCKwmDkXvxHj8iXFqJMaiNS/NxD7lHToVnPy1HDlAhUH/J+KhdkEFeYUJ+B4cAUDTgAfR4X7d8TX6EbMTw073vRSnvjbZiHk8+H4DQUigPXFLiU9Whwo/iouFDeKf4pHCj0LIGa4F7MaoxG+aoajItnsMJMd1GSuyFyh02pN+Y0OhVh3kLdTBqJNLpdBtBFHGkOTBJSNdKnAemLNwtbidHFogSarp/rIBcg2tQpBCDjeEEJxYjQfRyVsL1AtiiWDpJsFCNHsFyusyaLzeypwxWirzXIJNxF2CKE24qbF/DnxF3GUyOUyNQFwvdsKN4uLBXc9/COAABw5TN/1EZ1POKW9JNOkWHQ+F9xK7F84R1yTuF6cEjihcK34RnyV+LrwYeHBwmWFi8S/xOFiL7FvYUexhdgoYTEhNqDSDggcIo4tKZxRuEE8LB7vAs44V9xVeLXwfuKDLsRyUW9wqjhC7C0sIJxP+d4R34ufAu+KLwPUN3d+ZJtEo9n5qP8C8XrhCoEIcPpp4ibxpHhL/Bj4oQGcHukmAPNrIh//SYJKiVhI5rNErED4NvFzAidE8vboIMjbc3kyHyVwvJ0P+fw5/28nXkh0WLzjAePu5u6igu3Y1wSdijcFjnIGak4eJlGMUNtnZsI30hcCwXdYTQC0TQiAkJYrdDw6PZLzW9tnZqbDsgDcviOCmgBqJx1PjFp+x5oO6yYAOlqxCRiVCh21/I41vzMcHo2OH4MFDKL8W7QVOPGYbPGOj8YjHY8mu4pWABOT3znfAvCgBwJ4I9AKYOIxxfGMCq0tPAhxp3hOuO00tZO0jC5TjFGxB0QeiPHzvYmDHtAKZLSZbDziIQCGZI8TjMGTMsT5SoIBoFYAE4cOi68aedkRX2QAQ79XCwshC4DhzdqFWsYnHRYFADVbRCCEncVJ4rrAo6J2oZbxSaPFJwTgHTYDQ06ZSMHECl5T8uRwlYh9hhwh/pfI22uZbJlxNFpNAAYB+D0175qZhEBEQAQ8RcDTIjr4PfFsSVsBDJ9G6yYAnM+EDyIAAvCkD48hIAQ4WTCG8KlADCeKbcUl4nbBQBPbWgEMh0brJgCcHyOAowDOp7PoCHC5+I9ABKQHCxxPBEAMTFK4RbQCGA6NRkcQ5zKVi5QBI94PMI0JcCIwXAzMinlM+DGRu/tjwTvo/wreKJLCM+LvohXA8Gg0HO/JhkwpRgBMo2IKF+EbR+I4O9WON7WLAsfeIRAAM1RbAQyHrhY7eb77iQaeTGghWACmVwFwHNGAu585ca0AhkPV3M6DmwCPC+B4Rg4dBaZVACYeC7V9WmYcXc2rSIgC9NqB+eW8IaRj58mf+YTZoZm8f8tw6TBm+vJOgOFe4HHtfvFSoWnWb9xWI+/fMlw6jPn0ONnkacxNDs3bM3n/luHSYYR9ogAgBnrpRAFwBOD53pGAk3wnmGJMZ46XRBGOIbWgmNvO/h4qzhlqGVs6LA/80AcAhMGKGsYAgMe4/wsWX7A0idUq2wkmlURYVQubFxAVCxTvKTxRYH1BjhY1aoUYJXJ5uBki/XaiB6XDpiYAJoceJFghZFgcYueT4nQPB0N0/m4CAbDcif4F6X6CJVyk5wuWVbECh4ji1ThetcNvZibXCjIKkH8GxsArkxgRjdPuuBFYQkY5EQADaFEgtfMOQodlAdgsAkcAL7leReB4IBrQYYxr0XA8j4tPFZ4vUHCgwI4CQGRxcwKMItKMcAzpy4IlXhZCrJgZUUHTE2ZYudwvFqLzLQBgWRcCQCRexYMYaucdhA7rJoBuxhgBIAQciKNwPNGB1UR8pMF3P3hxpiPBMYJ1hS44TudOITw6AiCCKBgGkKgURODoQOVyLAJhH/6uFbhfuA7UtvWCy+C/Hfr9fwvYdzpOp1yACGIEGBMBNJmFEQeKgOiAU5kkwtwAwjq/+doGX93gaxv8pqnwkmpWG/NSif35+gUwzsB0NFYRc8fHhY6Q5xN47qLxndStDbUDTN6eceUbn9d8nnBn1zCxFscZO964M0xUI/1FxNXEMa8sCuVVeiSfj+MjuTzxfDBNhgBwHjODLAATDecyaggIBCFw9/PJFEAE7MMnV5z6yx2AGFia7TEJQBiGt4pEgyiA7KCmCsjbM00CINIdKWjeLACWkp8lGDzjG0E0gTifdx5XCp6sgN/3JS4tuEn0amBzrzgvwHWHJgB/i6dXYxg5ioVz0HxYAEQCO98Wh6UhfuwAmMBqeNXM/AOEYXjh5G8J8PshQdtLSvvKIy1L3UlzZUEWQL7DOQ4RkAKOP0zwcQj6TQidjjBCII1lw/xexV/6cJPK5142EbE/BXsGmG9xprg14HJ7ObibSOO+lRlziwKAJmsSAKIBmzunhqYnwockcD5PHAiBL2lYAHEdPnMbzxbcjXeXlI9euBNs4oRZBO2nJtNkFoCxAEyuLzfBhigc4UYCPoaxh+CdTQQhRkbOcgUwI4mKtyBobnj8dIXR9PA/Hl93F0xKoaNKyhc4jg/wKOrOKl/w4lhmOSEwUhySBZnzk+nXaucYhJzfzMhZrZCReLcA/7MIwKOcSwos799ErsB8/Uy/VjvHIOT8ZkbOcgGbrGm/mpMz8Xq5AuO2Gv1a7RyDkPObGTnLBezV+t3flo/JFejzdqNfq51jEHJ+M6211tpMapMm/QZXHrsu+Z+u7wAAAABJRU5ErkJggg==\");\n  background-repeat: no-repeat;\n  background-size: contain;\n  padding: 6px 0;\n  text-align: center;\n  position: fixed;\n  top: 0;\n  right: 0; }\n\n.btn-wrapper-reset button {\n    float: right;\n    margin: 0 1em; }\n\n.btn-wrapper-generate {\n  padding: 6px 10px;\n  text-align: center;\n  position: fixed;\n  bottom: 0;\n  right: 0; }\n\n.commander-icon {\n  width: 36px;\n  height: 36px;\n  background: black;\n  position: absolute;\n  left: 280px;\n  top: 275px; }\n\nngx-smart-modal {\n  text-align: center; }\n\nngx-smart-modal .modal-input-wrapper {\n    display: flex;\n    margin: 1em 0; }\n\nngx-smart-modal .modal-input-wrapper input {\n      flex-grow: 1;\n      margin: 0;\n      border-radius: .5em 0 0 .5em; }\n\nngx-smart-modal .modal-input-wrapper button {\n      margin: 0;\n      border-radius: 0 .5em .5em 0;\n      padding: .1em 1em;\n      box-shadow: inset 0px -2px 5px #0590d3; }\n"

/***/ }),

/***/ "./src/app/talent-list/talent-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/talent-list/talent-list.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const ngx_smart_modal_1 = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm2015/ngx-smart-modal.js");
const talent_component_1 = __webpack_require__(/*! @src/talent-list/talent/talent.component */ "./src/app/talent-list/talent/talent.component.ts");
const talents_service_1 = __webpack_require__(/*! @src/talent-list/talent/talents.service */ "./src/app/talent-list/talent/talents.service.ts");
const talent_list_builder_1 = __webpack_require__(/*! @src/talent-list/talent-list.builder */ "./src/app/talent-list/talent-list.builder.ts");
let TalentListComponent = class TalentListComponent {
    constructor(talentsService, ngxSmartModalService, location, route) {
        this.talentsService = talentsService;
        this.ngxSmartModalService = ngxSmartModalService;
        this.location = location;
        this.route = route;
        // Use arrow function so the context of 'this' is preserved
        this.getTalent = (talentIndex) => {
            return this.talents.get(talentIndex);
        };
        this.talents = this.loadTalents();
    }
    get shareableLink() {
        return window.location.origin +
            this.location.prepareExternalUrl(`?q=${talent_list_builder_1.talentListBuilder.toLevelString(this.talents)}`);
    }
    loadTalents() {
        let talents = this.talentsService.getTalents();
        // Check if QueryList needs to generate levels
        const query = this.route.snapshot.queryParamMap.get('q');
        if (query) {
            talents = talent_list_builder_1.talentListBuilder.fromLevelString(query, talents);
        }
        return talents;
    }
    closeAllTalents() {
        // Close all other talents
        this.contentChildren
            .filter(content => content.showDescription)
            .forEach(content => content.showDescription = false);
    }
    reset() {
        this.contentChildren.forEach(child => child.reset());
    }
    get totalPoints() {
        let result = 0;
        if (this.contentChildren) {
            result = this.contentChildren.reduce((acc, child) => acc + child.talent.level, 0);
        }
        return result;
    }
};
__decorate([
    core_1.ViewChildren(talent_component_1.TalentComponent),
    __metadata("design:type", core_1.QueryList)
], TalentListComponent.prototype, "contentChildren", void 0);
TalentListComponent = __decorate([
    core_1.Component({
        selector: 'app-talent-list',
        template: __webpack_require__(/*! ./talent-list.component.html */ "./src/app/talent-list/talent-list.component.html"),
        styles: [__webpack_require__(/*! ./talent-list.component.scss */ "./src/app/talent-list/talent-list.component.scss")]
    }),
    __metadata("design:paramtypes", [talents_service_1.TalentsService,
        ngx_smart_modal_1.NgxSmartModalService,
        common_1.Location,
        router_1.ActivatedRoute])
], TalentListComponent);
exports.TalentListComponent = TalentListComponent;


/***/ }),

/***/ "./src/app/talent-list/talent/assets/talents.json":
/*!********************************************************!*\
  !*** ./src/app/talent-list/talent/assets/talents.json ***!
  \********************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, default */
/***/ (function(module) {

module.exports = [{"name":"Pack Light","description":"Action Point cost decreases by <b>{0}</b>.","values":[[2,4,6,8,10]],"coordinate":{"left":"310px","top":"328px"},"lines":[{"top":"-16px","left":"-29px","width":"50px","transform":"rotate(-125deg)"}]},{"name":"Wood Gathering","description":"Wood gathering speed of this commander's troops increases by <b>{0}</b>.","values":[[10,20,30,40,50]],"dependencies":["Pack Light"],"coordinate":{"left":"390px","top":"335px"},"lines":[{"top":"12px","left":"-51px","width":"54px","transform":"rotate(-175deg)"}]},{"name":"Food Gathering","description":"Food gathering speed of this commander's troops increases by <b>{0}%</b>.","values":[[10,20,30,40,50]],"dependencies":["Pack Light"],"coordinate":{"left":"343px","top":"390px"},"lines":[{"top":"-16px","left":"-24px","width":"45px","transform":"rotate(-120deg)"}]},{"name":"Stone Gathering","description":"Stone gathering speed of this commander's troops increases by <b>{0}</b>.","values":[[10,20,30,40,50]],"dependencies":["Food Gathering","Wood Gathering"],"coordinate":{"left":"412px","top":"405px"},"lines":[{"top":"-20px","left":"-17px","width":"45px","transform":"rotate(-105deg)"},{"top":"8px","left":"-42px","width":"48px","transform":"rotate(-162deg)"}]},{"name":"Gold Gathering","description":"Gold gathering speed of this commander's troops increases by <b>{0}</b>.","values":[[10,20,30,40,50]],"dependencies":["Stone Gathering"],"coordinate":{"left":"400px","top":"480px"},"lines":[{"top":"-22px","left":"-3px","width":"45px","transform":"rotate(-80deg)"}]},{"name":"Troops Attack","description":"Increases attack of all troops led by this commander by <b>{0}%</b>.","values":[[0.5,1,1.5,2,2.5]],"coordinate":{"left":"195px","top":"260px"},"lines":[{"top":"50%","right":"0","width":"55px","transform":"translate(47px, -50%)"}]},{"name":"March Speedup","description":"Increases march speed of all troops by <b>{0}%</b>.","values":[[3,4,5]],"dependencies":["Troops Attack"],"coordinate":{"left":"135px","top":"260px"},"lines":[{"top":"50%","right":"0","width":"45px","transform":"translate(37px, -50%)"}]},{"name":"Guardian Angel","description":"Increases attack of garrison by <b>{0}%</b> when this commander is garrisoned in cities.","values":[[2,4,6,8,10]],"dependencies":["March Speedup"],"coordinate":{"left":"78px","top":"315px"},"lines":[{"top":"-13px","left":"17px","width":"51px","transform":"rotate(-45deg)"}]},{"name":"Rage Recovery","description":"Restores <b>{0}</b> rage after casting a skill.","values":[[25,50,75,100,125,150]],"dependencies":["Counterattack","Guardian Angel"],"coordinate":{"left":"55px","top":"385px"},"lines":[{"top":"-19px","left":"0","width":"48px","transform":"rotate(-72deg)"},{"top":"28px","left":"24px","width":"54px","transform":"rotate(-165deg)"}]},{"name":"Master Of Fighting","description":"Increases normal attack and counterattack damage by <b>{0}%</b>.","values":[[1,2,3,4,5]],"dependencies":["March Speedup"],"coordinate":{"left":"25px","top":"260px"},"lines":[{"top":"50%","left":"-48px","width":"84px","transform":"translate(76px, -50%)"}]},{"name":"Siege Unit Attack","description":"Attack of siege unit led by this commander increases by <b>{0}%</b>.","values":[[1,2,3,4,5]],"coordinate":{"right":"200px","top":"260px"},"lines":[{"top":"50%","left":"0","width":"55px","transform":"translate(-47px, -50%)"}]},{"name":"Siege Unit Defense","description":"Defense of siege unit led by this commander increases by <b>{0}%</b>.","values":[[1,2,3,4,5]],"dependencies":["Siege Unit Attack"],"coordinate":{"left":"415px","top":"260px"},"lines":[{"top":"50%","left":"-72px","width":"74px","transform":"translate(0px)"}]},{"name":"Siege Unit Health","description":"Health of siege unit led by this commander increases by <b>{0}%</b>.","values":[[3,4,5]],"dependencies":["Siege Unit Defense"],"coordinate":{"left":"465px","top":"315px"},"lines":[{"top":"-12px","left":"-32px","width":"48px","transform":"rotate(-135deg)"}]},{"name":"Troops Load","description":"Increases load of all troops by <b>{0}%</b>.","values":[[10,20,30,40,50]],"dependencies":["Siege Unit Health","Stone Gathering"],"isSpecial":true,"coordinate":{"left":"490px","top":"385px"},"lines":[{"top":"-20px","left":"-18px","width":"48px","transform":"rotate(-110deg)"},{"top":"25px","left":"-51px","width":"60px","transform":"rotate(-12deg)"}]},{"name":"Troops Siege","description":"Increases damage on watchtower from all troops by <b>{0}%</b>.","values":[[2,3,4,5,6]],"dependencies":["Siege Unit Defense"],"coordinate":{"left":"525px","top":"260px"},"lines":[{"top":"50%","left":"-3px","width":"84px","transform":"translate(-78px, -50%)"}]},{"name":"Troops Defense","description":"Increases defense of all troops by <b>{0}%</b>.","values":[[0.5,1,1.5,2,2.5]],"coordinate":{"left":"235px","top":"328px"},"lines":[{"top":"-50%","right":"50%","width":"45px","transform":"translate(85%, 0%) rotate(-60deg)"}]},{"name":"Great Maneuver","description":"Normal attack and counterattack taken decreases by <b>{0}%</b>.","values":[[1,2,3,4,5]],"dependencies":["Troops Defense"],"coordinate":{"left":"270px","top":"405px"},"lines":[{"top":"-26px","left":"-34px","width":"61px","transform":"rotate(-117deg)"}]},{"name":"Gathering Protection","description":"Normal attack and counterattack taken decreases by <b>{0}%</b>.","values":[[1,2,3,4,5]],"dependencies":["Food Gathering","Great Maneuver"],"coordinate":{"left":"325px","top":"455px"},"lines":[{"top":"-11px","left":"-35px","width":"48px","transform":"rotate(-136deg)"},{"top":"-15px","left":"2px","width":"48px","transform":"rotate(-75deg)"}]},{"name":"Unyielding","description":"Grants <b>{0}</b> additional rage when you are under attack.","values":[[2,4,6,8]],"dependencies":["Troops Defense"],"coordinate":{"left":"200px","top":"390px"},"lines":[{"top":"-50%","right":"50%","width":"49px","transform":"translate(85%, 0%) rotate(-60deg)"}]},{"name":"Medical Corps","description":"Increases the ratio of slightly wounded units in the wounded troops by <b>{0}%</b>.","values":[[5,6,7]],"dependencies":["Unyielding"],"coordinate":{"left":"145px","top":"480px"},"lines":[{"top":"-80%","right":"50%","width":"83px","transform":"translate(80%, -20%) rotate(-60deg)"}]},{"name":"Troops Health","description":"Increases health of all troops by <b>{0}%</b>.","values":[[0.5,1,1.5,2,2.5]],"dependencies":["Unyielding"],"coordinate":{"left":"220px","top":"455px"},"lines":[{"top":"-50%","right":"50%","width":"42px","transform":"translate(30%, 0%) rotate(-110deg)"}]},{"name":"Fight Till The End","description":"Increases defense by <b>{0}%</b> when total units are less than 30% of troop capacity.","values":[[5,6,7,8,9]],"dependencies":["Troops Health"],"coordinate":{"left":"270px","top":"515px"},"lines":[{"top":"-50%","left":"-50%","width":"50px","transform":"translate(-30%, 0%) rotate(-130deg)"}]},{"name":"Superior Tactician","description":"Increases skill damage by <b>{0}%</b>.","values":[[1,2,3,4]],"coordinate":{"left":"150px","top":"330px"},"lines":[{"top":"-50%","right":"0","width":"110px","transform":"translate(80%, 0%) rotate(-30deg)"}]},{"name":"Counterattack","description":"Increases counterattack damage by <b>{0}%</b>.","values":[[1,2,3,4,5]],"dependencies":["Unyielding","Superior Tactician"],"coordinate":{"left":"130px","top":"410px"},"lines":[{"top":"-22px","left":"-7px","width":"65px","transform":"rotate(-79deg)"},{"top":"6px","left":"26px","width":"48px","transform":"rotate(-15deg)"}]},{"name":"Fateful Blessing","description":"Reduces watchtower damage taken by <b>{0}%</b>.","values":[[2,4,6,8,10]],"dependencies":["Infantry Defense","Siege Unit Defense"],"coordinate":{"left":"465px","top":"210px"},"lines":[{"top":"43px","left":"-29px","width":"45px","transform":"rotate(-45deg)"},{"top":"7px","left":"-50px","width":"54px","transform":"rotate(-165deg)"}]},{"name":"Infantry Defense","description":"Defense of infantry led by this commander increases by <b>{0}%</b>.","values":[[1,2,3,4,5]],"coordinate":{"left":"395px","top":"195px"},"lines":[{"top":"40px","left":"-104px","width":"127px","transform":"rotate(-23deg)"}]},{"name":"Archer Defense","description":"Defense of archer led by this commander increases by <b>{0}%</b>.","values":[[1,2,3,4,5]],"dependencies":["Archer Attack"],"coordinate":{"left":"310px","top":"195px"},"lines":[{"top":"16px","left":"-45px","width":"47px","transform":"rotate(0deg)"}]},{"name":"Archer Attack","description":"Attack of archer led by this commander increases by <b>{0}%</b>.","values":[[1,2,3,4,5]],"coordinate":{"left":"235px","top":"195px"},"lines":[{"top":"46px","left":"11px","width":"42px","transform":"rotate(-120deg)"}]},{"name":"Cavalry Attack","description":"Attack of cavalry led by this commander increases by <b>{0}%</b>.","values":[[1,2,3,4,5]],"coordinate":{"left":"150px","top":"195px"},"lines":[{"top":"42px","left":"22px","width":"102px","transform":"rotate(-150deg)"}]},{"name":"Disturbance","description":"Grants a <b>{0}%</b> chance on normal attack to lower the march speed of enemy by 10%, lasts for 3 seconds.","values":[[10,20,30,40,50]],"dependencies":["Cavalry Attack","March Speedup"],"coordinate":{"left":"75px","top":"210px"},"lines":[{"top":"41px","left":"22px","width":"51px","transform":"rotate(-138deg)"},{"top":"8px","left":"27px","width":"55px","transform":"rotate(-10deg)"}]},{"name":"Cavalry Commander","description":"When you only select cavalry units to form troops, grants <b>{0}%</b> additional march speed.","values":[[5,10,15,20,25,30]],"dependencies":["Cavalry Speed","Cavalry Health"],"coordinate":{"left":"55px","top":"140px"},"lines":[{"top":"8px","left":"25px","width":"54px","transform":"rotate(-12deg)"},{"top":"-32px","left":"9px","width":"102px","transform":"rotate(-45deg)"}]},{"name":"Cavalry Speed","description":"March speed of cavalry led by this commander increases by <b>{0}%</b>.","values":[[3,6,10]],"dependencies":["Cavalry Defense"],"coordinate":{"left":"130px","top":"125px"},"lines":[{"top":"23px","left":"28px","width":"44px","transform":"rotate(-170deg)"}]},{"name":"Cavalry Defense","description":"Defense of cavalry led by this commander increases by <b>{0}%</b>.","values":[[5,10,15,20,25]],"dependencies":["Cavalry Attack"],"coordinate":{"left":"200px","top":"140px"},"lines":[{"top":"44px","left":"-32px","width":"46px","transform":"rotate(-45deg)"}]},{"name":"Archer Speed","description":"March Speed of archer led by this commander increases by <b>{0}%</b>.","values":[[3,6,10]],"dependencies":["Archer Defense"],"coordinate":{"left":"271px","top":"120px"},"lines":[{"top":"53px","left":"7px","width":"57px","transform":"rotate(-115deg)"}]},{"name":"Infantry Attack","description":"Attack of infantry led by this commander increases by <b>{0}%</b>.","values":[[1,2,3,4,5]],"dependencies":["Infantry Defense"],"coordinate":{"left":"350px","top":"140px"},"lines":[{"top":"43px","left":"19px","width":"43px","transform":"rotate(-128deg)"}]},{"name":"Infantry Speed","description":"March Speed of infantry led by this commander increases by <b>{0}%</b>.","values":[[3,6,10]],"dependencies":["Infantry Attack"],"coordinate":{"left":"410px","top":"125px"},"lines":[{"top":"21px","left":"-30px","width":"36px","transform":"rotate(-12deg)"}]},{"name":"Infantry Commander","description":"When you only select infantry units to form troops, grants <b>{0}%</b> additional damage reduction.","values":[[3,6,10]],"dependencies":["Infantry Speed","Infantry Health"],"coordinate":{"left":"485px","top":"140px"},"lines":[{"top":"7px","left":"-45px","width":"50px","transform":"rotate(-168deg)"},{"top":"-31px","left":"-75px","width":"98px","transform":"rotate(-135deg)"}]},{"name":"Cavalry Health","description":"Health of cavalry led by this commander increases by <b>{0}%</b>.","values":[[1,2,3,4,5]],"dependencies":["Cavalry Defense"],"coordinate":{"left":"145px","top":"45px"},"lines":[{"top":"64px","left":"2px","width":"82px","transform":"rotate(-120deg)"}]},{"name":"Archer Commander","description":"When you only select archer units to form troops, grants <b>{0}%</b> additional damage.","values":[[2,4,6,8,10,12]],"dependencies":["Archer Speed","Archer Health"],"coordinate":{"left":"220px","top":"70px"},"lines":[{"top":"16px","left":"29px","width":"80px","transform":"rotate(0deg)"},{"top":"40px","left":"21px","width":"42px","transform":"rotate(-135deg)"}]},{"name":"Archer Health","description":"Health of archer led by this commander increases by <b>{0}%</b>.","values":[[1,2,3,4,5]],"dependencies":["Archer Defense"],"coordinate":{"left":"325px","top":"70px"},"lines":[{"top":"81px","left":"-39px","width":"98px","transform":"rotate(-85deg)"}]},{"name":"Infantry Health","description":"Health of infantry led by this commander increases by <b>{0}%</b>.","values":[[1,2,3,4,5]],"dependencies":["Infantry Attack"],"coordinate":{"left":"395px","top":"50px"},"lines":[{"top":"62px","left":"-43px","width":"73px","transform":"rotate(-65deg)"}]},{"name":"Troops Expansion","description":"Increases the troops capacity of this commander by <b>{0}%</b>.","values":[[1,2,3,4,5]],"dependencies":["Infantry Health","Cavalry Health","Archer Health"],"isSpecial":true,"coordinate":{"left":"275px","top":"10px"},"lines":[{"top":"46px","left":"17px","width":"50px","transform":"rotate(-130deg)"},{"top":"31px","left":"26px","width":"105px","transform":"rotate(-165deg)"},{"top":"31px","left":"-102px","width":"108px","transform":"rotate(-15deg)"}]}];

/***/ }),

/***/ "./src/app/talent-list/talent/talent-svg.component.html":
/*!**************************************************************!*\
  !*** ./src/app/talent-list/talent/talent-svg.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"100%\" viewBox=\"0 0 200 200\">\r\n\t<path class=\"bg\" fill=\"black\" style=\"transform: translate(0%, -2%) scale(1.6); opacity: .7;\" d=\"M 53.00,5.57 C 46.59,7.71 30.01,17.83 23.00,21.73 19.02,23.94 10.09,28.77 7.51,32.10 4.73,35.69 5.01,39.73 5.00,44.00 5.00,44.00 5.00,85.00 5.00,85.00 5.00,87.90 4.78,91.19 6.14,93.83 8.17,97.81 13.25,100.45 17.00,102.58 17.00,102.58 39.00,115.30 39.00,115.30 43.18,117.60 50.44,122.21 55.00,122.77 61.77,123.61 74.94,114.29 81.00,110.66 87.27,106.90 102.65,100.07 105.69,93.99 107.18,91.00 106.99,87.26 107.00,84.00 107.00,84.00 107.00,49.00 107.00,49.00 107.00,44.47 107.73,36.80 105.26,33.04 103.13,29.80 100.13,28.63 97.00,26.69 97.00,26.69 77.00,14.99 77.00,14.99 69.88,10.83 61.35,4.47 53.00,5.57 Z\" />\r\n\t<image attr.xlink:href=\"{{imagePath}}\" style=\"transform: translate(10%, 10%) scale(.8);\" x=\"11px\"\r\n\t height=\"96%\" y=\"2px\" width=\"75%\" />\r\n\t<g class=\"levelCircle\" style=\"transform: translate(10%, 10%) scale(1.2);\">\r\n\t\t<path class=\"SelectionOne\" d=\"M 57.00,0.00\r\n C 57.10,8.66 57.96,6.71 71.00,14.15\r\n 71.00,14.15 91.00,25.70 91.00,25.70\r\n 94.97,27.88 100.55,30.68 103.43,34.18\r\n 105.92,37.20 106.46,40.27 107.00,44.00\r\n 107.00,44.00 113.00,44.00 113.00,44.00\r\n 113.00,38.92 113.53,34.41 110.35,30.04\r\n 107.28,25.82 99.66,22.06 95.00,19.42\r\n 85.76,14.19 66.22,2.17 57.00,0.00 Z\" />\r\n\t\t<path class=\"SelectionTwo\" d=\"M 107.00,45.00\r\n C 107.00,45.00 107.00,82.00 107.00,82.00\r\n 106.94,86.73 106.52,91.04 103.43,94.90\r\n 99.98,99.21 87.73,104.81 82.00,109.00\r\n 83.29,110.37 83.98,111.52 86.04,111.88\r\n 89.84,112.53 100.54,105.57 104.00,103.38\r\n 115.09,96.37 113.00,89.43 113.00,78.00\r\n 113.00,78.00 113.00,45.00 113.00,45.00\r\n 113.00,45.00 107.00,45.00 107.00,45.00 Z\" />\r\n\t\t<path class=\"SelectionThree\" d=\"M 34.00,111.00\r\n C 34.00,111.00 32.00,116.00 32.00,116.00\r\n 37.03,118.66 51.27,127.08 56.00,127.44\r\n 61.61,127.86 78.81,117.38 84.00,114.00\r\n 82.94,112.97 82.52,112.14 80.89,111.73\r\n 78.32,111.07 75.18,113.08 73.00,114.28\r\n 68.96,116.52 61.54,121.35 57.00,121.35\r\n 51.48,121.34 40.58,113.08 34.00,111.00 Z\" />\r\n\t\t<path class=\"SelectionFour\" d=\"M 0.00,45.00\r\n C 0.00,45.00 0.00,84.00 0.00,84.00\r\n 0.01,88.61 -0.03,92.78 2.41,96.91\r\n 5.38,101.92 24.10,111.84 30.00,114.00\r\n 30.00,114.00 32.00,109.00 32.00,109.00\r\n 26.84,106.03 12.96,98.94 9.85,94.82\r\n 6.83,90.81 7.01,86.73 7.00,82.00\r\n 7.00,82.00 7.00,45.00 7.00,45.00\r\n 7.00,45.00 0.00,45.00 0.00,45.00 Z\" />\r\n\t\t<path class=\"SelectionFive\" d=\"M 0.00,41.00\r\n C 0.00,41.00 7.00,41.00 7.00,41.00\r\n 7.77,37.94 8.39,35.77 10.56,33.32\r\n 13.81,29.65 36.15,17.49 42.00,14.15\r\n 54.74,6.88 56.55,8.12 55.00,1.00\r\n 46.36,2.62 32.23,12.17 24.00,16.70\r\n 19.86,18.97 7.17,25.75 4.39,28.53\r\n 0.95,31.96 0.23,36.38 0.00,41.00 Z\" />\r\n\t</g>\r\n\t<path class=\"Circle\" fill=\"white\" style=\"transform: translate(5%, 4%) scale(1.4);\" d=\"M 4.00,102.00 \r\n C 7.78,102.35 11.54,105.56 15.00,107.47 \r\n 15.00,107.47 42.00,122.94 42.00,122.94 \r\n 45.91,125.03 48.54,127.65 53.04,127.95 \r\n 63.39,128.64 71.56,122.32 80.00,117.23 \r\n 80.00,117.23 99.91,106.02 99.91,106.02 \r\n 102.70,104.36 107.38,102.26 109.28,99.78 \r\n 112.03,96.18 111.99,90.33 112.00,86.00 \r\n 112.00,86.00 112.00,42.00 112.00,42.00 \r\n 111.99,37.28 112.06,32.18 109.12,28.18 \r\n 106.51,24.62 100.89,22.52 97.00,20.19 \r\n 97.00,20.19 72.83,6.67 72.83,6.67 \r\n 66.51,2.98 63.03,-0.35 55.00,0.11 \r\n 45.86,0.63 25.84,14.44 17.00,19.41 \r\n 12.70,21.83 5.90,24.51 2.80,28.26 \r\n -0.26,31.96 0.01,35.52 0.00,40.00 \r\n 0.00,40.00 0.00,77.00 0.00,77.00 \r\n 0.00,87.77 -1.66,92.41 4.00,102.00 Z \r\n M 99.00,101.00 \r\n C 99.00,101.00 71.67,115.23 71.67,115.23 \r\n 67.26,117.72 62.25,122.13 57.00,122.50 \r\n 52.22,122.84 40.74,115.70 36.00,113.16 \r\n 36.00,113.16 17.00,102.28 17.00,102.28 \r\n 14.14,100.66 9.42,98.18 7.57,95.47 \r\n 5.56,92.53 5.05,85.58 5.00,82.00 \r\n 5.00,82.00 5.00,48.00 5.00,48.00 \r\n 5.01,43.76 5.24,35.65 7.74,32.21 \r\n 10.51,28.38 21.15,23.93 25.83,21.06 \r\n 32.53,16.96 48.04,6.37 55.00,5.83 \r\n 61.84,5.30 65.90,9.85 71.72,12.69 \r\n 71.72,12.69 92.28,24.33 92.28,24.33 \r\n 94.32,25.49 102.37,29.89 103.49,31.36 \r\n 105.57,34.10 106.99,44.37 107.00,48.00 \r\n 107.02,58.06 107.88,85.88 105.25,93.98 \r\n 103.69,98.78 99.90,97.37 99.00,101.00 Z\" />\r\n</svg>"

/***/ }),

/***/ "./src/app/talent-list/talent/talent-svg.component.ts":
/*!************************************************************!*\
  !*** ./src/app/talent-list/talent/talent-svg.component.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let TalentSVGComponent = class TalentSVGComponent {
    constructor() {
        this.imagePath = '';
    }
    set image(image) {
        this.imagePath = `talent-list/talent/assets/images/${image}.png`;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TalentSVGComponent.prototype, "image", null);
TalentSVGComponent = __decorate([
    core_1.Component({
        selector: 'app-talent-svg',
        template: __webpack_require__(/*! ./talent-svg.component.html */ "./src/app/talent-list/talent/talent-svg.component.html")
    }),
    __metadata("design:paramtypes", [])
], TalentSVGComponent);
exports.TalentSVGComponent = TalentSVGComponent;


/***/ }),

/***/ "./src/app/talent-list/talent/talent.component.html":
/*!**********************************************************!*\
  !*** ./src/app/talent-list/talent/talent.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"talent\" [attr.data-level]=\"talent.level\" [attr.data-unlocked]=\"resolvedDependencies()\">\r\n    <div *ngIf=\"showDescription\" class=\"talent-description\">\r\n        <div class=\"talent-description-header\">\r\n            <h3>{{talent.name}} </h3>\r\n            <span>{{talent.level}}/{{talent.totalLevel}}</span>\r\n        </div>\r\n        <div class=\"talent-description-details\">\r\n            <div *ngFor=\"let levelValues of talent.values\">\r\n                <h4>{{talent.type}}</h4>\r\n                <mat-tab-group [disableRipple]=\"true\" headerPosition=\"below\" [selectedIndex]=\"talent.level\">\r\n                    <mat-tab *ngFor=\"let value of levelValues; index as i\" label=\"{{i+1}}\">\r\n                        <p [innerHTML]=\"talent.description | format: value\"></p>\r\n                    </mat-tab>\r\n                </mat-tab-group>\r\n            </div>\r\n        </div>\r\n        <div class=\"talent-description-buttons\" *ngIf=\"resolvedDependencies()\">\r\n            <button [disabled]=\"!canUpgrade()\" class=\"btn btn-blue\" (click)=\"upgrade()\">Upgrade</button>\r\n            <button class=\"btn btn-red\" (click)=\"reset()\">Reset</button>\r\n        </div>\r\n        <div class=\"talent-dependencies\" *ngIf=\"!resolvedDependencies()\">\r\n            <p>Please upgrade <b [innerHTML]=\"talent.dependencies\"></b> to the maximum level first.</p>\r\n            <div>\r\n                <app-talent-svg *ngFor=\"let dependency of dependencies\" [image]=\"dependency.name\"></app-talent-svg>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"talent-image\">\r\n        <app-talent-svg [image]=\"talent.name\" (click)=\"emitSelect()\"></app-talent-svg>\r\n        <div class=\"talent-line\" *ngFor=\"let line of talent.lines\" [ngStyle]=\"line\"></div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/talent-list/talent/talent.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/talent-list/talent/talent.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: inline-block;\n  position: absolute;\n  margin: 1rem;\n  width: 34px;\n  height: 34px; }\n  :host .talent, :host .talent-image {\n    display: block;\n    width: 100%;\n    height: 100%; }\n  :host .talent-image {\n    /* Make sure the inline-elements do not expect any fonts, so no 'reserving' height will be created */\n    line-height: 0; }\n  .talent-image:active app-talent-svg {\n  -webkit-filter: saturate(0.5);\n          filter: saturate(0.5);\n  -webkit-transform: scale(0.9);\n          transform: scale(0.9); }\n  .talent[data-level='1'] ::ng-deep svg .SelectionOne {\n  fill: white; }\n  .talent[data-level='2'] ::ng-deep svg .SelectionOne,\n.talent[data-level='2'] ::ng-deep svg .SelectionTwo {\n  fill: white; }\n  .talent[data-level='3'] ::ng-deep svg .SelectionOne,\n.talent[data-level='3'] ::ng-deep svg .SelectionTwo,\n.talent[data-level='3'] ::ng-deep svg .SelectionThree {\n  fill: white; }\n  .talent[data-level='4'] ::ng-deep svg .SelectionOne,\n.talent[data-level='4'] ::ng-deep svg .SelectionTwo,\n.talent[data-level='4'] ::ng-deep svg .SelectionThree,\n.talent[data-level='4'] ::ng-deep svg .SelectionFour {\n  fill: white; }\n  .talent[data-level='5'] ::ng-deep svg .SelectionOne,\n.talent[data-level='5'] ::ng-deep svg .SelectionTwo,\n.talent[data-level='5'] ::ng-deep svg .SelectionThree,\n.talent[data-level='5'] ::ng-deep svg .SelectionFour,\n.talent[data-level='5'] ::ng-deep svg .SelectionFive {\n  fill: white; }\n  .talent[data-unlocked=\"false\"] .talent-image {\n  opacity: .5; }\n  .talent[data-unlocked=\"false\"] .talent-line {\n  height: 0; }\n  .talent-dependencies > div {\n  display: inline-block; }\n  .talent-dependencies b {\n  color: #d8483a; }\n  .talent-dependencies app-talent-svg {\n  width: 65px;\n  display: inline-block;\n  -webkit-filter: saturate(0);\n          filter: saturate(0);\n  pointer-events: none; }\n  .talent-description {\n  text-align: center;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: .2em;\n  padding: .5em;\n  position: absolute;\n  left: 100%;\n  margin: 0;\n  bottom: 50%;\n  -webkit-transform: translateY(50%);\n          transform: translateY(50%);\n  z-index: 2; }\n  @media (max-width: 767px) {\n    .talent-description {\n      width: 50vw; } }\n  @media (min-width: 1025px) {\n    .talent-description {\n      width: 20vw; } }\n  .talent-description .talent-description-header {\n    overflow: hidden;\n    padding: .5em 0; }\n  .talent-description .talent-description-header h3 {\n      float: left;\n      margin: 0; }\n  .talent-description .talent-description-header span {\n      float: right; }\n  .talent-description .talent-description-buttons {\n    display: flex;\n    justify-content: space-around;\n    padding: 1em; }\n  .talent-description .talent-description-buttons button {\n      margin: 0; }\n  .talent-description-details {\n  background: rgba(175, 208, 133, 0.6);\n  padding: .5em;\n  border-radius: .5em;\n  text-align: left; }\n  .talent-description-details span {\n    float: right; }\n  .talent[data-level='0'] app-talent-svg {\n  -webkit-filter: saturate(0);\n          filter: saturate(0); }\n  .talent-image:hover app-talent-svg {\n  cursor: pointer; }\n  .talent-image app-talent-svg {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: 1;\n  position: relative; }\n  .talent-image .talent-line {\n  position: absolute;\n  height: 3px;\n  background: white;\n  border-color: black;\n  border-width: 1px 0 1px 0;\n  border-style: solid; }\n  .talent ::ng-deep h3 {\n  margin: .5em 0; }\n  .talent ::ng-deep h4 {\n  margin: 0; }\n  .talent ::ng-deep .mat-tab-list {\n  width: 100%; }\n  .talent ::ng-deep .mat-tab-labels {\n  padding: 10px 0; }\n  .talent ::ng-deep .mat-tab-label {\n  min-width: auto;\n  flex-grow: 1;\n  height: auto;\n  width: auto;\n  padding: 0;\n  margin: 0 1%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  @media (max-width: 767px) {\n    .talent ::ng-deep .mat-tab-label {\n      font-size: 3vw; } }\n  @media (min-width: 1025px) {\n    .talent ::ng-deep .mat-tab-label {\n      font-size: 2vw; } }\n  .talent ::ng-deep .mat-tab-label-content {\n  display: block;\n  justify-content: unset;\n  align-items: unset;\n  background: grey;\n  height: 100%;\n  width: 100%;\n  border-radius: 1em;\n  color: white;\n  padding: 0 0.5em; }\n  .talent ::ng-deep .mat-tab-label-active .mat-tab-label-content {\n  background: #11c1fb; }\n"

/***/ }),

/***/ "./src/app/talent-list/talent/talent.component.ts":
/*!********************************************************!*\
  !*** ./src/app/talent-list/talent/talent.component.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const talent_model_1 = __webpack_require__(/*! @src/talent-list/talent/talent.model */ "./src/app/talent-list/talent/talent.model.ts");
let TalentComponent = class TalentComponent {
    constructor() {
        this.eventTalentSelected = new core_1.EventEmitter();
        this.dependencies = [];
        this.dependencyNames = [];
    }
    ngOnInit() {
        // Transform the index of the linked talent to an actual talent model
        this.talent.dependencies.forEach((dep, i) => {
            const talent = this.getTalentFunction(dep);
            if (talent) {
                this.dependencies[i] = talent;
            }
        });
    }
    emitSelect() {
        // An indication of a talent selection change only happens when the show value is 'false'
        // 'true' is only a nullable selection and is no change of selection
        if (!this.showDescription) {
            this.eventTalentSelected.emit();
        }
        this.select();
    }
    select() {
        this.showDescription = !this.showDescription;
    }
    upgrade() {
        if (!this.canUpgrade()) {
            return;
        }
        this.talent.level += 1;
    }
    canUpgrade() {
        const newValue = this.talent.level + 1;
        return newValue <= this.talent.totalLevel
            && this.resolvedDependencies();
    }
    resolvedDependencies() {
        const result = this.dependencies.filter(dep => dep.level !== dep.totalLevel).length === 0;
        // When its dependencies have been reset, also reset the parent level
        if (!result) {
            this.reset();
        }
        return result;
    }
    reset() {
        this.talent.level = 0;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", talent_model_1.TalentModel)
], TalentComponent.prototype, "talent", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], TalentComponent.prototype, "getTalentFunction", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TalentComponent.prototype, "eventTalentSelected", void 0);
TalentComponent = __decorate([
    core_1.Component({
        selector: 'app-talent',
        template: __webpack_require__(/*! ./talent.component.html */ "./src/app/talent-list/talent/talent.component.html"),
        styles: [__webpack_require__(/*! ./talent.component.scss */ "./src/app/talent-list/talent/talent.component.scss")]
    })
], TalentComponent);
exports.TalentComponent = TalentComponent;


/***/ }),

/***/ "./src/app/talent-list/talent/talent.model.ts":
/*!****************************************************!*\
  !*** ./src/app/talent-list/talent/talent.model.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class TalentModel {
    constructor(name = '', description = '', values = [], required = [], coordinate = {}, type = 'Buff', level = 0, totalLevel = 0, lines = [], dependencies = [], isSpecial = false) {
        this.name = name;
        this.description = description;
        this.values = values;
        this.required = required;
        this.coordinate = coordinate;
        this.type = type;
        this.level = level;
        this.totalLevel = totalLevel;
        this.lines = lines;
        this.dependencies = dependencies;
        this.isSpecial = isSpecial;
    }
}
exports.TalentModel = TalentModel;


/***/ }),

/***/ "./src/app/talent-list/talent/talents.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/talent-list/talent/talents.service.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const talent_model_1 = __webpack_require__(/*! @src/talent-list/talent/talent.model */ "./src/app/talent-list/talent/talent.model.ts");
const talents_json_1 = __importDefault(__webpack_require__(/*! ./assets/talents.json */ "./src/app/talent-list/talent/assets/talents.json"));
let TalentsService = class TalentsService {
    constructor() { }
    getTalents() {
        const result = new Map();
        talents_json_1.default.forEach(entity => {
            const talent = Object.assign(new talent_model_1.TalentModel(), entity);
            talent.totalLevel = talent.values[0].length;
            result.set(talent.name, talent);
        });
        return result;
    }
};
TalentsService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], TalentsService);
exports.TalentsService = TalentsService;


/***/ }),

/***/ "./src/app/talent-list/talents.module.ts":
/*!***********************************************!*\
  !*** ./src/app/talent-list/talents.module.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
const animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const fontawesome_svg_core_1 = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
const angular_fontawesome_1 = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
const free_solid_svg_icons_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
const ngx_smart_modal_1 = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm2015/ngx-smart-modal.js");
const ngx_clipboard_1 = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm2015/ngx-clipboard.js");
const talent_list_component_1 = __webpack_require__(/*! @src/talent-list/talent-list.component */ "./src/app/talent-list/talent-list.component.ts");
const talent_component_1 = __webpack_require__(/*! @src/talent-list/talent/talent.component */ "./src/app/talent-list/talent/talent.component.ts");
const talent_svg_component_1 = __webpack_require__(/*! @src/talent-list/talent/talent-svg.component */ "./src/app/talent-list/talent/talent-svg.component.ts");
const format_pipe_1 = __webpack_require__(/*! @src/shared/format.pipe */ "./src/app/shared/format.pipe.ts");
fontawesome_svg_core_1.library.add(free_solid_svg_icons_1.faClipboard);
let TalentsModule = class TalentsModule {
};
TalentsModule = __decorate([
    core_1.NgModule({
        declarations: [
            talent_component_1.TalentComponent,
            talent_list_component_1.TalentListComponent,
            talent_svg_component_1.TalentSVGComponent,
            format_pipe_1.FormatPipe
        ],
        imports: [
            material_1.MatTabsModule,
            animations_1.BrowserAnimationsModule,
            ngx_smart_modal_1.NgxSmartModalModule.forChild(),
            ngx_clipboard_1.ClipboardModule,
            angular_fontawesome_1.FontAwesomeModule,
            router_1.RouterModule.forChild([
                { path: '', component: talent_list_component_1.TalentListComponent }
            ])
        ],
        exports: [
            talent_component_1.TalentComponent,
            talent_list_component_1.TalentListComponent,
            talent_svg_component_1.TalentSVGComponent,
            format_pipe_1.FormatPipe
        ]
    })
], TalentsModule);
exports.TalentsModule = TalentsModule;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
const app_module_1 = __webpack_require__(/*! @src/app.module */ "./src/app/app.module.ts");
const environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Sander\Projects\Lilth games\RoC-talent-tree\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map