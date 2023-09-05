(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _guard_authenticator_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guard/authenticator.guard */ "./src/app/guard/authenticator.guard.ts");
/* harmony import */ var _authenticate_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authenticate/login/login.component */ "./src/app/authenticate/login/login.component.ts");
/* harmony import */ var _authenticate_authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authenticate/authenticate/authenticate.component */ "./src/app/authenticate/authenticate/authenticate.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _views_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/user/user-list/user-list.component */ "./src/app/views/user/user-list/user-list.component.ts");
/* harmony import */ var _views_reclamation_reclamation_list_reclamation_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/reclamation/reclamation-list/reclamation-list.component */ "./src/app/views/reclamation/reclamation-list/reclamation-list.component.ts");
/* harmony import */ var _views_composant_composant_list_composant_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/composant/composant-list/composant-list.component */ "./src/app/views/composant/composant-list/composant-list.component.ts");
/* harmony import */ var _views_news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/news/news-list/news-list.component */ "./src/app/views/news/news-list/news-list.component.ts");
/* harmony import */ var _views_user_user_crud_password_user_crud_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/user/user-crud-password/user-crud-password.component */ "./src/app/views/user/user-crud-password/user-crud-password.component.ts");
/* harmony import */ var _views_compteur_compteur_list_compteur_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/compteur/compteur-list/compteur-list.component */ "./src/app/views/compteur/compteur-list/compteur-list.component.ts");
/* harmony import */ var _views_news_news_crud_add_news_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/news/news-crud/add-news.component */ "./src/app/views/news/news-crud/add-news.component.ts");
/* harmony import */ var _views_document_add_document_add_document_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/document/add-document/add-document.component */ "./src/app/views/document/add-document/add-document.component.ts");
/* harmony import */ var _views_landing_user_landing_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/landing-user/landing-user.component */ "./src/app/views/landing-user/landing-user.component.ts");

















const routes = [
    { path: '', redirectTo: '/authenticate', pathMatch: 'full' },
    {
        path: 'authenticate', component: _authenticate_authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_4__["AuthenticateComponent"]
    },
    //  children: [
    { path: 'login', component: _authenticate_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    //   
    // }
    { path: 'ListUser', component: _views_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__["UserListComponent"], canActivate: [_guard_authenticator_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorGuard"]] },
    { path: 'ListReclamation', component: _views_reclamation_reclamation_list_reclamation_list_component__WEBPACK_IMPORTED_MODULE_7__["reclamationListComponent"] },
    { path: 'ListComposant', component: _views_composant_composant_list_composant_list_component__WEBPACK_IMPORTED_MODULE_8__["composantListComponent"] },
    { path: 'ListNews', component: _views_news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_9__["newsListComponent"] },
    { path: 'ListDocuments', component: _views_news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_9__["newsListComponent"] },
    { path: 'ChangeUserPassword/:req', component: _views_user_user_crud_password_user_crud_password_component__WEBPACK_IMPORTED_MODULE_10__["UserCrudPasswordComponent"] },
    { path: 'ChangeUserPassword', component: _views_user_user_crud_password_user_crud_password_component__WEBPACK_IMPORTED_MODULE_10__["UserCrudPasswordComponent"] },
    { path: 'MyData', component: _views_user_user_crud_password_user_crud_password_component__WEBPACK_IMPORTED_MODULE_10__["UserCrudPasswordComponent"] },
    { path: 'ListCompteur', component: _views_compteur_compteur_list_compteur_list_component__WEBPACK_IMPORTED_MODULE_11__["compteurListComponent"], canActivate: [_guard_authenticator_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorGuard"]] },
    { path: 'ListCompteur/:req', component: _views_compteur_compteur_list_compteur_list_component__WEBPACK_IMPORTED_MODULE_11__["compteurListComponent"] },
    { path: 'addNews', component: _views_news_news_crud_add_news_component__WEBPACK_IMPORTED_MODULE_12__["AddNewsComponent"] },
    { path: 'addDocument', component: _views_document_add_document_add_document_component__WEBPACK_IMPORTED_MODULE_13__["AddDocumentComponent"] },
    { path: 'LandingUser', component: _views_landing_user_landing_user_component__WEBPACK_IMPORTED_MODULE_14__["LandingUserComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes),
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes),
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'dak';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["mat-sidenav-container[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    height: 100%;\r\n    min-height: 100%;\r\n    width: 100%;\r\n    min-width: 100%;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZUFBZTtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_navbar_user_navbar_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navbar-user/navbar-user.component */ "./src/app/components/navbar-user/navbar-user.component.ts");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _components_sidenav_user_sidenav_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/sidenav-user/sidenav-user.component */ "./src/app/components/sidenav-user/sidenav-user.component.ts");
/* harmony import */ var _components_dynamic_table_list_dynamic_table_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dynamic-table-list/dynamic-table-list.component */ "./src/app/components/dynamic-table-list/dynamic-table-list.component.ts");
/* harmony import */ var _navidation_sidenav_list_admin_sidenav_list_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navidation/sidenav-list-admin/sidenav-list-admin.component */ "./src/app/navidation/sidenav-list-admin/sidenav-list-admin.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _authenticate_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./authenticate/login/login.component */ "./src/app/authenticate/login/login.component.ts");
/* harmony import */ var _authenticate_authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./authenticate/authenticate/authenticate.component */ "./src/app/authenticate/authenticate/authenticate.component.ts");
/* harmony import */ var _components_landing_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/landing-carousel/carousel.component */ "./src/app/components/landing-carousel/carousel.component.ts");
/* harmony import */ var _views_user_user_crud_user_crud_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/user/user-crud/user-crud.component */ "./src/app/views/user/user-crud/user-crud.component.ts");
/* harmony import */ var _views_reclamation_reclamation_list_reclamation_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/reclamation/reclamation-list/reclamation-list.component */ "./src/app/views/reclamation/reclamation-list/reclamation-list.component.ts");
/* harmony import */ var _views_reclamation_reclamation_crud_reclamation_crud_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/reclamation/reclamation-crud/reclamation-crud.component */ "./src/app/views/reclamation/reclamation-crud/reclamation-crud.component.ts");
/* harmony import */ var _views_composant_composant_crud_composant_crud_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/composant/composant-crud/composant-crud.component */ "./src/app/views/composant/composant-crud/composant-crud.component.ts");
/* harmony import */ var _views_composant_composant_list_composant_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/composant/composant-list/composant-list.component */ "./src/app/views/composant/composant-list/composant-list.component.ts");
/* harmony import */ var src_app_components_mat_table_list_mat_table_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/components/mat-table-list/mat-table-list.component */ "./src/app/components/mat-table-list/mat-table-list.component.ts");
/* harmony import */ var _views_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./views/user/user-list/user-list.component */ "./src/app/views/user/user-list/user-list.component.ts");
/* harmony import */ var _views_news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./views/news/news-list/news-list.component */ "./src/app/views/news/news-list/news-list.component.ts");
/* harmony import */ var _views_user_user_crud_password_user_crud_password_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./views/user/user-crud-password/user-crud-password.component */ "./src/app/views/user/user-crud-password/user-crud-password.component.ts");
/* harmony import */ var _views_compteur_compteur_list_compteur_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./views/compteur/compteur-list/compteur-list.component */ "./src/app/views/compteur/compteur-list/compteur-list.component.ts");
/* harmony import */ var _views_compteur_compteur_crud_compteur_crud_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./views/compteur/compteur-crud/compteur-crud.component */ "./src/app/views/compteur/compteur-crud/compteur-crud.component.ts");
/* harmony import */ var _views_news_news_crud_add_news_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./views/news/news-crud/add-news.component */ "./src/app/views/news/news-crud/add-news.component.ts");
/* harmony import */ var _views_document_add_document_add_document_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./views/document/add-document/add-document.component */ "./src/app/views/document/add-document/add-document.component.ts");
/* harmony import */ var _views_landing_user_landing_user_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./views/landing-user/landing-user.component */ "./src/app/views/landing-user/landing-user.component.ts");


































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _layout_layout_component__WEBPACK_IMPORTED_MODULE_14__["LayoutComponent"],
        _components_navbar_user_navbar_user_component__WEBPACK_IMPORTED_MODULE_9__["NavbarUserComponent"],
        _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],
        _components_sidenav_user_sidenav_user_component__WEBPACK_IMPORTED_MODULE_11__["SidenavUserComponent"], _navidation_sidenav_list_admin_sidenav_list_admin_component__WEBPACK_IMPORTED_MODULE_13__["SidenavListAdminComponent"],
        _components_dynamic_table_list_dynamic_table_list_component__WEBPACK_IMPORTED_MODULE_12__["DynamicTableListComponent"],
        _authenticate_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"], _authenticate_authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_16__["AuthenticateComponent"],
        _views_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_24__["UserListComponent"],
        _components_landing_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_17__["CarouselComponent"],
        _views_user_user_crud_user_crud_component__WEBPACK_IMPORTED_MODULE_18__["UserCrudComponent"],
        _views_reclamation_reclamation_crud_reclamation_crud_component__WEBPACK_IMPORTED_MODULE_20__["reclamationCrudComponent"],
        _views_reclamation_reclamation_list_reclamation_list_component__WEBPACK_IMPORTED_MODULE_19__["reclamationListComponent"],
        _views_composant_composant_crud_composant_crud_component__WEBPACK_IMPORTED_MODULE_21__["composantCrudComponent"],
        _views_composant_composant_list_composant_list_component__WEBPACK_IMPORTED_MODULE_22__["composantListComponent"],
        src_app_components_mat_table_list_mat_table_list_component__WEBPACK_IMPORTED_MODULE_23__["MatTableListComponent"],
        _views_reclamation_reclamation_list_reclamation_list_component__WEBPACK_IMPORTED_MODULE_19__["reclamationListComponent"],
        _views_composant_composant_list_composant_list_component__WEBPACK_IMPORTED_MODULE_22__["composantListComponent"],
        _views_news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_25__["newsListComponent"],
        _views_user_user_crud_password_user_crud_password_component__WEBPACK_IMPORTED_MODULE_26__["UserCrudPasswordComponent"],
        _views_compteur_compteur_list_compteur_list_component__WEBPACK_IMPORTED_MODULE_27__["compteurListComponent"],
        _views_compteur_compteur_crud_compteur_crud_component__WEBPACK_IMPORTED_MODULE_28__["compteurCrudComponent"],
        _views_news_news_crud_add_news_component__WEBPACK_IMPORTED_MODULE_29__["AddNewsComponent"],
        _views_document_add_document_add_document_component__WEBPACK_IMPORTED_MODULE_30__["AddDocumentComponent"],
        _views_landing_user_landing_user_component__WEBPACK_IMPORTED_MODULE_31__["LandingUserComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                    _layout_layout_component__WEBPACK_IMPORTED_MODULE_14__["LayoutComponent"],
                    _components_navbar_user_navbar_user_component__WEBPACK_IMPORTED_MODULE_9__["NavbarUserComponent"],
                    _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],
                    _components_sidenav_user_sidenav_user_component__WEBPACK_IMPORTED_MODULE_11__["SidenavUserComponent"], _navidation_sidenav_list_admin_sidenav_list_admin_component__WEBPACK_IMPORTED_MODULE_13__["SidenavListAdminComponent"],
                    _components_dynamic_table_list_dynamic_table_list_component__WEBPACK_IMPORTED_MODULE_12__["DynamicTableListComponent"],
                    _authenticate_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"], _authenticate_authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_16__["AuthenticateComponent"],
                    _views_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_24__["UserListComponent"],
                    _components_landing_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_17__["CarouselComponent"],
                    _views_user_user_crud_user_crud_component__WEBPACK_IMPORTED_MODULE_18__["UserCrudComponent"],
                    _views_reclamation_reclamation_crud_reclamation_crud_component__WEBPACK_IMPORTED_MODULE_20__["reclamationCrudComponent"],
                    _views_reclamation_reclamation_list_reclamation_list_component__WEBPACK_IMPORTED_MODULE_19__["reclamationListComponent"],
                    _views_composant_composant_crud_composant_crud_component__WEBPACK_IMPORTED_MODULE_21__["composantCrudComponent"],
                    _views_composant_composant_list_composant_list_component__WEBPACK_IMPORTED_MODULE_22__["composantListComponent"],
                    src_app_components_mat_table_list_mat_table_list_component__WEBPACK_IMPORTED_MODULE_23__["MatTableListComponent"],
                    _views_reclamation_reclamation_list_reclamation_list_component__WEBPACK_IMPORTED_MODULE_19__["reclamationListComponent"],
                    _views_composant_composant_list_composant_list_component__WEBPACK_IMPORTED_MODULE_22__["composantListComponent"],
                    _views_news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_25__["newsListComponent"],
                    _views_user_user_crud_password_user_crud_password_component__WEBPACK_IMPORTED_MODULE_26__["UserCrudPasswordComponent"],
                    _views_compteur_compteur_list_compteur_list_component__WEBPACK_IMPORTED_MODULE_27__["compteurListComponent"],
                    _views_compteur_compteur_crud_compteur_crud_component__WEBPACK_IMPORTED_MODULE_28__["compteurCrudComponent"],
                    _views_news_news_crud_add_news_component__WEBPACK_IMPORTED_MODULE_29__["AddNewsComponent"],
                    _views_document_add_document_add_document_component__WEBPACK_IMPORTED_MODULE_30__["AddDocumentComponent"],
                    _views_landing_user_landing_user_component__WEBPACK_IMPORTED_MODULE_31__["LandingUserComponent"]
                ],
                imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/authenticate/authenticate/authenticate.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/authenticate/authenticate/authenticate.component.ts ***!
  \*********************************************************************/
/*! exports provided: AuthenticateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateComponent", function() { return AuthenticateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login.component */ "./src/app/authenticate/login/login.component.ts");



class AuthenticateComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthenticateComponent.ɵfac = function AuthenticateComponent_Factory(t) { return new (t || AuthenticateComponent)(); };
AuthenticateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthenticateComponent, selectors: [["app-authenticate"]], decls: 2, vars: 0, template: function AuthenticateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]], styles: [".login-container[_ngcontent-%COMP%] {\r\n    margin: 200px 300px 300px;\r\n    \r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRlL2F1dGhlbnRpY2F0ZS9hdXRoZW50aWNhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5Qjs7O0FBRzdCIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRlL2F1dGhlbnRpY2F0ZS9hdXRoZW50aWNhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAyMDBweCAzMDBweCAzMDBweDtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-authenticate',
                templateUrl: './authenticate.component.html',
                styleUrls: ['./authenticate.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/authenticate/login/login.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/authenticate/login/login.component.ts ***!
  \*******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function LoginComponent_small_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter email address.! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_small_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email address not well formed.! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(router, runCodeService, httpclient) {
        this.router = router;
        this.runCodeService = runCodeService;
        this.httpclient = httpclient;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    mailRecoveryExec() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(' mailRecovery ', this.loginForm.controls.email.errors);
            if (this.loginForm.controls.email.errors == null) {
                let result = yield this.mailRecovery();
                console.log(' mailRecovery ', result);
                if (result == 1)
                    alert('Un mail de recuperation de mot de passe a été envoyé à l\'adresse  : ' + this.loginForm.controls['email'].value);
                else
                    alert(' l\'adresse  : ' + this.loginForm.controls['email'].value + ' non exustante dan sla base \n vous devez vous enregistrer d\'abord');
            }
        });
    }
    mailRecovery() {
        let sheet = 'co-owner';
        //this.usuariosService.updateUserRequestValidation(this.crudData).subscribe(resultat => {
        console.log(' email ', this.loginForm.controls.email.value);
        return this.runCodeService.mailRecovery(this.loginForm.controls.email.value, sheet).toPromise();
    }
    encrypt(str, key) {
        return crypto_js__WEBPACK_IMPORTED_MODULE_3__["AES"].encrypt(str, key).toString();
    }
    decrypt(encrypted, key) {
        key = '0n3v1ew';
        const decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_3__["AES"].decrypt(encrypted, key);
        return decrypted.toString(crypto_js__WEBPACK_IMPORTED_MODULE_3__["enc"].Utf8);
    }
    onSubmit() {
        const key = '0n3v1ew';
        var expiryDate = new Date();
        expiryDate.setHours(expiryDate.getHours() + 2);
        //expiryDate.setDate(expiryDate.getDate()+2/24)
        let token = this.encrypt(expiryDate.toString(), key);
        //console.log(expiryDate,'  encrypt :', encryptVar);
        //console.log('decrypt :', this.decrypt(encryptVar,key));
        console.log(' login onSubmit ');
        if (this.loginForm.valid) {
            // console.log(this._v());
            //console.log(' login submit ',this.loginForm)
            const uploadData = new FormData();
            // this.myFormGroup.get(elem['label']).value)
            uploadData.append('login', this.loginForm.controls["email"].value);
            uploadData.append('password', this.loginForm.controls["password"].value);
            console.log(' uploadFile ', uploadData);
            console.log(' mail  ', this.loginForm.controls["email"].value, '  ', this.loginForm.controls["password"].value);
            //  this.runCodeService.validateLogin(this.loginForm.controls["email"].value,this.loginForm.controls["password"].value).subscribe(
            let data = { 'Email': this.loginForm.controls["email"].value, 'Password': this.loginForm.controls["password"].value };
            this.runCodeService.getDataByCols('co-owner', data).subscribe(data => {
                console.log('login statut  ', data);
                //alert("file succefull uploaded "+data.fileName)
                //if (data.statut.toUpperCase()=='OK')   {
                console.log('login statut ok ', data);
                //let token = "1"; //data['token'];
                let user = data[0]['Ref'];
                if (user != localStorage.getItem('user')) {
                    localStorage.clear();
                    localStorage.setItem('user', data[0]['Ref']);
                }
                localStorage.setItem('mail', data[0]['Email']);
                localStorage.setItem('Groupe', 'group');
                localStorage.setItem('token', token);
                console.log(' token   ', token, '  user    ', localStorage.getItem('user'));
                this.router.navigate(['LandingUser']);
                //this.filename=data.fileName;
            }, error => {
                console.log(error);
            });
            this.router.navigate(['LandingUser']);
        }
    }
    _v() {
        return this.loginForm.value;
    }
    ngOnInit() {
        console.log('login ngOnInit test read json ');
        /*fetch('../files/confService.json').then(res => res.json())
        .then(jsonData => {
          this.dataConfig = jsonData;
        },
        error);*/
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 17, vars: 4, consts: [[1, "wrapper", "fadeInDown"], ["id", "formContent"], [1, "fadeIn", "first"], ["src", "assets/DAK_LOGO.png", "id", "icon"], ["id", "self"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "email", "id", "login", "formControlName", "email", "placeholder", "Enter email"], ["class", "form-text text-muted", 4, "ngIf"], ["type", "password", "id", "password", "formControlName", "password", "placeholder", "Password"], ["type", "submit", "value", "Log In", 1, "fadeIn", "fourth", "btn", "btn-primary", 3, "disabled"], ["id", "formFooter"], ["type", "button", "value", "Forgot Password", 1, "a", 3, "click"], [1, "form-text", "text-muted"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Data Accees Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LoginComponent_small_10_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LoginComponent_small_11_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_input_click_16_listener() { return ctx.mailRecoveryExec(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginForm.controls.email.touched && (ctx.loginForm.controls.email.errors == null ? null : ctx.loginForm.controls.email.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginForm.controls.email.touched && (ctx.loginForm.controls.email.errors == null ? null : ctx.loginForm.controls.email.errors.email));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["#login[_ngcontent-%COMP%] {\r\n    padding-right: 20px;\r\n    width: 60%;\r\n    border-radius: 2px;\r\n  }\r\n\r\n#password[_ngcontent-%COMP%] {\r\n    padding-right: 20px;\r\n    width: 60%;\r\n    border-radius: 2px;\r\n  }\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: #92badd;\r\n    display:inline-block;\r\n    text-decoration: none;\r\n    font-weight: 400;\r\n  }\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    display:inline-block;\r\n    margin: 40px 8px 10px 8px; \r\n    color: #cccccc;\r\n  }\r\n\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column; \r\n    justify-content: center;\r\n    width: 100%;\r\n    min-height: 100%;\r\n    padding: 20px;\r\n    height: 87vh;\r\n  }\r\n\r\n#formContent[_ngcontent-%COMP%] {\r\n    border-radius: 10px 10px 10px 10px;\r\n    background: #fff;\r\n    padding: 30px;\r\n    width: 90%;\r\n    max-width: 450px;\r\n    position: relative;\r\n    padding: 0px;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n    text-align: center;\r\n  }\r\n\r\n#formFooter[_ngcontent-%COMP%] {\r\n    background-color: #f6f6f6;\r\n    border-top: 1px solid #dce8f1;\r\n    padding: 25px;\r\n    text-align: center;\r\n    border-radius: 0 0 10px 10px;\r\n  }\r\n\r\n\r\n\r\nh2.inactive[_ngcontent-%COMP%] {\r\n    color: #cccccc;\r\n  }\r\n\r\nh2.active[_ngcontent-%COMP%] {\r\n    color: #0d0d0d;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n\r\n\r\n\r\ninput[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%]  {\r\n    background-color: #56baed;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 80px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n    border-radius: 5px 5px 5px 5px;\r\n    margin: 5px 20px 40px 20px;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n\r\ninput[type=button][_ngcontent-%COMP%]:hover, input[type=submit][_ngcontent-%COMP%]:hover, input[type=reset][_ngcontent-%COMP%]:hover  {\r\n    background-color: #39ace7;\r\n  }\r\n\r\ninput[type=button][_ngcontent-%COMP%]:active, input[type=submit][_ngcontent-%COMP%]:active, input[type=reset][_ngcontent-%COMP%]:active  {\r\n    transform: scale(0.95);\r\n  }\r\n\r\ninput[type=email][_ngcontent-%COMP%] {\r\n    background-color: #f6f6f6;\r\n    border: none;\r\n    color: #0d0d0d;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 5px;\r\n    width: 85%;\r\n    border: 2px solid #f6f6f6;\r\n    transition: all 0.5s ease-in-out;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n\r\ninput[type=email][_ngcontent-%COMP%]:focus {\r\n    background-color: #fff;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n\r\ninput[type=email][_ngcontent-%COMP%]:placeholder {\r\n    color: #cccccc;\r\n  }\r\n\r\ninput[type=password][_ngcontent-%COMP%] {\r\n    background-color: #f6f6f6;\r\n    border: none;\r\n    color: #0d0d0d;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 5px;\r\n    width: 85%;\r\n    border: 2px solid #f6f6f6;\r\n    transition: all 0.5s ease-in-out;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n\r\ninput[type=password][_ngcontent-%COMP%]:focus {\r\n    background-color: #fff;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n\r\ninput[type=password][_ngcontent-%COMP%]:placeholder {\r\n    color: #cccccc;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n.fadeInDown[_ngcontent-%COMP%] {\r\n    animation-name: fadeInDown;\r\n    animation-duration: 1s;\r\n    animation-fill-mode: both;\r\n  }\r\n\r\n@keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      transform: none;\r\n    }\r\n  }\r\n\r\n\r\n\r\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n\r\n.fadeIn[_ngcontent-%COMP%] {\r\n    opacity:0;\r\n    animation:fadeIn ease-in 1;\r\n    animation-fill-mode:forwards;\r\n    animation-duration:1s;\r\n  }\r\n\r\n.fadeIn.first[_ngcontent-%COMP%] {\r\n    animation-delay: 0.4s;\r\n  }\r\n\r\n.fadeIn.second[_ngcontent-%COMP%] {\r\n    animation-delay: 0.6s;\r\n  }\r\n\r\n.fadeIn.third[_ngcontent-%COMP%] {\r\n    animation-delay: 0.8s;\r\n  }\r\n\r\n.fadeIn.fourth[_ngcontent-%COMP%] {\r\n    animation-delay: 1s;\r\n  }\r\n\r\n\r\n\r\n.underlineHover[_ngcontent-%COMP%]:after {\r\n    display: block;\r\n    left: 0;\r\n    bottom: -10px;\r\n    width: 0;\r\n    height: 2px;\r\n    background-color: #56baed;\r\n    content: \"\";\r\n    transition: width 0.2s;\r\n  }\r\n\r\n.underlineHover[_ngcontent-%COMP%]:hover {\r\n    color: #0d0d0d;\r\n  }\r\n\r\n.underlineHover[_ngcontent-%COMP%]:hover:after{\r\n    width: 100%;\r\n  }\r\n\r\n\r\n\r\n*[_ngcontent-%COMP%]:focus {\r\n      outline: none;\r\n  }\r\n\r\n#icon[_ngcontent-%COMP%] {\r\n    width:20%;\r\n    height: 20%;\r\n    padding-top: 20px;\r\n    \r\n  }\r\n\r\n#self[_ngcontent-%COMP%] {\r\n    padding-top: 2px;\r\n    padding-bottom: 3px;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: 1.875em;\r\n  \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRlL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFVBQVU7O0FBRVY7Ozs7Ozs7RUFPRTs7QUFDRjtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysa0JBQWtCO0VBQ3BCOztBQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixrQkFBa0I7RUFDcEI7O0FBR0E7SUFDRSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixjQUFjO0VBQ2hCOztBQUlBLGNBQWM7O0FBRWQ7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtFQUNkOztBQUVBO0lBRUUsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUVaLHlDQUF5QztJQUN6QyxrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixrQkFBa0I7SUFFbEIsNEJBQTRCO0VBQzlCOztBQUlBLFNBQVM7O0FBRVQ7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsY0FBYztJQUNkLGdDQUFnQztFQUNsQzs7QUFJQSxtQkFBbUI7O0FBRWxCO0lBQ0MseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixlQUFlO0lBRWYsOENBQThDO0lBRTlDLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFLMUIsZ0NBQWdDO0VBQ2xDOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBS0Usc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixXQUFXO0lBQ1gsVUFBVTtJQUNWLHlCQUF5QjtJQUt6QixnQ0FBZ0M7SUFFaEMsOEJBQThCO0VBQ2hDOztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGdDQUFnQztFQUNsQzs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBQ0E7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0lBQ1YseUJBQXlCO0lBS3pCLGdDQUFnQztJQUVoQyw4QkFBOEI7RUFDaEM7O0FBRUE7SUFDRSxzQkFBc0I7SUFDdEIsZ0NBQWdDO0VBQ2xDOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFJQSxlQUFlOztBQUVmLHVDQUF1Qzs7QUFDdkM7SUFFRSwwQkFBMEI7SUFFMUIsc0JBQXNCO0lBRXRCLHlCQUF5QjtFQUMzQjs7QUFlQTtJQUNFO01BQ0UsVUFBVTtNQUVWLG1DQUFtQztJQUNyQztJQUNBO01BQ0UsVUFBVTtNQUVWLGVBQWU7SUFDakI7RUFDRjs7QUFFQSxrQ0FBa0M7O0FBR2xDLG9CQUFvQixPQUFPLFNBQVMsRUFBRSxFQUFFLEtBQUssU0FBUyxFQUFFLEVBQUU7O0FBRTFEO0lBQ0UsU0FBUztJQUdULDBCQUEwQjtJQUkxQiw0QkFBNEI7SUFJNUIscUJBQXFCO0VBQ3ZCOztBQUVBO0lBR0UscUJBQXFCO0VBQ3ZCOztBQUVBO0lBR0UscUJBQXFCO0VBQ3ZCOztBQUVBO0lBR0UscUJBQXFCO0VBQ3ZCOztBQUVBO0lBR0UsbUJBQW1CO0VBQ3JCOztBQUVBLGtDQUFrQzs7QUFDbEM7SUFDRSxjQUFjO0lBQ2QsT0FBTztJQUNQLGFBQWE7SUFDYixRQUFRO0lBQ1IsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFJQSxXQUFXOztBQUVYO01BQ0ksYUFBYTtFQUNqQjs7QUFFQTtJQUNFLFNBQVM7SUFDVCxXQUFXO0lBQ1gsaUJBQWlCOztFQUVuQjs7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsNERBQTREO0lBQzVELGtCQUFrQjs7RUFFcEIiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGUvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiBCQVNJQyAqL1xyXG5cclxuLypodG1sIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufSovXHJcbiNsb2dpbiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICB9XHJcbiAgI3Bhc3N3b3JkIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIH1cclxuICAgIFxyXG4gIFxyXG4gIGEge1xyXG4gICAgY29sb3I6ICM5MmJhZGQ7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIFxyXG4gIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDQwcHggOHB4IDEwcHggOHB4OyBcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAvKiBTVFJVQ1RVUkUgKi9cclxuICBcclxuICAud3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA4N3ZoO1xyXG4gIH1cclxuICBcclxuICAjZm9ybUNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gICNmb3JtRm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RjZThmMTtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAvKiBUQUJTICovXHJcbiAgXHJcbiAgaDIuaW5hY3RpdmUge1xyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbiAgfVxyXG4gIFxyXG4gIGgyLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzBkMGQwZDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAvKiBGT1JNIFRZUE9HUkFQSFkqL1xyXG4gIFxyXG4gICBpbnB1dFt0eXBlPXN1Ym1pdF0sIGlucHV0W3R5cGU9cmVzZXRdICB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweCA4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxODYsMjMzLDAuNCk7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICAgIG1hcmdpbjogNXB4IDIwcHggNDBweCAyMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciwgaW5wdXRbdHlwZT1yZXNldF06aG92ZXIgIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOWFjZTc7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9YnV0dG9uXTphY3RpdmUsIGlucHV0W3R5cGU9c3VibWl0XTphY3RpdmUsIGlucHV0W3R5cGU9cmVzZXRdOmFjdGl2ZSAge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1lbWFpbF0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjMGQwZDBkO1xyXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Y2ZjZmNjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPWVtYWlsXTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9ZW1haWxdOnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gIH1cclxuICBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZjZmNmY2O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1wYXNzd29yZF06cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qIEFOSU1BVElPTlMgKi9cclxuICBcclxuICAvKiBTaW1wbGUgQ1NTMyBGYWRlLWluLWRvd24gQW5pbWF0aW9uICovXHJcbiAgLmZhZGVJbkRvd24ge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbiAgQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxyXG4gIEBrZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbiAgXHJcbiAgLmZhZGVJbiB7XHJcbiAgICBvcGFjaXR5OjA7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gICAgLW1vei1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcclxuICAgIGFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gIFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuICBcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYWRlSW4uZmlyc3Qge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICB9XHJcbiAgXHJcbiAgLmZhZGVJbi5zZWNvbmQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICB9XHJcbiAgXHJcbiAgLmZhZGVJbi50aGlyZCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gIH1cclxuICBcclxuICAuZmFkZUluLmZvdXJ0aCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIH1cclxuICBcclxuICAvKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xyXG4gIC51bmRlcmxpbmVIb3ZlcjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IC0xMHB4O1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4ycztcclxuICB9XHJcbiAgXHJcbiAgLnVuZGVybGluZUhvdmVyOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMGQwZDBkO1xyXG4gIH1cclxuICBcclxuICAudW5kZXJsaW5lSG92ZXI6aG92ZXI6YWZ0ZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogT1RIRVJTICovXHJcbiAgXHJcbiAgKjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfSBcclxuICBcclxuICAjaWNvbiB7XHJcbiAgICB3aWR0aDoyMCU7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgXHJcbiAgfVxyXG4gICNzZWxmIHtcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxLjg3NWVtO1xyXG4gIFxyXG4gIH1cclxuICAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/dynamic-table-list/dynamic-table-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/dynamic-table-list/dynamic-table-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DynamicTableListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicTableListComponent", function() { return DynamicTableListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.mjs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

















const _c0 = ["filterInput"];
function DynamicTableListComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicTableListComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.download(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DynamicTableListComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicTableListComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.addElement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DynamicTableListComponent_div_7_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function DynamicTableListComponent_div_7_div_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicTableListComponent_div_7_div_1_ng_template_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r22.searchOnTable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SEARCH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DynamicTableListComponent_div_7_div_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function DynamicTableListComponent_div_7_div_1_ng_template_5_Template_input_keyup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r25.doFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicTableListComponent_div_7_div_1_ng_template_5_Template_img_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r27.closeSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DynamicTableListComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicTableListComponent_div_7_div_1_div_1_Template, 1, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicTableListComponent_div_7_div_1_ng_template_3_Template, 5, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicTableListComponent_div_7_div_1_ng_template_5_Template, 7, 0, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx_r15.isSearchActive))("ngIfThen", _r19)("ngIfElse", _r17);
} }
function DynamicTableListComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicTableListComponent_div_7_div_1_Template, 7, 5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isSearchShow);
} }
function DynamicTableListComponent_ng_container_10_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r29.capitalizeFirstLetter(column_r28.header), " ");
} }
function DynamicTableListComponent_ng_container_10_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r32 = ctx.$implicit;
    const column_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r30.getCellValue(row_r32, column_r28.columnDef), " ");
} }
function DynamicTableListComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicTableListComponent_ng_container_10_th_1_Template, 2, 1, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicTableListComponent_ng_container_10_td_2_Template, 2, 1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", column_r28.columnDef);
} }
function DynamicTableListComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DynamicTableListComponent_th_12_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return $event ? ctx_r34.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r4.selection.hasValue() && ctx_r4.isAllSelected())("indeterminate", ctx_r4.selection.hasValue() && !ctx_r4.isAllSelected());
} }
function DynamicTableListComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicTableListComponent_td_13_Template_mat_checkbox_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); return $event.stopPropagation(); })("change", function DynamicTableListComponent_td_13_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const element_r36 = ctx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return $event ? ctx_r39.selection.toggle(element_r36) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r5.selection.isSelected(element_r36));
} }
function DynamicTableListComponent_ng_container_14_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("mat-sort-header", column_r40.columnDef);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r41.capitalizeFirstLetter(column_r40.header), " ");
} }
function DynamicTableListComponent_ng_container_14_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicTableListComponent_ng_container_14_td_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const element_r44 = ctx.$implicit; const column_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.redirectToAction(element_r44, column_r40.columnDef); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r44 = ctx.$implicit;
    const column_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", column_r40.header == ctx_r42.actionColumn ? ctx_r42.actionLabel : null)("disabled", ctx_r42.getElementValue(element_r44, ctx_r42.dataColumn) == 1 && column_r40.header == ctx_r42.actionColumn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.getIcon(column_r40.header));
} }
function DynamicTableListComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicTableListComponent_ng_container_14_th_1_Template, 2, 2, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicTableListComponent_ng_container_14_td_2_Template, 4, 3, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", column_r40.columnDef);
} }
function DynamicTableListComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 43);
} }
function DynamicTableListComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 44);
} }
function DynamicTableListComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicTableListComponent_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.validData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Valider ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return [4, 6, 8, 10, 15, 20]; };
function DynamicTableListComponent_mat_paginator_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-paginator", 46);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
} }
class DynamicTableListComponent {
    constructor() {
        this.countChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.load = true;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
        /*public actionColumn="update"
        public actionLabel="Abonner"
        public dataColumn="Type"*/
        this.actionColumn = "";
        this.actionLabel = "";
        this.dataColumn = "";
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.inActiveSearchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.addAction = false;
        this.downloadAction = false;
        this.columns = [];
        this.columnsAction = [];
        this.selectFlag = false;
        this.columnsSelected = [];
        this.displayedColumns = []; //this.columns.map(c => c.columnDef);
        this.actionColumns = [];
        this.iconActionColumns = [{ 'key': 'Details', 'icon': 'reorder' },
            { 'key': 'Delete', 'icon': 'delete' },
            { 'key': 'Download', 'icon': 'download' },
            { 'key': 'Settings', 'icon': 'settings' },
            { 'key': 'Action', 'icon': 'done' },
            { 'key': 'Update', 'icon': 'settings' },
            { 'key': 'view module', 'icon': 'view_module' }];
        this.customSort = (event) => {
            console.log(event);
        };
        this.doFilter = ($event) => {
            this.dataSource.filter = $event.target.value.trim().toLocaleLowerCase();
        };
    }
    checkSelectedColumn(element) {
        var colStr = element['column'];
        console.log(colStr, '  checkSelectedColumn  ', this.columnsSelected);
        for (var i in this.columnsSelected) {
            //if (this.columnsSelected.length) //findIndex(element['column'])>=0 )
            if (this.columnsSelected[i] == colStr) {
                this.selection.toggle(element);
                return 1;
                //this.selection.select(element);
            }
        }
        return 0;
    }
    initSelectedColumn() {
        //var colStr=element['column']
        //console.log(colStr,'  checkSelectedColumn  ',this.columnsSelected)
        for (var ind in this.echangeData.data) {
            for (var i in this.columnsSelected) {
                let colStr = this.echangeData.data[ind]['column'];
                //if (this.columnsSelected.length) //findIndex(element['column'])>=0 )
                if (this.columnsSelected[i] == colStr) {
                    this.selection.toggle(this.echangeData.data[ind]);
                    //return 1
                    //this.selection.select(element);
                }
            }
            // return 0
        }
    }
    getElementValue(element, column) {
        //console.log( this.actionColumn,' getElementValue element ',element, 'column ',column,'element[column] ',element[column])
        return element[column];
    }
    ngOnInit() {
        if (this.echangeData.actionButton != undefined) {
            this.actionColumn = this.echangeData.actionButton['Button'];
            this.actionLabel = this.echangeData.actionButton['Label'];
            this.dataColumn = this.echangeData.actionButton['Column'];
        }
        //this.actionLabel="Abonner"
        //this.columnsSelected=["montant","prix"]
        //this.initSelectedColumn();
        const upperColumns = this.echangeData.actionColumns.map(element => {
            return element.toUpperCase();
        });
        this.addAction = upperColumns.includes('ADD');
        this.downloadAction = upperColumns.includes('DOWNLOAD');
        this.echangeData.actionColumns = this.arrayRemove(this.echangeData.actionColumns, ['ADD', 'DOWNLOAD']);
        this.isSearchShow = true;
        this.isSearchActive = this.inActiveSearchSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(0));
        // this.immubleService.getAllDataSheet('composant').subscribe(
        // data => {
        // console.log(' ngOnInit table-fil-sort-pag data '+JSON.stringify(this.echangeData.data))
        this.dataSource.data = this.echangeData.data;
        //this.dataSource.data =data;
        this.columns = this.generateColumns();
        this.generateDisplyColumns();
        this.columnsAction = this.generateActionColums();
        this.load = false;
        //          },
        //  error => console.log(error));
        //localStorage.setItem('route','immeuble')
        //localStorage.setItem('subRoute','assurance')
    }
    ngOnChanges() {
        //console.log(' onchange  table-fil-sort-pag data '+JSON.stringify(this.echangeData.data))
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }
    // Recuperer la valeur du json object suivant la valeur du header col 
    getCellValue(element, col) {
        var ob = element;
        let st = "ob['" + col + "']";
        //console.log(' getCellValue  element ',element,' col ',col)
        //console.log(' eval ob.concat(col) ',eval(st))
        //return eval('ob.'.concat(col))
        return eval(st);
    }
    download() {
        console.log('  download  ', this.echangeData);
        if (this.echangeData.type != undefined && this.echangeData.type == 'code') {
            let body = document.body;
            const a = document.createElement("a");
            let st = "";
            this.dataSource.data.forEach(el => st = st + el.code + '\n');
            console.log('  download  st  ', st);
            a.href = URL.createObjectURL(new Blob([st], {
                type: "text/plain"
            }));
            a.setAttribute("download", "data.txt");
            body.appendChild(a);
            a.click();
            body.removeChild(a);
        }
        else {
            console.log('  download download download download ', this.dataSource.data);
            const workSheet = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].json_to_sheet(this.dataSource.data);
            const workBook = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].book_append_sheet(workBook, workSheet, 'SheetName');
            xlsx__WEBPACK_IMPORTED_MODULE_7__["writeFile"](workBook, "fileExcel.xlsx");
        }
    }
    addElement() {
        var obj = { action: 'add', data: [] };
        //console.log(' redirectToAction ',obj)
        this.countChanged.emit(obj);
    }
    redirectToAction(data, action) {
        var obj = { action: action, data: [data] };
        //console.log(' redirectToAction ',obj)
        this.countChanged.emit(obj);
    }
    redirectToDetails(data) {
        //console.log('redirectToDetails '+JSON.stringify(data))
        const st = 'A 0-8';
        var obj = { action: 'editDetails', data: [data] };
        this.countChanged.emit(obj);
        //this.router.navigate(['/editPaiment/'+st]);
    }
    getIcon(action) {
        var icon = 'reorder';
        var ar = this.iconActionColumns;
        for (var i = 0; i < ar.length; i++) {
            if (ar[i].key.toUpperCase() == action.toUpperCase()) {
                icon = ar[i].icon;
                break;
            }
        }
        return icon;
    }
    redirectToDelete(data) {
        //console.log('redirectToDelete '+JSON.stringify(data))
        const st = 'A 0-8';
        var obj = { action: 'deleteAction', data: [data] };
        this.countChanged.emit(obj);
        //this.router.navigate(['/editPaiment/'+st]);
    }
    redirectToDownload(data) {
        //console.log('redirectToDownload '+JSON.stringify(data))
        const st = 'A 0-8';
        var obj = { action: 'downloadAction', data: [data] };
        this.countChanged.emit(obj);
        //this.router.navigate(['/editPaiment/'+st]);
    }
    arrayRemove(arr, value) {
        return arr.filter(function (ele) {
            if (!value.includes(ele.toUpperCase()))
                return ele;
        });
    }
    //   //  last check why arrayRomove ?? 25/08/2023
    generateActionColums() {
        var jjson = [];
        let tmpjson = { columnDef: '', header: '' };
        var ar = this.actionColumns;
        //console.log(' ar '+ar)
        for (var i = 0; i < ar.length; i++) {
            tmpjson.columnDef = ar[i];
            tmpjson.header = ar[i].replace(/_/g, ' ').replace(/\*/g, '\'');
            //console.log(ar[i])
            if (ar[i].toUpperCase() != 'ADD' && ar[i].toUpperCase() != 'DOWNLOAD')
                jjson.push(tmpjson);
            tmpjson = { columnDef: '', header: '' };
        }
        return jjson;
    }
    generateColumns() {
        console.log(' generateColumns ', this.dataSource.data[0]);
        var jjson = [];
        let tmpjson = { columnDef: '', header: '' };
        var ar = Object.keys(this.dataSource.data[0]);
        console.log(' ar ' + ar);
        for (var i = 0; i < ar.length; i++) {
            tmpjson.columnDef = ar[i];
            tmpjson.header = ar[i].replace(/_/g, ' ').replace(/\*/g, '\'');
            console.log(ar[i]);
            jjson.push(tmpjson);
            tmpjson = { columnDef: '', header: '' };
        }
        return jjson;
    }
    generateDisplyColumns() {
        var tmpColumns = [];
        if (this.echangeData.displayedColumns.length > 0) {
            this.displayedColumns = this.echangeData.displayedColumns; //columns.map(c => c.columnDef);
        }
        else {
            this.displayedColumns = this.columns.map(c => c.columnDef);
        }
        if (this.echangeData.actionColumns.map(el => el.toUpperCase()).includes('SELECT')) {
            tmpColumns.push('Select');
            this.echangeData.actionColumns.splice(this.echangeData.actionColumns.map(el => el.toUpperCase()).indexOf('SELECT'), 1);
            this.echangeData.actionColumns = this.echangeData.actionColumns;
        }
        tmpColumns = tmpColumns.concat(this.displayedColumns);
        this.displayedColumns = tmpColumns.concat(this.echangeData.actionColumns);
        this.actionColumns = this.echangeData.actionColumns;
        //this.displayedColumns= tmpDisplayColumns;
    }
    searchOnTable() {
        setTimeout(() => {
            const userInputHTMLElement = this.userInput.nativeElement;
            userInputHTMLElement.focus();
        }, 100);
        this.inActiveSearchSubject.next(true);
    }
    capitalizeFirstLetter(st) {
        return st.charAt(0).toUpperCase() + st.slice(1);
    }
    closeSearch() {
        this.dataSource.filter = '';
        this.inActiveSearchSubject.next(false);
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        //console.log(' isAllSelected '+JSON.stringify(this.selection.selected))
        const numSelected = this.selection.selected.length;
        // console.log(' isAllSelected numSelected  '+numSelected)
        const numRows = this.dataSource.data.length;
        // console.log(' isAllSelected numRows  '+numRows)
        return numSelected === numRows;
        this.logSelection();
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }
    logSelection() {
        this.selection.selected.forEach(s => console.log('selected value ' + s));
    }
    validData() {
        console.log(' before emit ' + JSON.stringify(this.selection.selected));
        const obj = { action: 'selectAction', data: this.selection.selected };
        console.log(' before emit ' + JSON.stringify(obj));
        this.countChanged.emit(obj);
    }
}
DynamicTableListComponent.ɵfac = function DynamicTableListComponent_Factory(t) { return new (t || DynamicTableListComponent)(); };
DynamicTableListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DynamicTableListComponent, selectors: [["app-dynamic-table-list"]], viewQuery: function DynamicTableListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.userInput = _t.first);
    } }, inputs: { echangeData: "echangeData" }, outputs: { countChanged: "countChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 20, vars: 10, consts: [["fxFlex", ""], [1, "container"], [1, "row"], [1, "col-md-5", 2, "align-self", "flex-end"], ["matTooltip", "Download to Excel", "class", "btn", 3, "click", 4, "ngIf"], ["matTooltip", "Add", "class", "btn", 3, "click", 4, "ngIf"], [1, "col-md-7", 2, "margin-top", "2%", "margin-bottom", "2%"], [4, "ngIf"], [2, "overflow", "auto"], ["mat-table", "", "matSort", "", "matSortStart", "desc", 1, "mat-elevation-z8", "demo-table", 3, "dataSource", "matSortChange"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["matColumnDef", "Select"], ["style", "background-color: #aa9d9d;", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-icon-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["style", "background-color: transparent;margin-left: 40px;width: 75%;", 3, "pageSize", "pageSizeOptions", 4, "ngIf"], ["matTooltip", "Download to Excel", 1, "btn", 3, "click"], [2, "margin-top", "15%"], ["matTooltip", "Add", 1, "btn", 3, "click"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["showSearchDeactiveState", ""], ["showSearchActiveState", ""], ["floating", "true", "size", "sm", 1, "d-flex", "search-btn", 3, "click"], ["searchBtn", ""], ["src", "assets/icon_search.svg"], [1, "btn-txt"], [1, "search"], ["type", "text", "maxlength", "50", 3, "keyup"], ["filterInput", ""], ["id", "search-icon"], ["id", "search-clear"], ["src", "assets/Close.svg", 3, "click"], [3, "matColumnDef"], ["mat-header-cell", "", 2, "background-color", "#aa9d9d"], ["mat-cell", ""], [3, "checked", "indeterminate", "change"], [3, "checked", "click", "change"], ["style", "background-color: #aa9d9d;", "mat-header-cell", "", 3, "mat-sort-header", 4, "matHeaderCellDef"], ["mat-header-cell", "", 2, "background-color", "#aa9d9d", 3, "mat-sort-header"], ["mat-icon-button", "", "color", "primary", 3, "matTooltip", "disabled", "click"], [1, "mat-18"], ["mat-header-row", ""], ["mat-row", ""], ["mat-icon-button", "", "color", "primary", 3, "click"], [2, "background-color", "transparent", "margin-left", "40px", "width", "75%", 3, "pageSize", "pageSizeOptions"]], template: function DynamicTableListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DynamicTableListComponent_button_4_Template, 3, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicTableListComponent_button_5_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DynamicTableListComponent_div_7_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function DynamicTableListComponent_Template_table_matSortChange_9_listener($event) { return ctx.customSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DynamicTableListComponent_ng_container_10_Template, 3, 1, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DynamicTableListComponent_th_12_Template, 2, 2, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DynamicTableListComponent_td_13_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DynamicTableListComponent_ng_container_14_Template, 3, 1, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DynamicTableListComponent_tr_15_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DynamicTableListComponent_tr_16_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DynamicTableListComponent_button_18_Template, 2, 0, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DynamicTableListComponent_mat_paginator_19_Template, 1, 3, "mat-paginator", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.downloadAction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addAction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length > 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columnsAction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayedColumns.includes("Select"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length > 7);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckbox"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".config-field[_ngcontent-%COMP%] {\r\n    box-shadow: 2px 2px 5px 2px;\r\n    border: 2px #d9d9d9;\r\n    border-radius: 5px;\r\n    min-height: 50px;\r\n    margin: 0 auto;\r\n    padding: 15px 20px 20px;\r\n    display: block;\r\n    text-align: center;\r\n    height: 100%;\r\n    \r\n      background-color: #6ecbd0;\r\n  }\r\n  \r\n  \r\n  table[_ngcontent-%COMP%] {\r\n      width: 99%;\r\n  \r\n    }\r\n  \r\n  \r\n  .tableHeaderCellDiv[_ngcontent-%COMP%] { \r\n        resize: horizontal;  \r\n        overflow:hidden;\r\n    }\r\n  \r\n  \r\n  .color[_ngcontent-%COMP%] {\r\n        color: #BCBCBC;\r\n      }\r\n  \r\n  \r\n  .search-container[_ngcontent-%COMP%] {\r\n        height: 3.2em;\r\n  \r\n      }\r\n  \r\n  \r\n  .search-btn[_ngcontent-%COMP%] {\r\n          cursor: pointer;\r\n          box-sizing: border-box;\r\n          height: 25px;\r\n          width: 200px;\r\n          border: 1px solid #e7e7e7;\r\n          border-radius: 2px;\r\n          background-color: #ffffff;\r\n          box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.03);\r\n        }\r\n  \r\n  \r\n  img[_ngcontent-%COMP%] {\r\n            padding-left: 0.625rem;\r\n            padding-right: 0.375rem;\r\n            width: 30px;\r\n          }\r\n  \r\n  \r\n  .btn-txt[_ngcontent-%COMP%] {\r\n            padding-top: 0.375rem;\r\n            height: 12px;\r\n            width: 44px;\r\n            color: #007dba;\r\n            font-size: 0.625rem;\r\n            letter-spacing: 0.32px;\r\n            line-height: 12px;\r\n          }\r\n  \r\n  \r\n  mat-table[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n      }\r\n  \r\n  \r\n  mat-header-row[_ngcontent-%COMP%] {\r\n          min-height: 30px;\r\n        }\r\n  \r\n  \r\n  mat-header-cell[_ngcontent-%COMP%] {\r\n            background-color: #f8f8f8; \r\n            padding: 8px 8px 8px 0;\r\n          }\r\n  \r\n  \r\n  .left-header-padding[_ngcontent-%COMP%] {\r\n              padding-left: 0.9375rem;\r\n            }\r\n  \r\n  \r\n  .txt-style[_ngcontent-%COMP%] {\r\n              color: #4d4d4f;\r\n              letter-spacing: 0.29px;\r\n              line-height: 15px;\r\n              font-size: 0.625rem;\r\n              text-align: left;\r\n            }\r\n  \r\n  \r\n  mat-row[_ngcontent-%COMP%] {\r\n          height: 51px;\r\n          cursor: pointer;\r\n        }\r\n  \r\n  \r\n  .mat-cell[_ngcontent-%COMP%] {\r\n          padding: 8px 8px 8px 0;\r\n        }\r\n  \r\n  \r\n  .left-row-padding[_ngcontent-%COMP%] {\r\n              padding-left: 0.9375rem;\r\n            }\r\n  \r\n  \r\n  .txt-style[_ngcontent-%COMP%] {\r\n              font-size: 0.75rem;\r\n              color: #4d4d4f;\r\n              letter-spacing: 0.3px;\r\n              line-height: 24px;\r\n              text-align: left;\r\n    \r\n    \r\n              white-space: nowrap;\r\n              overflow: hidden;\r\n              display: block;\r\n              text-overflow: ellipsis;\r\n            }\r\n  \r\n  \r\n  .txt-style-normal[_ngcontent-%COMP%] {\r\n              font-weight: 400;\r\n            }\r\n  \r\n  \r\n  .txt-style-bold[_ngcontent-%COMP%] {\r\n              font-weight: 600;\r\n            }\r\n  \r\n  \r\n  .text-truncate[_ngcontent-%COMP%] {\r\n              width: inherit;\r\n              white-space: nowrap;\r\n              overflow: hidden;\r\n              text-overflow: ellipsis;\r\n            }\r\n  \r\n  \r\n  img[_ngcontent-%COMP%] {\r\n              cursor: pointer;\r\n            }\r\n  \r\n  \r\n  .table-footer[_ngcontent-%COMP%] {\r\n        padding: 0.7rem 1.875rem 1.6rem 1.875rem;\r\n      }\r\n  \r\n  \r\n    .mat-checkbox .mat-checkbox-frame {\r\n        border-color: violet;\r\n      }\r\n  \r\n  \r\n    .mat-checkbox-checked .mat-checkbox-background {\r\n        background-color: darkcyan !important;\r\n      }\r\n  \r\n  \r\n    .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{\r\n      background-color: #003a5d !important;\r\n    }\r\n  \r\n  \r\n  .selected[_ngcontent-%COMP%] {\r\n          height: 5px;\r\n          width: 16px;\r\n          border-radius: 1px;\r\n          background-color: #ec1c24;\r\n          display: block;\r\n        }\r\n  \r\n  \r\n  .not-selected[_ngcontent-%COMP%] {\r\n          height: 5px;\r\n          width: 16px;\r\n          opacity: 0.5;\r\n          border-radius: 1px;\r\n          background-color: #939598;\r\n          display: block;\r\n        }\r\n  \r\n  \r\n  .remove-btn[_ngcontent-%COMP%] {\r\n        height: 25px;\r\n        float: right;\r\n        cursor: pointer;\r\n      }\r\n  \r\n  \r\n  .title-txt[_ngcontent-%COMP%] {\r\n          padding-left: 0px;\r\n          font-size: 0.875rem;\r\n          color: #4d4d4f;\r\n          opacity: 0.87;\r\n        }\r\n  \r\n  \r\n  .disable-title[_ngcontent-%COMP%] {\r\n          opacity: 0.87;\r\n          color: #4d4d4f;\r\n          font-size: 0.8125rem;\r\n          letter-spacing: 0.38px;\r\n          line-height: 14px;\r\n        }\r\n  \r\n  \r\n  .enable-title[_ngcontent-%COMP%] {\r\n          opacity: 1;\r\n          font-size: 0.8125rem;\r\n          color: #007db9;\r\n          letter-spacing: 0.38px;\r\n          line-height: 14px;\r\n        }\r\n  \r\n  \r\n  .search[_ngcontent-%COMP%] {\r\n        position: relative;\r\n    \r\n      }\r\n  \r\n  \r\n  input[_ngcontent-%COMP%] {\r\n          box-sizing: border-box;\r\n          padding-left: 48px;\r\n          padding-right: 50px;\r\n          text-overflow: ellipsis;\r\n          height: 35px;\r\n          width: 441px;\r\n          border: 1px solid #E7E7E7;\r\n          border-radius: 2px;\r\n          background-color: #FFFFFF;\r\n          box-shadow: 0 2px 8px 0 rgba(0,0,0,0.03);\r\n          color: #4D4D4F;\r\n          letter-spacing: 0;\r\n          line-height: 21px;\r\n        }\r\n  \r\n  \r\n  #search-icon[_ngcontent-%COMP%] {\r\n          position: absolute;\r\n          left: 1.3rem;\r\n          top: 5px;\r\n        }\r\n  \r\n  \r\n  #search-clear[_ngcontent-%COMP%] {\r\n          position: absolute;\r\n          left: 26rem;\r\n          top: 5px;\r\n          cursor: pointer;\r\n        }\r\n  \r\n  \r\n  .mat-sort-header-stem[_ngcontent-%COMP%] {\r\n          height: 3px !important;\r\n          width: 10px !important;\r\n          transform: rotate(180deg) !important;\r\n      }\r\n  \r\n  \r\n  .mat-sort-header-pointer-left[_ngcontent-%COMP%], .mat-sort-header-pointer-right[_ngcontent-%COMP%] {\r\n          width: 7px !important;\r\n          height: 3px !important;\r\n      }\r\n  \r\n  \r\n  .mat-sort-header-pointer-middle[_ngcontent-%COMP%]{\r\n          width: 0px !important;\r\n          height: 0px !important;\r\n      }\r\n  \r\n  \r\n  mat-sidenav-container[_ngcontent-%COMP%] {\r\n          position: fixed;\r\n          height: 100%;\r\n          min-height: 100%;\r\n          width: 100%;\r\n          min-width: 100%;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9keW5hbWljLXRhYmxlLWxpc3QvZHluYW1pYy10YWJsZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWjtpQ0FDNkI7TUFDM0IseUJBQXlCO0VBQzdCOzs7RUFHQTtNQUNJLFVBQVU7O0lBRVo7OztFQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7OztFQUVFO1FBQ0UsY0FBYztNQUNoQjs7O0VBQ0E7UUFDRSxhQUFhOztNQUVmOzs7RUFDRTtVQUNFLGVBQWU7VUFDZixzQkFBc0I7VUFDdEIsWUFBWTtVQUNaLFlBQVk7VUFDWix5QkFBeUI7VUFDekIsa0JBQWtCO1VBQ2xCLHlCQUF5QjtVQUN6QiwyQ0FBMkM7UUFDN0M7OztFQUNFO1lBQ0Usc0JBQXNCO1lBQ3RCLHVCQUF1QjtZQUN2QixXQUFXO1VBQ2I7OztFQUNBO1lBQ0UscUJBQXFCO1lBQ3JCLFlBQVk7WUFDWixXQUFXO1lBQ1gsY0FBYztZQUNkLG1CQUFtQjtZQUNuQixzQkFBc0I7WUFDdEIsaUJBQWlCO1VBQ25COzs7RUFJSjtRQUNFLFdBQVc7TUFDYjs7O0VBQ0U7VUFDRSxnQkFBZ0I7UUFDbEI7OztFQUVFO1lBQ0UseUJBQXlCO1lBQ3pCLHNCQUFzQjtVQUN4Qjs7O0VBQ0U7Y0FDRSx1QkFBdUI7WUFDekI7OztFQUNBO2NBQ0UsY0FBYztjQUNkLHNCQUFzQjtjQUN0QixpQkFBaUI7Y0FDakIsbUJBQW1CO2NBQ25CLGdCQUFnQjtZQUNsQjs7O0VBSUo7VUFDRSxZQUFZO1VBQ1osZUFBZTtRQUNqQjs7O0VBQ0E7VUFDRSxzQkFBc0I7UUFDeEI7OztFQUVJO2NBQ0UsdUJBQXVCO1lBQ3pCOzs7RUFDQTtjQUNFLGtCQUFrQjtjQUNsQixjQUFjO2NBQ2QscUJBQXFCO2NBQ3JCLGlCQUFpQjtjQUNqQixnQkFBZ0I7OztjQUdoQixtQkFBbUI7Y0FDbkIsZ0JBQWdCO2NBQ2hCLGNBQWM7Y0FDZCx1QkFBdUI7WUFDekI7OztFQUNBO2NBQ0UsZ0JBQWdCO1lBQ2xCOzs7RUFDQTtjQUNFLGdCQUFnQjtZQUNsQjs7O0VBQ0E7Y0FDRSxjQUFjO2NBQ2QsbUJBQW1CO2NBQ25CLGdCQUFnQjtjQUNoQix1QkFBdUI7WUFDekI7OztFQUNBO2NBQ0UsZUFBZTtZQUNqQjs7O0VBT047UUFDRSx3Q0FBd0M7TUFDMUM7OztFQUVBO1FBQ0Usb0JBQW9CO01BQ3RCOzs7RUFFQTtRQUNFLHFDQUFxQztNQUN2Qzs7O0VBQ0E7TUFDQSxvQ0FBb0M7SUFDdEM7OztFQUdJO1VBQ0UsV0FBVztVQUNYLFdBQVc7VUFDWCxrQkFBa0I7VUFDbEIseUJBQXlCO1VBQ3pCLGNBQWM7UUFDaEI7OztFQUVBO1VBQ0UsV0FBVztVQUNYLFdBQVc7VUFDWCxZQUFZO1VBQ1osa0JBQWtCO1VBQ2xCLHlCQUF5QjtVQUN6QixjQUFjO1FBQ2hCOzs7RUFHRjtRQUNFLFlBQVk7UUFDWixZQUFZO1FBQ1osZUFBZTtNQUNqQjs7O0VBQ0U7VUFDRSxpQkFBaUI7VUFDakIsbUJBQW1CO1VBQ25CLGNBQWM7VUFDZCxhQUFhO1FBQ2Y7OztFQUNBO1VBQ0UsYUFBYTtVQUNiLGNBQWM7VUFDZCxvQkFBb0I7VUFDcEIsc0JBQXNCO1VBQ3RCLGlCQUFpQjtRQUNuQjs7O0VBQ0E7VUFDRSxVQUFVO1VBQ1Ysb0JBQW9CO1VBQ3BCLGNBQWM7VUFDZCxzQkFBc0I7VUFDdEIsaUJBQWlCO1FBQ25COzs7RUFHRjtRQUNFLGtCQUFrQjs7TUFFcEI7OztFQUNFO1VBQ0Usc0JBQXNCO1VBQ3RCLGtCQUFrQjtVQUNsQixtQkFBbUI7VUFDbkIsdUJBQXVCO1VBQ3ZCLFlBQVk7VUFDWixZQUFZO1VBQ1oseUJBQXlCO1VBQ3pCLGtCQUFrQjtVQUNsQix5QkFBeUI7VUFDekIsd0NBQXdDO1VBQ3hDLGNBQWM7VUFDZCxpQkFBaUI7VUFDakIsaUJBQWlCO1FBQ25COzs7RUFDQTtVQUNFLGtCQUFrQjtVQUNsQixZQUFZO1VBQ1osUUFBUTtRQUNWOzs7RUFFQTtVQUNFLGtCQUFrQjtVQUNsQixXQUFXO1VBQ1gsUUFBUTtVQUNSLGVBQWU7UUFDakI7OztFQUdBO1VBQ0Usc0JBQXNCO1VBQ3RCLHNCQUFzQjtVQUN0QixvQ0FBb0M7TUFDeEM7OztFQUNBO1VBQ0kscUJBQXFCO1VBQ3JCLHNCQUFzQjtNQUMxQjs7O0VBQ0E7VUFDSSxxQkFBcUI7VUFDckIsc0JBQXNCO01BQzFCOzs7RUFFRjtVQUNNLGVBQWU7VUFDZixZQUFZO1VBQ1osZ0JBQWdCO1VBQ2hCLFdBQVc7VUFDWCxlQUFlO0lBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9keW5hbWljLXRhYmxlLWxpc3QvZHluYW1pYy10YWJsZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uZmlnLWZpZWxkIHtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweDtcclxuICAgIGJvcmRlcjogMnB4ICNkOWQ5ZDk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHggMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjZDBkMGQwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGI4MmI4OyovXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZWNiZDA7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIHRhYmxlIHtcclxuICAgICAgd2lkdGg6IDk5JTtcclxuICBcclxuICAgIH1cclxuICAgIC50YWJsZUhlYWRlckNlbGxEaXYgeyBcclxuICAgICAgICByZXNpemU6IGhvcml6b250YWw7ICBcclxuICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICB9XHJcbiAgICBcclxuICAgICAgLmNvbG9yIHtcclxuICAgICAgICBjb2xvcjogI0JDQkNCQztcclxuICAgICAgfVxyXG4gICAgICAuc2VhcmNoLWNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiAzLjJlbTtcclxuICBcclxuICAgICAgfVxyXG4gICAgICAgIC5zZWFyY2gtYnRuIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTdlN2U3O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4wMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjYyNXJlbTtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMC4zNzVyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ0bi10eHQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMC4zNzVyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDQ0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDA3ZGJhO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNjI1cmVtO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zMnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgXHJcbiAgICBcclxuICAgICAgbWF0LXRhYmxlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICAgIG1hdC1oZWFkZXItcm93IHtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgbWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODsgXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sZWZ0LWhlYWRlci1wYWRkaW5nIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuOTM3NXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudHh0LXN0eWxlIHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzRkNGQ0ZjtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4yOXB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42MjVyZW07XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgbWF0LXJvdyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUxcHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXQtY2VsbCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA4cHggOHB4IDhweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAubGVmdC1yb3ctcGFkZGluZyB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjkzNzVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnR4dC1zdHlsZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNGQ0ZDRmO1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnR4dC1zdHlsZS1ub3JtYWwge1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnR4dC1zdHlsZS1ib2xkIHtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50ZXh0LXRydW5jYXRlIHtcclxuICAgICAgICAgICAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgIFxyXG4gICAgXHJcbiAgICAgICAgXHJcbiAgICAgXHJcbiAgICBcclxuICAgICAgLnRhYmxlLWZvb3RlciB7XHJcbiAgICAgICAgcGFkZGluZzogMC43cmVtIDEuODc1cmVtIDEuNnJlbSAxLjg3NXJlbTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIDo6bmctZGVlcCAubWF0LWNoZWNrYm94IC5tYXQtY2hlY2tib3gtZnJhbWUge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmlvbGV0O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICA6Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja2VkIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2N5YW4gIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICA6Om5nLWRlZXAgLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5ke1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzYTVkICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICAgXHJcbiAgICAgICAgLnNlbGVjdGVkIHtcclxuICAgICAgICAgIGhlaWdodDogNXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWMxYzI0O1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLm5vdC1zZWxlY3RlZCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzkzOTU5ODtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAgIC5yZW1vdmUtYnRuIHtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAgIC50aXRsZS10eHQge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICAgICAgY29sb3I6ICM0ZDRkNGY7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjg3O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGlzYWJsZS10aXRsZSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjg3O1xyXG4gICAgICAgICAgY29sb3I6ICM0ZDRkNGY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjM4cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmVuYWJsZS10aXRsZSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjgxMjVyZW07XHJcbiAgICAgICAgICBjb2xvcjogIzAwN2RiOTtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjM4cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAuc2VhcmNoIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcclxuICAgICAgfVxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQ4cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICB3aWR0aDogNDQxcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTdFN0U3O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCAwIHJnYmEoMCwwLDAsMC4wMyk7XHJcbiAgICAgICAgICBjb2xvcjogIzRENEQ0RjtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNzZWFyY2gtaWNvbiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBsZWZ0OiAxLjNyZW07XHJcbiAgICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAjc2VhcmNoLWNsZWFyIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGxlZnQ6IDI2cmVtO1xyXG4gICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC5tYXQtc29ydC1oZWFkZXItc3RlbSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgd2lkdGg6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZykgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAubWF0LXNvcnQtaGVhZGVyLXBvaW50ZXItbGVmdCwgLm1hdC1zb3J0LWhlYWRlci1wb2ludGVyLXJpZ2h0IHtcclxuICAgICAgICAgIHdpZHRoOiA3cHggIWltcG9ydGFudDtcclxuICAgICAgICAgIGhlaWdodDogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLm1hdC1zb3J0LWhlYWRlci1wb2ludGVyLW1pZGRsZXtcclxuICAgICAgICAgIHdpZHRoOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIGhlaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICBcclxuICAgIG1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicTableListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dynamic-table-list',
                templateUrl: './dynamic-table-list.component.html',
                styleUrls: ['./dynamic-table-list.component.css']
            }]
    }], function () { return []; }, { echangeData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], countChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }], userInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['filterInput']
        }] }); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 14, vars: 0, consts: [[1, "footer"], [1, "row"], [1, "col-3", "col-md-12"], [1, "logo-container"], ["src", "assets/LOGO-ResidanceYasmine2.png", 1, "logo-umayor-footer"], [1, "footer-column"], ["href", "mailto:rector@umayor.cl"], ["href", "https://goo.gl/maps/tjB6Rkfk3fitcvz8A"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Contact : mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "FaceBook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%]{\n    background-color: #3c3c3b;\n    color: #ffffff;\n    padding: 15px 10%;\n    padding-bottom: 50px !important;    \n    margin-top: 50px;\n    display: block;\n}\n\n.logo-umayor-footer[_ngcontent-%COMP%]{\n    filter: invert(100%);\n    width:200px;\n    float: left;\n    display: block;\n    margin-right: 50px;\n    margin-bottom: 30px;\n}\n\n.footer-column[_ngcontent-%COMP%]{\n    width: 20%;\n    margin-right: 10px;\n    float:left;\n    height:100%;\n}\n\n.footer-column[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child{\n    margin-right:0px;\n}\n\nh5[_ngcontent-%COMP%]{\n    font-size: 20px;\n    color: #eecd3e;\n    font-weight: bold;\n}\n\na[_ngcontent-%COMP%] {\n    color: #ffffff;\n    text-decoration: none;\n}\n\n.iconify[_ngcontent-%COMP%]{\n    font-size: 30px;\n}\n\np[_ngcontent-%COMP%]{\n    margin:3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFFSSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNjM2MzYjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAxNXB4IDEwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweCAhaW1wb3J0YW50OyAgICBcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9nby11bWF5b3ItZm9vdGVye1xuICAgIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMTAwJSk7XG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XG4gICAgd2lkdGg6MjAwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5mb290ZXItY29sdW1ue1xuICAgIHdpZHRoOiAyMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGZsb2F0OmxlZnQ7XG4gICAgaGVpZ2h0OjEwMCU7XG59XG5cbi5mb290ZXItY29sdW1uIDpsYXN0LWNoaWxke1xuICAgIG1hcmdpbi1yaWdodDowcHg7XG59XG5cbmg1e1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogI2VlY2QzZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuYSB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uaWNvbmlmeXtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG5cbnB7XG4gICAgbWFyZ2luOjNweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/landing-carousel/carousel.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/landing-carousel/carousel.component.ts ***!
  \*******************************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CarouselComponent {
    constructor() { }
    ngOnInit() {
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], decls: 8, vars: 0, consts: [["id", "landing-carousel", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "assets/yasmine1.jpg", 1, "d-block", "w-100", 2, "width", "100%", "height", "100%"], [1, "carousel-item"], ["src", "assets/yasmine2.jpg", 1, "d-block", "w-100", 2, "width", "100%", "height", "100%"], ["src", "assets/yasmine3.jpg", "alt", "First slide", 1, "d-block", "w-100", 2, "width", "100%", "height", "100%"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".carousel[_ngcontent-%COMP%]{\n    margin-top: 10px !important;\n}\n\n.carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\n    height: 650px;\n  }\n\n.carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n      position: absolute;\n      -o-object-fit:cover;\n         object-fit:cover;\n      top: 0;\n      left: 0;\n      min-height: 400px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nLWNhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0VBQ2Y7O0FBRUE7TUFDSSxrQkFBa0I7TUFDbEIsbUJBQWdCO1NBQWhCLGdCQUFnQjtNQUNoQixNQUFNO01BQ04sT0FBTztNQUNQLGlCQUFpQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy1jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2Vse1xuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmNhcm91c2VsIC5jYXJvdXNlbC1pdGVtIHtcbiAgICBoZWlnaHQ6IDY1MHB4O1xuICB9XG4gIFxuICAuY2Fyb3VzZWwtaXRlbSBpbWcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgb2JqZWN0LWZpdDpjb3ZlcjtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-carousel',
                templateUrl: './carousel.component.html',
                styleUrls: ['./carousel.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/mat-table-list/mat-table-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/mat-table-list/mat-table-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: MatTableListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTableListComponent", function() { return MatTableListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _dynamic_table_list_dynamic_table_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dynamic-table-list/dynamic-table-list.component */ "./src/app/components/dynamic-table-list/dynamic-table-list.component.ts");








function MatTableListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-dynamic-table-list", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("countChanged", function MatTableListComponent_div_0_Template_app_dynamic_table_list_countChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.actionHandler1($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("echangeData", ctx_r0.echangeData);
} }
class MatTableListComponent {
    constructor(data, elRef, render, usuariosService, dialogRef) {
        this.elRef = elRef;
        this.render = render;
        this.usuariosService = usuariosService;
        this.dialogRef = dialogRef;
        this.existImage = true;
        this.text_top = "";
        this.text_bottom = "";
        this.datalength = 0;
        this.echangeData = { displayedColumns: [], data: [], actionColumns: [], actionButton: {}, type: 'df' };
        this.spinerSelectedField = false;
        this.action = 'list';
        this.Description = data;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.echangeData.displayedColumns = this.Description['displayedColumns'];
            this.echangeData.actionColumns = this.Description['actionColumns'];
            this.echangeData.data = this.Description['data'];
            console.log('description ', JSON.stringify(this.Description));
            console.log('echangeData ', JSON.stringify(this.echangeData));
        });
    }
    actionHandler1(event) {
        console.log(' action handler event ', JSON.stringify(event));
        this.dialogRef.close({ data: JSON.stringify(event) });
    }
}
MatTableListComponent.ɵfac = function MatTableListComponent_Factory(t) { return new (t || MatTableListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"])); };
MatTableListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatTableListComponent, selectors: [["app-mat-table-list"]], decls: 1, vars: 1, consts: [["style", "text-align: center;vertical-align: middle;width: 500;\nheight: 450;", 4, "ngIf"], [2, "text-align", "center", "vertical-align", "middle", "width", "500", "height", "450"], [3, "echangeData", "countChanged"]], template: function MatTableListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MatTableListComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.existImage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _dynamic_table_list_dynamic_table_list_component__WEBPACK_IMPORTED_MODULE_5__["DynamicTableListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWF0LXRhYmxlLWxpc3QvbWF0LXRhYmxlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTableListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-mat-table-list',
                templateUrl: './mat-table-list.component.html',
                styleUrls: ['./mat-table-list.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ModalComponent {
    constructor() { }
    ngOnInit() {
    }
    passwordRecovery() {
        alert('Mot de passe envoyé à votre email.');
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], decls: 22, vars: 0, consts: [["type", "button", "id", "botoninicio", "data-bs-toggle", "modal", "data-bs-target", "#password-recovery"], ["id", "password-recovery", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Cerrar", 1, "btn-close"], [1, "modal-body"], [1, "material-icons"], ["type", "text", "placeholder", "E-mail", 1, "input-correo"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "id", "botonEnviar", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mot de pass Oublier\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "R\u00E9cup\u00E9ration Mot de pass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Entrer un E-mail Valide:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " mail_outline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Nous vous enverrons un nouveau mot de passe \u00E0 votre adresse e-mail.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_20_listener() { return ctx.passwordRecovery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Envoi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["button[id=\"botoninicio\"][_ngcontent-%COMP%] {\n  background-color: #56baed;\n  border: none;\n  color: white;\n  padding: 15px 100px;\n  text-align: center;\n  text-decoration: none;\n  display:inline-flex;\n  text-transform: uppercase;\n  font-size: 13px;\n  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\n  border-radius: 5px 5px 5px 5px;\n  margin: 25px 20px 40px 20px;\n}\n  \nbutton[id=\"botoninicio\"][_ngcontent-%COMP%]:hover {\n  background-color: #39ace7;\n}\n  \n.input-correo[_ngcontent-%COMP%] {\n  margin-bottom:10px;\n  margin-left:10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixlQUFlO0VBRWYsOENBQThDO0VBRTlDLDhCQUE4QjtFQUM5QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uW2lkPVwiYm90b25pbmljaW9cIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweCAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6aW5saW5lLWZsZXg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICBtYXJnaW46IDI1cHggMjBweCA0MHB4IDIwcHg7XG59XG4gIFxuYnV0dG9uW2lkPVwiYm90b25pbmljaW9cIl06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlhY2U3O1xufVxuXG4uaW5wdXQtY29ycmVvIHtcbiAgbWFyZ2luLWJvdHRvbToxMHB4O1xuICBtYXJnaW4tbGVmdDoxMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/navbar-user/navbar-user.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/navbar-user/navbar-user.component.ts ***!
  \*****************************************************************/
/*! exports provided: NavbarUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarUserComponent", function() { return NavbarUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");










function NavbarUserComponent_a_17_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matBadge", ctx_r2.notif);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("matTooltip", "", ctx_r2.notif, " approve waiting");
} }
function NavbarUserComponent_a_17_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NavbarUserComponent_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NavbarUserComponent_a_17_span_1_Template, 2, 2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NavbarUserComponent_a_17_span_2_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", ctx_r0.notifLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.notif > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.notif === 0);
} }
function NavbarUserComponent_a_19_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matBadge", ctx_r4.shop);
} }
function NavbarUserComponent_a_19_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NavbarUserComponent_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NavbarUserComponent_a_19_span_1_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NavbarUserComponent_a_19_span_2_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", ctx_r1.shopLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.shop > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.shop === 0);
} }
class NavbarUserComponent {
    constructor(router, mainService, httpClient) {
        this.router = router;
        this.mainService = mainService;
        this.httpClient = httpClient;
        this.notif = -1;
        this.shop = -1;
        this.task = 0;
        this.page = '';
        this.mail = '';
        this.user = '';
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.btnColourAccueil = 'white';
        this.btnColourDataUser = 'white';
        this.btnColourComplainUser = 'white';
        this.btnColourRapportUser = 'white';
        this.dataConf = {};
        this.title = "";
        this.logo = "";
        this.notifLink = "";
        this.shopLink = "";
    }
    //public onToggleSidenav = () => {
    onToggleSidenav() {
        this.sidenavToggle.emit();
        console.log(' onToggleSidenav emit ');
    }
    initColor() {
        this.btnColourAccueil = 'primary';
        this.btnColourDataUser = 'primary';
        this.btnColourComplainUser = 'primary';
        this.btnColourRapportUser = 'primary';
    }
    getJson() {
        console.log(' json  getJson ');
        return this.httpClient.get("assets/projectParam.json").toPromise();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataConf = yield this.getJson();
            console.log('ngOnInit ', this.dataConf);
            this.title = this.dataConf['projectTitle'];
            this.logo = "assets/" + this.dataConf['projectImg'];
            if (this.dataConf['badgetShop'] != undefined) {
                this.shop = 0;
                this.shopLink = this.dataConf['badgetShop']['Link'];
                let filterParam = this.dataConf['badgetShop']['filterParam'];
                let sheet = this.dataConf['badgetShop']['sheet'];
            }
            if (this.dataConf['badgetNotification'] != undefined) {
                this.notif = 0;
                this.notifLink = this.dataConf['badgetNotification']['Link'];
                let filterParam = this.dataConf['badgetNotification']['filterParam'];
                let sheet = this.dataConf['badgetNotification']['sheet'];
            }
            this.page = localStorage.getItem('route');
            this.mail = localStorage.getItem('mail');
            this.user = localStorage.getItem('user');
            console.log('nofi ' + this.notif);
            console.log('this.page ' + this.page);
            //let paramString="sheet=userRequest"
            /////////////////////////////////////////////////////////
            let paramObject = {};
            let o = { 'User': this.user };
            if (this.dataConf['badgetShop'] != undefined) {
                let filterParam = this.dataConf['badgetShop']['filterParam']['filter'];
                for (let key in filterParam) {
                    console.log('loop ', key, ' ', filterParam[key]);
                    if (filterParam[key].includes('localStorage'))
                        filterParam[key] = this.user;
                }
                console.log(' filterParam ', JSON.stringify(filterParam));
                let sheet = this.dataConf['badgetShop']['filterParam']['sheet'];
                yield this.mainService.getDataByCols(sheet, filterParam).subscribe(data1 => {
                    this.shop = data1.length;
                    console.log(this.shop, ' nav request  ', JSON.stringify(data1));
                });
            }
            if (this.dataConf['badgetNotification'] != undefined) {
                this.notif = 0;
                this.notifLink = this.dataConf['badgetNotification']['Link'];
                let filterParam = this.dataConf['badgetNotification']['filterParam']['filter'];
                let sheet = this.dataConf['badgetNotification']['filterParam']['sheet'];
                let paramString2 = 'colName=Responsible&colValue=' + this.user + '&sheet=userRequestValidation';
                let o1 = { 'Responsible': this.user };
                o1['Status'] = 'Waiting';
                paramObject['data'] = o1;
                paramObject['sheet'] = 'userRequestValidation';
                yield this.mainService.getDataByCols(sheet, filterParam).subscribe(data2 => {
                    this.notif = data2.length;
                    console.log(this.notif, ' nav notof ', JSON.stringify(data2));
                });
            }
        });
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('ngAfterViewInit() ', this.dataConf);
            let paramObject = {};
            let o = { 'User': this.user };
            paramObject['data'] = o;
            paramObject['sheet'] = 'userRequest';
            /*  if ( this.dataConf['badgetShop'] != undefined){
          
                let filterParam = this.dataConf['badgetShop']['filterParam']
                for ( let key in filterParam){
                  if ( filterParam[key].insludes('localStorage')) filterParam[key]=this.user
                }
                console.log(' filterParam ',JSON.stringify(filterParam))
                let sheet = this.dataConf['badgetShop']['sheet']
              
            await this.mainService.getDataByCols(sheet,filterParam).subscribe(
                data1 =>{
                  this.shop=data1.length
                  console.log(this.shop,' nav request  ',JSON.stringify(data1))
                  }
                );
              }
          
              if ( this.dataConf['badgetNotification'] != undefined){
                this.notif=0;
                this.notifLink=this.dataConf['badgetNotification']['Link']
          
                let filterParam = this.dataConf['badgetNotification']['filterParam']
          
                
                let sheet = this.dataConf['badgetNotification']['sheet']
                let paramString2='colName=Responsible&colValue='+this.user+'&sheet=userRequestValidation'
                let o1={'Responsible':this.user}
                o1['Status']='Waiting'
                paramObject['data']=o1
                paramObject['sheet']='userRequestValidation'
                await this.mainService.getDataByCols(sheet,filterParam).subscribe(
                 data2 =>{
             
                   this.notif=data2.length
                   console.log(this.notif,' nav notof ',JSON.stringify(data2))
                  }
                 );
                }
          */
        });
    }
    getMoreInformation() {
        return 'Address : Home \n  Tel : Number';
    }
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        this.router.navigate(['/']);
    }
}
NavbarUserComponent.ɵfac = function NavbarUserComponent_Factory(t) { return new (t || NavbarUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
NavbarUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarUserComponent, selectors: [["app-navbar-user"]], outputs: { sidenavToggle: "sidenavToggle" }, decls: 23, vars: 7, consts: [["color", "primary", 2, "height", "auto"], ["fxShow", "true", "fxHide.gt-sm", "true"], [3, "click"], ["height", "70px", 2, "padding-left", "5px", "padding-right", "50px", 3, "src"], ["routerLink", "/"], [1, "example-spacer"], ["fxShow", "true", "fxHide.lt-md", "true"], ["routerLink", "/report", 2, "padding-left", "10px"], ["matBadgeColor", "warn", 1, "material-icons", 3, "matTooltip", "matTooltipClass"], [2, "font-size", "small"], [3, "routerLink", 4, "ngIf"], [2, "font-size", "smaller", "padding-left", "10px", 3, "click"], ["matTooltip", "D\u00E9connexion", 1, "material-icons"], [3, "routerLink"], ["matBadgeSize", "small", "matBadgeColor", "warn", "class", "material-icons", "matTooltipClass", "my-tooltip", 3, "matBadge", "matTooltip", 4, "ngIf"], ["class", "material-icons", "style", "margin-right:0px !important;color:black;", 4, "ngIf"], ["matBadgeSize", "small", "matBadgeColor", "warn", "matTooltipClass", "my-tooltip", 1, "material-icons", 3, "matBadge", "matTooltip"], [1, "material-icons", 2, "margin-right", "0px !important", "color", "black"], ["matBadgeSize", "small", "class", "material-icons", 3, "matBadge", 4, "ngIf"], ["matBadgeSize", "small", 1, "material-icons", 3, "matBadge"]], template: function NavbarUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarUserComponent_Template_a_click_3_listener() { return ctx.onToggleSidenav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "persone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, NavbarUserComponent_a_17_Template, 3, 3, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, NavbarUserComponent_a_19_Template, 3, 3, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarUserComponent_Template_a_click_20_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.logo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", ctx.getMoreInformation());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("matTooltipClass", "", ctx.shop, " demande(s) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.notif != 0 - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.shop != 0 - 1);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarRow"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__["MatBadge"]], styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.example-button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .example-button-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n\n\n.mat-button.mat-success[_ngcontent-%COMP%], .mat-stroked-button.mat-success[_ngcontent-%COMP%] {\n    color: #250755;\n    background-color: #f0fff3;\n}\n\n.mat-button.mat-success[_ngcontent-%COMP%]:hover, .mat-stroked-button.mat-success[_ngcontent-%COMP%]:hover {\n  background-color: #f0fff3;\n}\n\n.mat-raised-button.mat-success[_ngcontent-%COMP%], .mat-flat-button.mat-success[_ngcontent-%COMP%], .mat-fab.mat-success[_ngcontent-%COMP%], .mat-mini-fab.mat-success[_ngcontent-%COMP%] {\n  color: #f0fff3;\n  background-color: #155724;\n}\n\n.mat-icon-button.mat-success[_ngcontent-%COMP%] {\n  color:#155724;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  \n}\n\nli[_ngcontent-%COMP%] {\n  float: left;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 16px;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active{\n  color: lightgray;\n}\n\n.navigation-items[_ngcontent-%COMP%]{\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\nmat-toolbar[_ngcontent-%COMP%]{\n  border-radius: 3px;\n}\n\n@media(max-width: 959px){\n  mat-toolbar[_ngcontent-%COMP%]{\n      border-radius: 0px;\n  }\n}\n\n.badge[_ngcontent-%COMP%] {\n  padding-left: 9px;\n  padding-right: 9px;\n  border-radius: 9px;\n}\n\n.label-warning[href][_ngcontent-%COMP%], .badge-warning[href][_ngcontent-%COMP%] {\n  background-color: #c67605;\n}\n\n#lblCartCount[_ngcontent-%COMP%] {\n    font-size: 12px;\n    background: #ff0000;\n    color: #fff;\n    padding: 0 5px;\n    vertical-align: top;\n    margin-left: -10px; \n}\n\n.demo-section[_ngcontent-%COMP%]    + .demo-section[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.my-tooltip[_ngcontent-%COMP%] {\n  white-space: pre-line;\n}\n\n.test[_ngcontent-%COMP%]\n{\n  white-space: pre-line;\n}\n\n  .mat-tooltip {\n  white-space: pre-line;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXItdXNlci9uYXZiYXItdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUEsbUJBQW1COztBQUVuQjs7SUFFSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUNBOztFQUVFLHlCQUF5QjtBQUMzQjs7QUFFQTs7OztFQUlFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBR0E7RUFDRSxxQkFBcUI7RUFDckIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFHQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO01BQ0ksa0JBQWtCO0VBQ3RCO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBR2xCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci11c2VyL25hdmJhci11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmV4YW1wbGUtYnV0dG9uLXJvdyBidXR0b24sXG4uZXhhbXBsZS1idXR0b24tcm93IGEge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLyogU3VjY2VzcyBzeWxpbmcgKi9cblxuLm1hdC1idXR0b24ubWF0LXN1Y2Nlc3MsXG4ubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1zdWNjZXNzIHtcbiAgICBjb2xvcjogIzI1MDc1NTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmZmYzO1xufVxuLm1hdC1idXR0b24ubWF0LXN1Y2Nlc3M6aG92ZXIsXG4ubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1zdWNjZXNzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZmZmMztcbn1cblxuLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1zdWNjZXNzLFxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtc3VjY2Vzcyxcbi5tYXQtZmFiLm1hdC1zdWNjZXNzLFxuLm1hdC1taW5pLWZhYi5tYXQtc3VjY2VzcyB7XG4gIGNvbG9yOiAjZjBmZmYzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU1NzI0O1xufVxuXG4ubWF0LWljb24tYnV0dG9uLm1hdC1zdWNjZXNzIHtcbiAgY29sb3I6IzE1NTcyNDtcbn1cblxuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAvKmJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7Ki9cbn1cblxubGkge1xuICBmbG9hdDogbGVmdDtcbn1cblxubGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuYTpob3ZlciwgYTphY3RpdmV7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5uYXZpZ2F0aW9uLWl0ZW1ze1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxubWF0LXRvb2xiYXJ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuQG1lZGlhKG1heC13aWR0aDogOTU5cHgpe1xuICBtYXQtdG9vbGJhcntcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgfVxufVxuXG4uYmFkZ2Uge1xuICBwYWRkaW5nLWxlZnQ6IDlweDtcbiAgcGFkZGluZy1yaWdodDogOXB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDlweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbn1cblxuLmxhYmVsLXdhcm5pbmdbaHJlZl0sXG4uYmFkZ2Utd2FybmluZ1tocmVmXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNjc2MDU7XG59XG4jbGJsQ2FydENvdW50IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYmFja2dyb3VuZDogI2ZmMDAwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAwIDVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDsgXG59XG5cbi5kZW1vLXNlY3Rpb24gKyAuZGVtby1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLm15LXRvb2x0aXAge1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG59XG4udGVzdFxue1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG59XG5cbjo6bmctZGVlcCAubWF0LXRvb2x0aXAge1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavbarUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-navbar-user',
                templateUrl: './navbar-user.component.html',
                styleUrls: ['./navbar-user.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, { sidenavToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/sidenav-user/sidenav-user.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/sidenav-user/sidenav-user.component.ts ***!
  \*******************************************************************/
/*! exports provided: SidenavUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavUserComponent", function() { return SidenavUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");






class SidenavUserComponent {
    constructor() { }
    ngOnInit() {
    }
}
SidenavUserComponent.ɵfac = function SidenavUserComponent_Factory(t) { return new (t || SidenavUserComponent)(); };
SidenavUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavUserComponent, selectors: [["app-sidenav-user"]], decls: 27, vars: 1, consts: [["mat-list-item", "", "routerLink", "/home"], [1, "nav-caption"], ["mat-list-item", "", "routerLink", "/owner/owners"], ["mat-list-item", "", "routerLink", "#"], [3, "matMenuTriggerFor"], ["matline", ""], ["menu", "matMenu"], ["mat-menu-item", ""]], template: function SidenavUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "assignment_ind");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Owner Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "account_balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Account Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-list-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "unfold_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-menu", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "View profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Add contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"]], styles: [".navbar[_ngcontent-%COMP%]{\r\n    background:  #07020857;\r\n  }\r\n    \r\n    .nav-link[_ngcontent-%COMP%]{\r\n      color: #3C3C3B;\r\n    }\r\n    \r\n    .navbar-brand[_ngcontent-%COMP%]{\r\n      color: #3C3C3B;\r\n    }\r\n    \r\n    .material-icons[_ngcontent-%COMP%]{\r\n    margin-right:45px;\r\n    vertical-align: top;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlbmF2LXVzZXIvc2lkZW5hdi11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7RUFDeEI7O0lBRUU7TUFDRSxjQUFjO0lBQ2hCOztJQUVBO01BQ0UsY0FBYztJQUNoQjs7SUFHRjtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGVuYXYtdXNlci9zaWRlbmF2LXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAgIzA3MDIwODU3O1xyXG4gIH1cclxuICAgIFxyXG4gICAgLm5hdi1saW5re1xyXG4gICAgICBjb2xvcjogIzNDM0MzQjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm5hdmJhci1icmFuZHtcclxuICAgICAgY29sb3I6ICMzQzNDM0I7XHJcbiAgICB9XHJcbiAgICBcclxuICBcclxuICAubWF0ZXJpYWwtaWNvbnN7XHJcbiAgICBtYXJnaW4tcmlnaHQ6NDVweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgfVxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidenav-user',
                templateUrl: './sidenav-user.component.html',
                styleUrls: ['./sidenav-user.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/guard/authenticator.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/guard/authenticator.guard.ts ***!
  \**********************************************/
/*! exports provided: AuthenticatorGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatorGuard", function() { return AuthenticatorGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




class AuthenticatorGuard {
    constructor(router, service) {
        this.router = router;
        this.service = service;
    }
    canActivate(route, state) {
        //   let flag=this.service.isAuthenticated()
        if (this.service.isAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(['/', 'login']);
            return false;
        }
        //return true;
    }
}
AuthenticatorGuard.ɵfac = function AuthenticatorGuard_Factory(t) { return new (t || AuthenticatorGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
AuthenticatorGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticatorGuard, factory: AuthenticatorGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticatorGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/help/help.component.ts":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");




function HelpComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
//import { LocalstorageService } from 'src/app/dragdrop/shared/localstorage.service';
class HelpComponent {
    constructor(data, elRef, render, 
    //private localStorageService: LocalstorageService,
    dialogRef) {
        this.elRef = elRef;
        this.render = render;
        this.dialogRef = dialogRef;
        this.existImage = true;
        this.text_top = "";
        this.text_bottom = "";
        this.Description = data;
    }
    ngAfterViewInit() {
        if (this.Description["image"] != undefined) {
            this.existImage = true;
            this.image = this.Description["image"];
        }
        if (this.Description["text_top"] != undefined) {
            this.text_top = this.Description["text_top"];
        }
        if (this.Description["text_bottom"] != undefined) {
            this.text_bottom = this.Description["text_bottom"];
        }
        console.log('help ', this.text_top, '  ', this.image, ' ', this.text_bottom);
    }
}
HelpComponent.ɵfac = function HelpComponent_Factory(t) { return new (t || HelpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
HelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelpComponent, selectors: [["app-help"]], decls: 5, vars: 3, consts: [[2, "white-space", "pre", "text-align", "center", "font-size", "small"], ["style", "text-align: center;vertical-align: middle;width: 500;\nheight: 500;", 4, "ngIf"], [2, "text-align", "center", "vertical-align", "middle", "width", "500", "height", "500"], ["title", "logo", "height", "500", "width", "500", "id", "navImg", 3, "src"]], template: function HelpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HelpComponent_div_2_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.text_top, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.existImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.text_bottom, " ");
    } }, styles: [".image-cont[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex: 1 1 0;\r\n   }\r\n   .image-cont[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      max-width: 100%;\r\n      max-height: 100%;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscC9oZWxwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7R0FDWjtHQUNBO01BQ0csZUFBZTtNQUNmLGdCQUFnQjtJQUNsQiIsImZpbGUiOiJzcmMvYXBwL2hlbHAvaGVscC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5pbWFnZS1jb250IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxIDEgMDtcclxuICAgfVxyXG4gICAuaW1hZ2UtY29udCBpbWcge1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-help',
                templateUrl: './help.component.html',
                styleUrls: ['./help.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["*"];
class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], ngContentSelectors: _c0, decls: 3, vars: 0, consts: [["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "layout-wrapper"], ["fxFlex", "80%", "fxFlex.lt-md", "100%", 1, "flex-wrapper"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".layout-wrapper[_ngcontent-%COMP%]{ \n    height: 100%; \n} \n.flex-wrapper[_ngcontent-%COMP%]{ \n    height: 100%; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXlvdXQtd3JhcHBlcnsgXG4gICAgaGVpZ2h0OiAxMDAlOyBcbn0gXG4uZmxleC13cmFwcGVyeyBcbiAgICBoZWlnaHQ6IDEwMCU7IFxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");






















//import { MatButton } from '@angular/material/button';
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/navidation/sidenav-list-admin/sidenav-list-admin.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/navidation/sidenav-list-admin/sidenav-list-admin.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SidenavListAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavListAdminComponent", function() { return SidenavListAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");






const _c0 = function (a0) { return { active: a0 }; };
const _c1 = function (a0) { return { "active": a0 }; };
class SidenavListAdminComponent {
    constructor() {
        this.sidenavClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.page = 'test';
        this.onSidenavClose = () => {
            this.sidenavClose.emit();
            console.log(' sidenavClose emit  ');
        };
    }
    ngOnInit() {
        this.page = localStorage.getItem('route');
        //this.page='user'
        console.log(' route page ', this.page);
    }
}
SidenavListAdminComponent.ɵfac = function SidenavListAdminComponent_Factory(t) { return new (t || SidenavListAdminComponent)(); };
SidenavListAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavListAdminComponent, selectors: [["app-sidenav-list-admin"]], outputs: { sidenavClose: "sidenavClose" }, decls: 61, vars: 30, consts: [[3, "ngClass"], ["mat-list-item", "", "routerLink", "/LandingUser"], [1, "nav-caption"], ["mat-list-item", "", "routerLink", "/ListNews"], ["mat-list-item", "", "routerLink", "/MyData"], ["mat-list-item", "", "routerLink", "/ChangeUserPassword"], ["mat-list-item", "", "routerLink", "/ListComposant"], ["mat-list-item", "", "routerLink", "/ListInteraction"], ["mat-list-item", "", "routerLink", "/ListDocuments"], ["mat-list-item", "", "routerLink", ""], ["mat-list-item", "", "routerLink", "/ListCompteur"], ["mat-list-item", "", "routerLink", "/ListcompteurSteg"]], template: function SidenavListAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Acceuil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Actualit\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Mes Donn\u00E9es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "M\u00E0J Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Composant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Interaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Declaration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "compteur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "undefined");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.page === "LandingUser"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.page === "ListNews"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.page === "MyData"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.page === "ChangeUserPassword"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.page === "ListComposant"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c1, ctx.page === "ListInteraction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c1, ctx.page === "ListDocuments"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c1, ctx.page === "Declaration"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c1, ctx.page === "ListCompteur"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c1, ctx.page === "ListcompteurSteg"));
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], styles: ["a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active{\r\n    color: lightgray;\r\n}\r\n\r\n.nav-caption[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    padding-left: 6px;\r\n}\r\n\r\n.active[_ngcontent-%COMP%] {\r\n  background-color:rgb(127, 133, 255);\r\n  color: white;\r\n\r\n}\r\n\r\n\r\n\r\n.mat-button.mat-success[_ngcontent-%COMP%], .mat-stroked-button.mat-success[_ngcontent-%COMP%] {\r\n    color: #250755;\r\n    background-color: #89c0e6;\r\n}\r\n\r\n.mat-button.mat-success[_ngcontent-%COMP%]:hover, .mat-stroked-button.mat-success[_ngcontent-%COMP%]:hover {\r\n  background-color: #f0fff3;\r\n}\r\n\r\n.mat-raised-button.mat-success[_ngcontent-%COMP%], .mat-flat-button.mat-success[_ngcontent-%COMP%], .mat-fab.mat-success[_ngcontent-%COMP%], .mat-mini-fab.mat-success[_ngcontent-%COMP%] {\r\n  color: #f0fff3;\r\n  background-color: #155724;\r\n}\r\n\r\n.mat-icon-button.mat-success[_ngcontent-%COMP%] {\r\n  color:#155724;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWRhdGlvbi9zaWRlbmF2LWxpc3QtYWRtaW4vc2lkZW5hdi1saXN0LWFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsWUFBWTs7QUFFZDs7QUFHQSxtQkFBbUI7O0FBRW5COztJQUVJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBQ0E7O0VBRUUseUJBQXlCO0FBQzNCOztBQUVBOzs7O0VBSUUsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL25hdmlkYXRpb24vc2lkZW5hdi1saXN0LWFkbWluL3NpZGVuYXYtbGlzdC1hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuYTpob3ZlciwgYTphY3RpdmV7XHJcbiAgICBjb2xvcjogbGlnaHRncmF5O1xyXG59XHJcblxyXG4ubmF2LWNhcHRpb257XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTI3LCAxMzMsIDI1NSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG5cclxuXHJcbi8qIFN1Y2Nlc3Mgc3lsaW5nICovXHJcblxyXG4ubWF0LWJ1dHRvbi5tYXQtc3VjY2VzcyxcclxuLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtc3VjY2VzcyB7XHJcbiAgICBjb2xvcjogIzI1MDc1NTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4OWMwZTY7XHJcbn1cclxuLm1hdC1idXR0b24ubWF0LXN1Y2Nlc3M6aG92ZXIsXHJcbi5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXN1Y2Nlc3M6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGZmZjM7XHJcbn1cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtc3VjY2VzcyxcclxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtc3VjY2VzcyxcclxuLm1hdC1mYWIubWF0LXN1Y2Nlc3MsXHJcbi5tYXQtbWluaS1mYWIubWF0LXN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiAjZjBmZmYzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTU3MjQ7XHJcbn1cclxuXHJcbi5tYXQtaWNvbi1idXR0b24ubWF0LXN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiMxNTU3MjQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavListAdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidenav-list-admin',
                templateUrl: './sidenav-list-admin.component.html',
                styleUrls: ['./sidenav-list-admin.component.css']
            }]
    }], function () { return []; }, { sidenavClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
//import { JwtHelperService } from '@auth0/angular-jwt';



class AuthService {
    constructor() { }
    decrypt(encrypted) {
        let key = '0n3v1ew';
        const decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].decrypt(encrypted, key);
        return decrypted.toString(crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8);
    }
    isAuthenticated() {
        var token = false;
        const expiredDate = localStorage.getItem('token');
        let decryptedExpiredDate = this.decrypt(expiredDate);
        let sysdate = new Date();
        console.log(' token ', expiredDate);
        //sysdate.setDate(sysdate.getDate()+1)
        console.log(' sysdate ', sysdate);
        console.log(' expiryDate ', decryptedExpiredDate);
        try {
            let d = new Date(decryptedExpiredDate);
            console.log(d, '     ', d.getTime(), '    sysdate ', sysdate.getTime());
            token = (d.getTime() > sysdate.getTime());
        }
        catch (_a) { }
        return token;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/crud.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/crud.service.ts ***!
  \******************************************/
/*! exports provided: CrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudService", function() { return CrudService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






class CrudService {
    constructor(http) {
        this.http = http;
    }
    // tslint:disable-next-line:typedef
    //
    insertJsonDataToSheet(data, sheet) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'text/plain' //application/x-www-form-urlencoded'
        });
        console.log('  service  0000000');
        // console.log(' add send  '+JSON.stringify(usuario))
        const obj = {
            "data": data,
            "sheet": sheet,
            "action": "insert"
        };
        console.log(' JsonDataToSheet ', JSON.stringify(obj));
        return this.http.post('https://script.google.com/macros/s/AKfycbw_t57kbsgeHTguLrzhniSB59h9vEYhsMapkk4VVsHvVfd6H8PE9AevsOcSkjFiMI1N/exec', obj, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if (err.status === 404) {
                console.log(`error input data `);
                return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
        }));
    }
    getDataBySheet(city) {
        let head = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        head.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token, content-type');
        head.append('Access-Control-Allow-Methods', 'GET');
        head.append('Access-Control-Allow-Origin', '*');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Accept-Language': 'en_US',
            'Content-Type': 'application/json' //application/x-www-form-urlencoded'
        });
        //return this.http.get(this.baseWeatherURL + city + this.urlSuffix, {headers: head})
        return this.http.get('https://script.google.com/macros/s/AKfycby08kD0RuQqrbMKWfsUa7ixSk59Ze5Ebfn7TndA4CXolSALY1-t7VjMB2aL1zlbonb0/exec?action=listAll&sheet=user')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if (err.status === 404) {
                console.log(`City ${city} not found`);
                return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
        }));
    }
    insertJsonDataBySheet(data, sheet) {
        let head = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        head.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token, content-type');
        head.append('Access-Control-Allow-Methods', 'GET');
        head.append('Access-Control-Allow-Origin', '*');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Accept-Language': 'en_US',
            'Content-Type': 'application/json' //application/x-www-form-urlencoded'
        });
        //return this.http.get(this.baseWeatherURL + city + this.urlSuffix, {headers: head})
        return this.http.get('https://script.google.com/macros/s/AKfycby08kD0RuQqrbMKWfsUa7ixSk59Ze5Ebfn7TndA4CXolSALY1-t7VjMB2aL1zlbonb0/exec?action=insert&sheet=user&Data={}')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if (err.status === 404) {
                console.log(`Row not found`);
                return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
        }));
    }
    //insertJsonDataToSheet(data: any, sheet:string) {
    updateJsonDataToSheet(data, sheet) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'text/plain' //application/x-www-form-urlencoded'
        });
        console.log('  service  0000000');
        // console.log(' add send  '+JSON.stringify(usuario))
        /*const obj ={"data":{"Date":"2021-08-31","Compteur":"Ascensseur D","Ancien_index":"54871100","Index":"54921100000",
        "compteur_id":"1"},"sheet":"compteur","action":"update"}*/
        // const obj ={"data":{ "compteur_id":"1","Date":"2021-08-30T23:00:00.000Z","Compteur":"Ascensseur D","Ancien_index":54871100,"Index":"549211777"},"sheet":"compteur","action":"update"}
        const obj = {
            "data": data,
            "sheet": sheet,
            "action": "update"
        };
        console.log(' JsonDataToSheet ', JSON.stringify(obj));
        return this.http.post('https://script.google.com/macros/s/AKfycbz9TkwsyiVsIvU9c1qTaBSb3xy5KjQuZvRHdvHeIGqbZK4rmU7tUjiiqnhado-rrdNcvw/exec', obj, { headers: headers })
            // return this.http.post('https://script.google.com/macros/s/AKfycbw_t57kbsgeHTguLrzhniSB59h9vEYhsMapkk4VVsHvVfd6H8PE9AevsOcSkjFiMI1N/exec',obj, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if (err.status === 404) {
                console.log(`error input data `);
                return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
            }
            console.log(' err.status ', err.status);
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
        }));
    }
    deleteRowSheet(row_id, sheet) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'text/plain' //application/x-www-form-urlencoded'
        });
        //console.log('  service  0000000') 
        console.log('delete   ', row_id, " sheet ", sheet);
        const obj = {
            "id": row_id,
            "sheet": sheet,
            "action": "delete"
        };
        return this.http.post('https://script.google.com/macros/s/AKfycbwZflK5fYiAZ9djxsNR_qEvZq6rx4aNrtColkug_nT5mx9vLpbu2uqkSivX0lbN03tZnQ/exec', obj, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if (err.status === 404) {
                console.log(`error input data `);
                return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
        }));
    }
}
CrudService.ɵfac = function CrudService_Factory(t) { return new (t || CrudService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
CrudService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CrudService, factory: CrudService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CrudService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/main.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/main.service.ts ***!
  \******************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






class MainService {
    constructor(http) {
        this.http = http;
    }
    // tslint:disable-next-line:typedef
    updateUserRequestValidation(data) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'text/plain' //application/x-www-form-urlencoded'
        });
        console.log(' updateUserRequestValidation  ' + JSON.stringify(data));
        return this.http.post('https://script.google.com/macros/s/AKfycbyYZaig9d7szFHhq6AfzjbE5O3UVioXlryqBU4vbQ9hOc1UhqdIqCShX8h-IBakpDFP/exec', data, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            if (err.status === 404) {
                console.log(`error input data `);
                return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }));
    }
    updateUserRequestTask(data) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'text/plain' //application/x-www-form-urlencoded'
        });
        console.log(' updateUserRequestTask  ' + JSON.stringify(data));
        return this.http.post('https://script.google.com/macros/s/AKfycbw3SWAJAo371gbhLMU7IaYM-HIpdnYZlmZEJ7Ym-4HQncJ_wKISTYNig_biTpYPLqdm_g/exec', data, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            if (err.status === 404) {
                console.log(`error input data `);
                return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }));
    }
    updateJsonDataToSheetyKey(data) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'text/plain' //application/json' //text/plain' //  '
        });
        //let dataParam={"data":data,"action":"updateJsonDataToSheetyKey","sheet":sheetName}
        //data={"action":"login","mail":"mounir.melliti@orange.com","password":"mounir2023"    }
        return this.http.post('https://script.google.com/macros/s/AKfycbz9TkwsyiVsIvU9c1qTaBSb3xy5KjQuZvRHdvHeIGqbZK4rmU7tUjiiqnhado-rrdNcvw/exec', data, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            if (err.status === 404) {
                console.log(`error input data `);
                return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }));
    }
    getDataByCols(sheet, paramString) {
        console.log(' service getAllUserInteractionRequest ');
        // return this.http.get<any>('https://script.google.com/macros/s/AKfycbwXtCXWWJlXyAVZah-8EnoddGTzVDM6oDhtNw6DsI0tfOu8CuZikDQhYEUzKWsh0GMz/exec?sheet='+sheet+'&action=getDataByCols&data='+JSON.stringify(paramString));
        // return this.http.get<any>('https://script.google.com/macros/s/AKfycby3ppuOjYaA6I9K4PCet6h_nhomWov4gV1TwY9e9SS_1nNSUjzRxsPeshPaVUcVM5g/exec?sheet='+sheet+'&action=getDataByCols&data='+JSON.stringify(paramString));
        //return this.http.get<any>('https://script.google.com/macros/s/AKfycby9493uuGCkiVve2kw4zEpjy4LhWv_m7kCRfe2x8xfIYwZhGH-9aM67o1RvgfTjPISV3g/exec?sheet='+sheet+'&action=getDataByCols&data='+JSON.stringify(paramString));
        return this.http.get('https://script.google.com/macros/s/AKfycbxsyI63D_A2hSQuINn1V7rpPw3MOVSH3cq5rd_pqlWmXSTRDixMI3EJVmSUSdmqVG8PDQ/exec?sheet=' + sheet + '&action=getDataByCols&data=' + JSON.stringify(paramString));
    }
    validateLogin(email, password) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'text/plain' //application/json' //text/plain' //  '
        });
        let data = { "mail": email, "password": password, "action": "login" };
        //data={"action":"login","mail":"mounir.melliti@orange.com","password":"mounir2023"    }
        return this.http.post('https://script.google.com/macros/s/AKfycbyTwIObJFaxiem0-1gDdThfQ3cbd-qISMfxuiDz3tflCWpNqhojUnA8TayAbQcXZxE/exec', data, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            if (err.status === 404) {
                console.log(`error input data `);
                return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }));
    }
    mailRecovery(email, sheet) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'text/plain' //application/json' //text/plain' //  '
        });
        let data = { "Email": email };
        const obj = /*{
          "data":{"Email":"mounirmellitimail@gmail.com"},
          "sheet":"co-owner",
          "action":"recoveryPassword"
          }*/ {
            "data": data,
            "sheet": sheet,
            "action": "recoveryPassword"
        };
        console.log(' mailRecovery service', JSON.stringify(obj));
        //data={"action":"login","mail":"mounir.melliti@orange.com","password":"mounir2023"    }
        return this.http.post('https://script.google.com/macros/s/AKfycbw3HKvF9LY2P_2dkhvlyZN-9UbsW1Y2csA5lyWVFxIil0BwO2D7tBiQ5TMMI02uNfeLbQ/exec', obj, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            if (err.status === 404) {
                console.log(`error input data `);
                return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }));
    }
    getObjectMergedRequest(data) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'text/plain' //application/json' //text/plain' //  '
        });
        //let data={"sheet":"dataObject","action":"mergeObjectWithRequestUserByKeyToSubscribed",
        //"data":{"joinedSheetName":"userRequest", "mergeKey":"Ref_Object",  "filtredFieldValue" : {"User":"ExtMounirMelliti" } } }
        return this.http.post('https://script.google.com/macros/s/AKfycby9iLPjnu3cSMRYzgpYssGt2jAIsoMqyr1u7_OTkHP1kciJEqnoKRSk7pJRiQ_VvX4f/exec', data, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            if (err.status === 404) {
                console.log(`error input data `);
                return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }));
    }
    getAllUsers() {
        console.log(' service getAllUsers ');
        return this.http.get('https://script.google.com/macros/s/AKfycbwxaVzd4uJSw7KAt6WI50nQkMaiCU44x8CJJXYl93k/dev?action=listAll1&sheet=user'); //http://localhost:8080/getAllUsers');
    }
    getAllRowsSheet(sheet) {
        let head = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        head.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token, content-type');
        head.append('Access-Control-Allow-Methods', 'GET');
        head.append('Access-Control-Allow-Origin', '*');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Accept-Language': 'en_US',
            'Content-Type': 'application/json' //application/x-www-form-urlencoded'
        });
        //return this.http.get(this.baseWeatherURL + city + this.urlSuffix, {headers: head})
        return this.http.get('https://script.google.com/macros/s/AKfycby08kD0RuQqrbMKWfsUa7ixSk59Ze5Ebfn7TndA4CXolSALY1-t7VjMB2aL1zlbonb0/exec?action=listAll&sheet=' + sheet)
            //https://script.google.com/macros/s/AKfycbwxaVzd4uJSw7KAt6WI50nQkMaiCU44x8CJJXYl93k/exec?action=listAll&sheet=user, {headers: headers}) //http://localhost:8080/getAllUsers');
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            if (err.status === 404) {
                console.log(`sheet ${sheet} not found`);
                return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }));
    }
    appendUserRequest(data) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'text/plain' //application/x-www-form-urlencoded'
        });
        let dataObject = { 'data': data,
            'action': 'appendUserRequest',
            'sheet': 'userRequest' };
        console.log(' appendUserRequest ', JSON.stringify(data));
        //localhost:8080/appendUserRequest
        //return this.http.post('https://script.google.com/macros/s/AKfycbxowI4xn-adEG-GZl0npmt-WNePZu7IKAtuLaZj8nnlQofOeyjDWAakQLLZndacT4sD/exec', dataObject, { headers: headers })
        //return this.http.post('https://script.google.com/macros/s/AKfycbz_TpRVhIYlUljeWtTNckyYy1lSB8lybUjhg18RODFBYeXC18Q0Y2IUtTqrKHiFp1VQ/exec', dataObject, { headers: headers })
        return this.http.post('https://script.google.com/macros/s/AKfycbxa8El-MkBFtJfU2lZwoc_tGP2wSaI6oLTlO5sV7mG56gH3-9QsW7EqK8-PqbIZFMcPDw/exec', dataObject, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            if (err.status === 404) {
                console.log(`sheet  not found`);
                return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }));
    }
}
MainService.ɵfac = function MainService_Factory(t) { return new (t || MainService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
MainService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MainService, factory: MainService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MainService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/composant/composant-crud/composant-crud.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/composant/composant-crud/composant-crud.component.ts ***!
  \****************************************************************************/
/*! exports provided: composantCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composantCrudComponent", function() { return composantCrudComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_help_help_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var src_app_components_mat_table_list_mat_table_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/mat-table-list/mat-table-list.component */ "./src/app/components/mat-table-list/mat-table-list.component.ts");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");



















function composantCrudComponent_div_7_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function composantCrudComponent_div_7_div_2_div_1_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const form_elem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.showHelp(form_elem_r4.help); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r4.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r4.label);
} }
function composantCrudComponent_div_7_div_2_div_2_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r4.label);
} }
function composantCrudComponent_div_7_div_2_div_2_input_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 14);
} if (rf & 2) {
    const form_elem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r4.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", form_elem_r4.disabled);
} }
function composantCrudComponent_div_7_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, composantCrudComponent_div_7_div_2_div_2_label_1_Template, 3, 1, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, composantCrudComponent_div_7_div_2_div_2_input_3_Template, 1, 2, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.myFormGroup.get(form_elem_r4.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.myFormGroup.get(form_elem_r4.label));
} }
function composantCrudComponent_div_7_div_2_div_3_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r4.label);
} }
function composantCrudComponent_div_7_div_2_div_3_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", item_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r23, " ");
} }
function composantCrudComponent_div_7_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, composantCrudComponent_div_7_div_2_div_3_label_2_Template, 3, 1, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function composantCrudComponent_div_7_div_2_div_3_Template_select_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r24.SelectOnChange($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Select Compteur");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, composantCrudComponent_div_7_div_2_div_3_option_7_Template, 2, 2, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.myFormGroup.get(form_elem_r4.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r4.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", form_elem_r4.disabled == 1 ? "" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", form_elem_r4.paramValue);
} }
function composantCrudComponent_div_7_div_2_div_4_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r4.label);
} }
function composantCrudComponent_div_7_div_2_div_4_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topping_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", topping_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](topping_r30);
} }
function composantCrudComponent_div_7_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, composantCrudComponent_div_7_div_2_div_4_label_1_Template, 3, 1, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function composantCrudComponent_div_7_div_2_div_4_Template_mat_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r31.onSelectMultipleChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, composantCrudComponent_div_7_div_2_div_4_mat_option_3_Template, 2, 2, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.myFormGroup.get(form_elem_r4.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r4.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", form_elem_r4.paramValue);
} }
function composantCrudComponent_div_7_div_2_div_5_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r4.label);
} }
function composantCrudComponent_div_7_div_2_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function composantCrudComponent_div_7_div_2_div_5_div_2_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r38.onCheckChangesNext($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const block_r37 = ctx.$implicit;
    const form_elem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", block_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r4.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", block_r37, " ");
} }
function composantCrudComponent_div_7_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, composantCrudComponent_div_7_div_2_div_5_label_1_Template, 3, 1, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, composantCrudComponent_div_7_div_2_div_5_div_2_Template, 3, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.myFormGroup.get(form_elem_r4.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", form_elem_r4.paramValue);
} }
function composantCrudComponent_div_7_div_2_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-progress-spinner", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function composantCrudComponent_div_7_div_2_div_6_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r4.label);
} }
function composantCrudComponent_div_7_div_2_div_6_input_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 32);
} if (rf & 2) {
    const form_elem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r4.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", form_elem_r4.disabled);
} }
function composantCrudComponent_div_7_div_2_div_6_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", form_elem_r4.label, " is required ");
} }
function composantCrudComponent_div_7_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, composantCrudComponent_div_7_div_2_div_6_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, composantCrudComponent_div_7_div_2_div_6_label_3_Template, 3, 1, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function composantCrudComponent_div_7_div_2_div_6_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); const form_elem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r49.loadSelectionList(form_elem_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "collections");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, composantCrudComponent_div_7_div_2_div_6_input_8_Template, 1, 2, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, composantCrudComponent_div_7_div_2_div_6_div_9_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.spinerSelectedFieldpopUp);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.myFormGroup.get(form_elem_r4.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.myFormGroup.get(form_elem_r4.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.myFormGroup.get(form_elem_r4.label).errors == null ? null : ctx_r10.myFormGroup.get(form_elem_r4.label).errors.required);
} }
function composantCrudComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, composantCrudComponent_div_7_div_2_div_1_Template, 6, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, composantCrudComponent_div_7_div_2_div_2_Template, 4, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, composantCrudComponent_div_7_div_2_div_3_Template, 8, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, composantCrudComponent_div_7_div_2_div_4_Template, 4, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, composantCrudComponent_div_7_div_2_div_5_Template, 3, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, composantCrudComponent_div_7_div_2_div_6_Template, 10, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r4.type == "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r4.type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r4.type == "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r4.type == "selectMultiple");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r4.type == "checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r4.type == "ValueApiSelect");
} }
function composantCrudComponent_div_7_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function composantCrudComponent_div_7_div_4_div_1_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r61); const form_elem_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r59.showHelp(form_elem_r53.help); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r53.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r53.label);
} }
function composantCrudComponent_div_7_div_4_div_2_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r53.label);
} }
function composantCrudComponent_div_7_div_4_div_2_input_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 14);
} if (rf & 2) {
    const form_elem_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r53.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", form_elem_r53.disabled);
} }
function composantCrudComponent_div_7_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, composantCrudComponent_div_7_div_4_div_2_label_1_Template, 3, 1, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, composantCrudComponent_div_7_div_4_div_2_input_3_Template, 1, 2, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r55.myFormGroup.get(form_elem_r53.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r55.myFormGroup.get(form_elem_r53.label));
} }
function composantCrudComponent_div_7_div_4_div_3_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r53.label);
} }
function composantCrudComponent_div_7_div_4_div_3_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", item_r71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r71, " ");
} }
function composantCrudComponent_div_7_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, composantCrudComponent_div_7_div_4_div_3_label_2_Template, 3, 1, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function composantCrudComponent_div_7_div_4_div_3_Template_select_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r72.SelectOnChange($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Select your option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, composantCrudComponent_div_7_div_4_div_3_option_7_Template, 2, 2, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r56.myFormGroup.get(form_elem_r53.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r53.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", form_elem_r53.disabled == 1 ? "" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", form_elem_r53.paramValue);
} }
function composantCrudComponent_div_7_div_4_div_4_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r53.label);
} }
function composantCrudComponent_div_7_div_4_div_4_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topping_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", topping_r78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](topping_r78);
} }
function composantCrudComponent_div_7_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, composantCrudComponent_div_7_div_4_div_4_label_1_Template, 3, 1, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function composantCrudComponent_div_7_div_4_div_4_Template_mat_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r80); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r79.onSelectMultipleChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, composantCrudComponent_div_7_div_4_div_4_mat_option_3_Template, 2, 2, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r57.myFormGroup.get(form_elem_r53.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r53.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", form_elem_r53.paramValue);
} }
function composantCrudComponent_div_7_div_4_div_5_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r53.label);
} }
function composantCrudComponent_div_7_div_4_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function composantCrudComponent_div_7_div_4_div_5_div_2_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r86.onCheckChangesNext($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const block_r85 = ctx.$implicit;
    const form_elem_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", block_r85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r53.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", block_r85, " ");
} }
function composantCrudComponent_div_7_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, composantCrudComponent_div_7_div_4_div_5_label_1_Template, 3, 1, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, composantCrudComponent_div_7_div_4_div_5_div_2_Template, 3, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r58.myFormGroup.get(form_elem_r53.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", form_elem_r53.paramValue);
} }
function composantCrudComponent_div_7_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, composantCrudComponent_div_7_div_4_div_1_Template, 6, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, composantCrudComponent_div_7_div_4_div_2_Template, 4, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, composantCrudComponent_div_7_div_4_div_3_Template, 8, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, composantCrudComponent_div_7_div_4_div_4_Template, 4, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, composantCrudComponent_div_7_div_4_div_5_Template, 3, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r53.type == "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r53.type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r53.type == "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r53.type == "selectMultiple");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r53.type == "checkbox");
} }
function composantCrudComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, composantCrudComponent_div_7_div_2_Template, 7, 6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, composantCrudComponent_div_7_div_4_Template, 6, 5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.formInputLoop1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.formInputLoop2);
} }
function composantCrudComponent_div_8_div_1_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r90.label);
} }
function composantCrudComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "BR");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, composantCrudComponent_div_8_div_1_label_2_Template, 3, 1, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function composantCrudComponent_div_8_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r95.download(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r91.myFormGroup.get(form_elem_r90.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r90.label);
} }
function composantCrudComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "textarea", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r90.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r90.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", form_elem_r90.disabled);
} }
function composantCrudComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, composantCrudComponent_div_8_div_1_Template, 8, 2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, composantCrudComponent_div_8_div_2_Template, 6, 3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r90 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r90.type == "uploadFile" && ctx_r1.myFormGroup.get(form_elem_r90.label)["value"] != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r90.type == "textarea");
} }
class composantCrudComponent {
    constructor(matDialog, //private localStorageService: LocalstorageService, 
    mainService, crudService, formBuilder, httpClient) {
        this.matDialog = matDialog;
        this.mainService = mainService;
        this.crudService = crudService;
        this.formBuilder = formBuilder;
        this.httpClient = httpClient;
        this.listData = { displayedColumns: [], data: [], actionColumns: [], actionButton: {}, type: 'df' };
        this.displayedColumns = [];
        this.selectedDate = new Date();
        this.FilterColumnType = false;
        this.group = {};
        this.formInput = [];
        this.formInputLoop = [];
        this.formInputLoop1 = [];
        this.formInputLoop2 = [];
        this.uploadFilePath = null;
        this.UploadDirectory = "";
        this.submitLabel = "validate";
        this.csvFolder = []; //| null = null;
        this.multipleSelectedValue = [];
        this.startDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date());
        this.endDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date());
        this.spinerSelectedField = false;
        this.spinerSelectedFieldpopUp = false;
        //cronstrue1=""
        this.dataForm = [];
        //addFilterButton:Boolean=false;
        this.data = {};
        this.countChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataConf = {};
        this.form = {};
        this.myFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](this.group);
    }
    getJson() {
        // let paramString1='colName=Ref_Request&colValue='+this.echangeData['Ref_Request']+'&sheet=userRequestValidation'
        console.log(' json  getJson ');
        return this.httpClient.get("assets/dbcomposantForm.json").toPromise();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataConf = yield this.getJson();
            this.form = this.dataConf['form'];
            this.formTitle = this.dataConf['TitleFormObject'];
            console.log(this.formTitle, ' this.dataConf  ', this.dataConf);
            this.listData.displayedColumns = []; //this.displayedColumns;
            this.listData.actionColumns = [];
            console.log(' this.echangeData  ', this.echangeData);
            if (this.echangeData != undefined) {
                let o = {};
                let sheet = 'composant';
                this.mainService.getDataByCols(sheet, o).subscribe(data => {
                    this.listData.data = data;
                });
            }
            else {
                this.listData.data = [];
                this.echangeData = [];
            }
            this.group = {};
            this.formInput = [];
            this.formInputLoop = [];
            this.myFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](this.group);
            let myDate = new Date();
            let today = myDate.getFullYear() + '-' + (('0' + (myDate.getMonth() + 1)).slice(-2)) + '-' + ('0' + myDate.getDate()).slice(-2);
            if (this.echangeData.length > 0) {
                this.data = { action: 'action', id: 5, type: 'type', currentModule: 'module321', droppedModules: [],
                    form: this.form };
            }
            else {
                this.data = { action: 'action', id: 5, type: 'type', currentModule: 'module321', droppedModules: [],
                    form: this.form };
            }
            let dataSize = Object.keys(this.data).length;
            this.formInput = [];
            //this.submitLabel='Close'
            if (!(typeof this.data['form'] === 'undefined')) {
                const dataFormClone = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.data['form']);
                this.dataForm = dataFormClone;
                this.formInput = Object.values(dataFormClone);
                for (var i in this.formInput) {
                    if (this.formInput[i]['hide'] != 1) {
                        this.formInputLoop.push(this.formInput[i]);
                        this.group[this.formInput[i]['label']] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '' });
                        if (this.formInput[i]['required'] == 1) {
                            this.myFormGroup.controls[this.formInput[i]['label']].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
                        }
                        if (this.echangeData[this.formInput[i]['label'].replace(/ /g, '_')] != undefined) {
                            this.myFormGroup.controls[this.formInput[i]['label']].setValue(this.echangeData[this.formInput[i]['label'].replace(/ /g, '_')]);
                        }
                        else {
                            this.myFormGroup.controls[this.formInput[i]['label']].setValue('');
                        }
                        if (this.formInput[i]['type'] == 'startDate') {
                            this.startDate.setValue(this.formInput[i]['value']);
                            console.log(i, ' *startDate ***  ', this.myFormGroup.controls[this.formInput[i]['label']]);
                        }
                        if (this.formInput[i]['type'] == 'endDate') {
                            this.endDate.setValue(this.formInput[i]['value']);
                            //console.log( i, ' *startDate ***  ', this.myFormGroup.controls[this.formInput[i]['label']] ) 
                        }
                    }
                }
                //  prepare data for two column 
                let keys = Object.keys(this.formInputLoop);
                for (var el = 0; el < this.formInputLoop.length; el++) {
                    if (el % 2 == 0)
                        this.formInputLoop1.push(this.formInputLoop[el]);
                    else
                        this.formInputLoop2.push(this.formInputLoop[el]);
                }
            }
            else
                this.formInput = [];
        });
    }
    ;
    onSelectMultipleChange(event) {
        this.multipleSelectedValue = event;
    }
    loadSelectionList(form_elem) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            {
                console.log(' loadSelectionList ', JSON.stringify(form_elem));
                const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
                //The user can't close the dialog by clicking outside its body
                //dialogConfig.disableClose = true;
                console.log(' openFolderServerModal  ');
                dialogConfig.position = { top: '0%', left: '20%' };
                dialogConfig.id = "modal-component";
                dialogConfig.height = "800px";
                dialogConfig.width = "800px";
                dialogConfig.autoFocus = false;
                dialogConfig.height = '100%';
                this.spinerSelectedFieldpopUp = true;
                let val = yield this.getDataForSelect();
                this.spinerSelectedFieldpopUp = false;
                console.log('  getAllUsers ', JSON.stringify(val));
                dialogConfig.data = val;
                const modalDialog = this.matDialog.open(src_app_components_mat_table_list_mat_table_list_component__WEBPACK_IMPORTED_MODULE_6__["MatTableListComponent"], dialogConfig); // load the help component
                modalDialog.afterClosed().subscribe(result => {
                    // if(result.event == 'Add'){
                    console.log(' close dialog ', JSON.parse(result.data)['data'][0]['Ref']);
                    this.myFormGroup.controls[form_elem['label']].setValue(JSON.parse(result.data)['data'][0]['Ref']);
                });
            }
        });
    }
    getDataForSelect() {
        let sheet = 'user';
        //this.usuariosService.updateUserRequestValidation(this.crudData).subscribe(resultat => {
        return this.mainService.getAllRowsSheet(sheet).toPromise();
        //return this.crudService.updateJsonDataToSheet(data,'dataObject').toPromise()
    }
    SelectOnChange(event) {
        console.log(' SelectOnChange   ', event.value, ' SelectOnChange ');
        this.FilterColumnType = event.value.toUpperCase().includes('DATE') || event.value.toUpperCase().includes('DAY');
    }
    pickerEvent(event) {
        this.selectedDate = event.value;
        this.myFormGroup.controls['Filter Value'].setValue(this.selectedDate.getFullYear() + '-' + (this.selectedDate.getMonth() + 1) + '-' + ('0' + this.selectedDate.getDate()).slice(-2));
    }
    onFileChanged(event) {
        this.uploadFilePath = event.target.files[0]; // get the file name     
    }
    patternValidator() {
        return (control) => {
            if (!control.value) {
                console.log(' patternValidator  !!!! control.value  NULLLLL ', control.value);
                return null;
            }
            if (!control.value.toUpperCase().includes('SELECT') ||
                !control.value.toUpperCase().includes('FROM')) {
                console.log('patternValidator control.value.dont includes("select or from ")  ');
                control.setErrors({ invalidQuery: true });
                return { invalidQuery: true };
            }
            else {
                return null;
            }
        };
    }
    download() {
        let vfileToBeName = this.echangeData['Attached_File'];
        const source = this.echangeData['base64'];
        const link = document.createElement("a");
        link.href = source;
        link.download = `${vfileToBeName}`;
        link.click();
    }
    uploadFile(file) {
        const uploadData = new FormData();
        let filename = file;
        uploadData.append('filename', filename);
        uploadData.append('folder', this.UploadDirectory);
        uploadData.append('user', localStorage.getItem('user'));
        console.log(' uploadFile ', uploadData);
    }
    onFolderChanged(event) {
        console.log(' onFolderChanged ', event.target.files);
        var filesSelected = event.target.files;
        let output = document.getElementById("listing");
        var tmpArr = [];
        for (let item of filesSelected) {
            tmpArr.push(item.webkitRelativePath);
        }
        this.csvFolder = tmpArr; // get the file name 
    }
    // help modal
    showHelp(help) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.id = "modal-help";
        dialogConfig.height = "450px";
        dialogConfig.width = "800px";
        dialogConfig.data = help; // pass help variable to the helpcomponent
        const modalDialog = this.matDialog.open(src_app_help_help_component__WEBPACK_IMPORTED_MODULE_5__["HelpComponent"], dialogConfig); // load the help component
    }
    isSelected(data) {
        console.log(' isSelected  ', data);
    }
    // onchange checkbox function for "next"
    onCheckChangesNext(event) {
        // get the form array "next" and add data in every changes
        // const formArrayNext: FormArray = this.myFormGroup.get('next') as FormArray;
        this.formInput.map(elem => {
            if (this.dataForm[elem['label'].replace(/ /g, '_')]['type'] == 'checkbox') {
                let ar = this.dataForm[elem['label'].replace(/ /g, '_')]['valueSelected'];
                console.log(' el ', event.target.value, '   at  ', ar.indexOf(event.target.value));
                if (ar.indexOf(event.target.value) >= 0 && !event.target.checked) {
                    console.log(' remove ', event.target.value, '   at  ', ar.indexOf(event.target.value));
                    ar.splice(ar.indexOf(event.target.value), 1);
                }
                if (ar.indexOf(event.target.value) == -1 && event.target.checked)
                    ar.push(event.target.value);
                this.dataForm[elem['label'].replace(/ /g, '_')]['valueSelected'] = ar;
                console.log(elem['label'], 'value  ', this.dataForm[elem['label'].replace(/ /g, '_')]['valueSelected']);
            }
        });
    }
    cancel() {
        this.countChanged.emit(this.dataForm);
    }
    buildOjectFromDataForm(obj) {
        var data = {};
        if (Object.keys(this.echangeData).length > 1) {
            data["id"] = this.echangeData["id"];
        }
        for (var el in obj) {
            console.log(el, obj[el]['value']);
            data[el] = obj[el]['value'];
        }
        return data;
    }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // check validation form  
            for (var i in this.formInputLoop) {
                if (!this.myFormGroup.controls[this.formInputLoop[i]['label']].valid) {
                    alert(this.myFormGroup.controls[this.formInputLoop[i]['label']] + '  Form Submitted Error : ' + '    ' + this.formInputLoop[i]["label"]);
                    return 0;
                }
            }
            let filename = this.csv; // get the file name 
            this.formInputLoop.map(elem => {
                if (this.dataForm[elem['label'].replace(/ /g, '_')]['type'] == 'text' ||
                    this.dataForm[elem['label'].replace(/ /g, '_')]['type'] == 'textarea') {
                    let tmpText = this.myFormGroup.get(elem['label']).value; //.replace(/'/g,'~').replace(/"/g,'~')
                    this.dataForm[elem['label'].replace(/ /g, '_')].value = tmpText;
                }
                else if (this.dataForm[elem['label'].replace(/ /g, '_')]['type'] != 'checkbox' &&
                    this.dataForm[elem['label'].replace(/ /g, '_')]['type'] != 'selectMultiple' &&
                    this.dataForm[elem['label'].replace(/ /g, '_')]['type'] != 'savefile' &&
                    !elem['label'].includes('Repertoire')) {
                    this.dataForm[elem['label'].replace(/ /g, '_')].value = this.myFormGroup.get(elem['label']).value;
                }
                if (elem['label'].includes('fichier1')) {
                    this.dataForm[elem['label'].replace(/ /g, '_')].value = this.filename; //csv['name']
                }
                if (elem['label'].includes('Repertoire')) {
                    this.dataForm[elem['label'].replace(/ /g, '_')].value = this.csvFolder;
                    //console.log(' fichier   ffffffffff  ',JSON.stringify(this.myFormGroup.get(elem['label'])))
                }
                if (this.dataForm[elem['label'].replace(/ /g, '_')]['type'] == 'selectMultiple') {
                    this.dataForm[elem['label'].replace(/ /g, '_')].value = this.multipleSelectedValue;
                }
            });
            if (this.echangeData.length == 0) {
                let data = this.buildOjectFromDataForm(this.dataForm);
                console.log('  this.dataForm length 0000000', JSON.stringify(data));
                /*await this.crudService.insertJsonDataToSheet(data,'dataObject').subscribe(data => {
                 
                 console.log(' retour 0000000',data);
                }
                ) */
                this.spinerSelectedField = true;
                let responseData = yield this.insertJsonDataToSheet(data);
                this.spinerSelectedField = false;
                alert('   les données ont été sauvegarder');
                console.log(' before   getAll test ', responseData);
                this.countChanged.emit(this.dataForm);
                return 0;
            }
            else {
                let data = this.buildOjectFromDataForm(this.dataForm);
                console.log(JSON.stringify(this.echangeData), '  this.dataForm length 0000000', JSON.stringify(data));
                /*await this.crudService.insertJsonDataToSheet(data,'dataObject').subscribe(data => {
                 
                 console.log(' retour 0000000',data);
                }
                ) */
                this.spinerSelectedField = true;
                let responseData = yield this.updateJsonDataToSheet(data);
                this.spinerSelectedField = false;
                alert('   les données ont été sauvegarder');
                console.log(' before   getAll test ', responseData);
                this.countChanged.emit(this.dataForm);
                return 0;
            }
        });
    }
    insertJsonDataToSheet(data) {
        // let paramString1='colName=Ref_Request&colValue='+this.echangeData['Ref_Request']+'&sheet=userRequestValidation'
        return this.crudService.insertJsonDataToSheet(data, 'dataObject').toPromise();
    }
    updateJsonDataToSheet(data) {
        // let paramString1='colName=Ref_Request&colValue='+this.echangeData['Ref_Request']+'&sheet=userRequestValidation'
        return this.crudService.updateJsonDataToSheet(data, 'dataObject').toPromise();
    }
    ngAfterViewInit() {
        /* for (var i in this.formInputLoop) {
               
           console.log(this.myFormGroup.controls[this.formInputLoop[i]['label']], 'required ',this.myFormGroup.get(this.formInputLoop[i]['label'])['error'])
            
     
           }*/
        if (localStorage.getItem('data') != null) {
            //this.updateProject()
        }
    }
    onReset() {
        this.countChanged.emit(null);
        return 0;
    }
}
composantCrudComponent.ɵfac = function composantCrudComponent_Factory(t) { return new (t || composantCrudComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_7__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_8__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"])); };
composantCrudComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: composantCrudComponent, selectors: [["app-composant-crud"]], inputs: { echangeData: "echangeData" }, outputs: { countChanged: "countChanged" }, decls: 17, vars: 3, consts: [[2, "font-size", "smaller"], [3, "formGroup", "ngSubmit"], ["class", "col", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "text-center", "col-12"], ["type", "submit", 1, "btn", "btn-primary", "mr-1"], ["type", "reset", 1, "btn", "btn-secondary", 3, "click"], [1, "col"], [4, "ngIf"], ["src", "assets/info.png", 1, "info", 3, "click"], ["type", "password", 3, "formControlName"], ["style", "width:30%", "for", "test", 4, "ngIf"], ["style", "width:65%;background-color: transparent; border:none;outline: none;", "id", "test", "type", "text", 3, "readonly", "formControlName", 4, "ngIf"], ["for", "test", 2, "width", "30%"], ["id", "test", "type", "text", 2, "width", "65%", "background-color", "transparent", "border", "none", "outline", "none", 3, "readonly", "formControlName"], ["id", "test", 2, "width", "68%", 3, "formControlName", "change"], ["value", "", "disabled", "", "selected", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], ["multiple", "", 1, "form-select", 3, "formControlName", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "checkbox", 3, "value", "formControlName", "change"], ["class", "wrapper", "style", "height: 20px; align-self:center;", 4, "ngIf"], ["style", "width:30%", 4, "ngIf"], ["type", "button", "matTooltip", "select file", 1, "btn", "btn-default", 3, "click"], [2, "margin-top", "10%"], ["style", "background-color: transparent; border:none;outline: none;", "type", "text", 3, "readonly", "formControlName", 4, "ngIf"], ["style", "color: red;", 4, "ngIf"], [1, "wrapper", 2, "height", "20px", "align-self", "center"], ["mode", "indeterminate", "diameter", "40", 1, "inner", 2, "left", "50%"], [2, "width", "30%"], ["type", "text", 2, "background-color", "transparent", "border", "none", "outline", "none", 3, "readonly", "formControlName"], [2, "color", "red"], ["class", "col-6", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "col-6"], ["id", "test", "type", "text", 2, "background-color", "transparent", "border", "none", "outline", "none", 3, "formControlName"], ["matTooltip", "Download File", 1, "btn", 3, "click"], [2, "margin-top", "15%"], [1, "row"], ["rows", "3", "cols", "35", "spellcheck", "false", 1, "form-control", 2, "font-size", "10px", 3, "readonly", "formControlName"]], template: function composantCrudComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function composantCrudComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Request Details Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "BR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "BR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, composantCrudComponent_div_7_Template, 5, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, composantCrudComponent_div_8_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "BR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "BR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function composantCrudComponent_Template_button_click_15_listener() { return ctx.onReset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formInputLoop.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.formInputLoop);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinner"]], styles: ["fieldset[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    margin-left: 20vw;\r\n    border: 0px none transparent;\r\n    background: none;\r\n  }\r\n \r\n  select[_ngcontent-%COMP%] {\r\n    \r\n    max-height: 30px;\r\n    \r\n    margin-bottom: .5em;\r\n    border-radius: 4px;\r\n  }\r\n \r\n  .dropbtn[_ngcontent-%COMP%]  {\r\n    display: inline-block;\r\n    margin-bottom: -3px;\r\n    margin-right: 4px;\r\n  }\r\n \r\n  input[_ngcontent-%COMP%] {\r\n    \r\n    max-height: 30px;\r\n    \r\n    margin-bottom: .5em;\r\n    border-radius: 4px;\r\n    \r\n    \r\n  }\r\n \r\n  input1[_ngcontent-%COMP%] {\r\n    \r\n    max-height: 30px;\r\n    \r\n    margin-bottom: .5em;\r\n    border-radius: 4px;\r\n    \r\n    \r\n    border-radius: 4px;\r\n  }\r\n \r\n  legend[_ngcontent-%COMP%] {\r\n    width: 70vw;\r\n    text-align:center;\r\n    margin: 0 auto;\r\n  }\r\n \r\n  \r\n \r\n  \r\n \r\n  .row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n  }\r\n \r\n  .input-field[_ngcontent-%COMP%] {\r\n    margin-left: 1em;\r\n    padding: .5em;\r\n    margin-bottom: .5em;\r\n  }\r\n \r\n  .config-field[_ngcontent-%COMP%] {\r\n    box-shadow: 2px 2px 5px 2px;\r\n    border: 2px #d9d9d9;\r\n    border-radius: 5px;\r\n    \r\n    margin: 0 auto;\r\n    padding: 15px 20px 20px;\r\n    display: block;\r\n    text-align: left;\r\n    \r\n   \r\n     \r\n    \r\n    background-color: #f5f7f7;\r\n}\r\n \r\n  .config-field1[_ngcontent-%COMP%] {\r\n    box-shadow: 2px 2px 5px 2px;\r\n    border: 2px #d9d9d9;\r\n    border-radius: 5px;\r\n    \r\n    margin: 0 auto;\r\n    \r\n    display: block;\r\n    text-align: center;\r\n    \r\n}\r\n \r\n  \r\n \r\n  .container[_ngcontent-%COMP%] {\r\n    display: block;\r\n    position: relative;\r\n    padding-left: 35px;\r\n    cursor: pointer;\r\n    font-size: 17px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    user-select: none;\r\n    background-color: transparent;\r\n    border-radius: 5px;\r\n    border: 2px solid #dceff0;\r\n    padding: 5px; \r\n}\r\n \r\n  \r\n \r\n  .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 0;\r\n    width: 0;\r\n}\r\n \r\n  \r\n \r\n  .checkmark[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 30px;\r\n    background-color: transparent;\r\n    border-right: 2px solid #5f7d8b;\r\n}\r\n \r\n  \r\n \r\n  .container[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .checkmark[_ngcontent-%COMP%] {\r\n    background-color: #ccc;\r\n}\r\n \r\n  \r\n \r\n  .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\r\n    background-color: #ccc;\r\n    \r\n}\r\n \r\n  \r\n \r\n  .checkmark[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n}\r\n \r\n  \r\n \r\n  .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\r\n    display: block;\r\n}\r\n \r\n  \r\n \r\n  .container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\r\n    left: calc(50% - 4px);\r\n    top: 50%;\r\n    width: 7px;\r\n    height: 10px;\r\n    border: solid white;\r\n    border-width: 0px 3px 2px 0;\r\n    transform: rotate(45deg) translate(-50%, -50%);\r\n}\r\n \r\n  .input-file[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n}\r\n \r\n  \r\n \r\n  .btn-config[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background-color: #f27839;\r\n    border: 0;\r\n    border-radius: 8px;\r\n   \r\n   \r\n    color: #fff;\r\n    font-weight: 500;\r\n    padding: 10px;\r\n}\r\n \r\n  .info[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n    height: 20px;\r\n    cursor: pointer;\r\n    padding: 10px;\r\n\r\n}\r\n \r\n  .col[_ngcontent-%COMP%]{display:flex;}\r\n \r\n  .col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{flex:1}\r\n \r\n  .invisible[_ngcontent-%COMP%]{\r\n    display: block;\r\n    visibility: hidden;\r\n    height: 0;\r\n    width: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY29tcG9zYW50L2NvbXBvc2FudC1jcnVkL2NvbXBvc2FudC1jcnVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25COztFQUVGO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEI7d0JBQ29CO0VBQ3RCOztFQUNBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjs7RUFFQTs7Ozt1QkFJcUI7O0VBQ3RCLEtBQUs7O0VBRU47SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOztFQUVGO0lBQ0ksMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7O0tBRWY7K0JBQzBCO0lBQzNCLDZCQUE2QjtJQUM3Qix5QkFBeUI7QUFDN0I7O0VBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCOytCQUMyQjtBQUMvQjs7RUFDQSxrQkFBa0I7O0VBQ2xCO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsc0JBQXNCO0lBRXRCLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztFQUNBLHdDQUF3Qzs7RUFDeEM7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGVBQWU7SUFDZixTQUFTO0lBQ1QsUUFBUTtBQUNaOztFQUNBLDZCQUE2Qjs7RUFDN0I7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztJQUNYLDZCQUE2QjtJQUM3QiwrQkFBK0I7QUFDbkM7O0VBQ0EsK0NBQStDOztFQUMvQztJQUNJLHNCQUFzQjtBQUMxQjs7RUFDQSx3REFBd0Q7O0VBQ3hEO0lBQ0ksc0JBQXNCO0lBQ3RCLDhCQUE4QjtBQUNsQzs7RUFDQSw2REFBNkQ7O0VBQzdEO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztFQUNBLG9DQUFvQzs7RUFDcEM7SUFDSSxjQUFjO0FBQ2xCOztFQUNBLGtDQUFrQzs7RUFDbEM7SUFDSSxxQkFBcUI7SUFDckIsUUFBUTtJQUNSLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQiw4Q0FBOEM7QUFDbEQ7O0VBQ0E7SUFDSSxlQUFlO0FBQ25COztFQUNBOztFQUVFOztFQUNGO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1Qsa0JBQWtCO0dBQ25CO0tBQ0U7R0FDRjtLQUNFO0lBQ0QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztFQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTs7QUFFakI7O0VBRUEsS0FBSyxZQUFZLENBQUM7O0VBQ2xCLFNBQVMsTUFBTTs7RUFFZjtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbXBvc2FudC9jb21wb3NhbnQtY3J1ZC9jb21wb3NhbnQtY3J1ZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZmllbGRzZXQge1xyXG4gICAgLyp3aWR0aDogNTB2dzsqL1xyXG4gICAgLyp0ZXh0LWFsaWduOiByaWdodDsqL1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwdnc7XHJcbiAgICBib3JkZXI6IDBweCBub25lIHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICB9XHJcbiBcclxuICBzZWxlY3Qge1xyXG4gICAgLyp3aWR0aDogNjAlOyovXHJcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gICAgLyptYXgtd2lkdGg6IDUwMHB4OyovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuXHJcbiAgLmRyb3BidG4gIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IC0zcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICB9XHJcblxyXG5pbnB1dCB7XHJcbiAgICAvKndpZHRoOiA2MCU7Ki9cclxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICAvKm1heC13aWR0aDogNTAwcHg7Ki9cclxuICAgIG1hcmdpbi1ib3R0b206IC41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAvKm1heC13aWR0aDogMTAwcHg7Ki9cclxuICAgIC8qbWFyZ2luLWJvdHRvbTogLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDsqL1xyXG4gIH1cclxuICBpbnB1dDEge1xyXG4gICAgLyp3aWR0aDogNjAlOyovXHJcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gICAgLyptYXgtd2lkdGg6IDUwMHB4OyovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgLyptYXgtd2lkdGg6IDEwMHB4OyovXHJcbiAgICAvKm1hcmdpbi1ib3R0b206IC41ZW07Ki9cclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgXHJcbiAgbGVnZW5kIHtcclxuICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIC8qbGFiZWwge1xyXG4gICBcclxuICAgIG1hcmdpbi1yaWdodDogMWVtOyBcclxuICAgIC8qd2lkdGg6IDMwJTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0OyovXHJcbiAvKiB9Ki9cclxuXHJcbi5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIH1cclxuICBcclxuICAuaW5wdXQtZmllbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIHBhZGRpbmc6IC41ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xyXG4gIH1cclxuXHJcbi5jb25maWctZmllbGQge1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4O1xyXG4gICAgYm9yZGVyOiAycHggI2Q5ZDlkOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8qbWluLWhlaWdodDogNTBweDsqL1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHggMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIC8qaGVpZ2h0OiAxMDAlOyovXHJcbiAgIFxyXG4gICAgIC8qYmFja2dyb3VuZC1jb2xvcjogI2QwZDBkMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4YjgyYjg7Ki9cclxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogI2RjZWZmMDsqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjdmNztcclxufVxyXG4uY29uZmlnLWZpZWxkMSB7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHg7XHJcbiAgICBib3JkZXI6IDJweCAjZDlkOWQ5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLyptaW4taGVpZ2h0OiA1cHg7Ki9cclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgLypwYWRkaW5nOiA1cHggMjBweCAyMHB4OyovXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qaGVpZ2h0OiAxMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDBkMGQwOyovXHJcbn1cclxuLyogVGhlIGNvbnRhaW5lciAqL1xyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2RjZWZmMDtcclxuICAgIHBhZGRpbmc6IDVweDsgXHJcbn1cclxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cclxuLmNvbnRhaW5lciBpbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbn1cclxuLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXHJcbi5jaGVja21hcmsge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjNWY3ZDhiO1xyXG59XHJcbi8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xyXG4uY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG59XHJcbi8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xyXG4uY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICM1ZjdkOGI7ICovXHJcbn1cclxuLyogQ3JlYXRlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cclxuLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4vKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXHJcbi5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cclxuLmNvbnRhaW5lciAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gNHB4KTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgd2lkdGg6IDdweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJvcmRlcjogc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweCAzcHggMnB4IDA7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcbi5pbnB1dC1maWxlIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4vKi5uZy12YWxpZCBsYWJlbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSovXHJcbi5idG4tY29uZmlnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyNzgzOTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgLyogd2lkdGg6IDEwMCU7XHJcbiAgICAqL1xyXG4gICAvKiBiYWNrZ3JvdW5kOiAjZjI3ODM5O1xyXG4gICAgKi9cclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmluZm8ge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxufVxyXG5cclxuLmNvbHtkaXNwbGF5OmZsZXg7fVxyXG4uY29sIGRpdntmbGV4OjF9XHJcblxyXG4uaW52aXNpYmxle1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](composantCrudComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-composant-crud',
                templateUrl: './composant-crud.component.html',
                styleUrls: ['./composant-crud.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_7__["MainService"] }, { type: src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_8__["CrudService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] }]; }, { echangeData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], countChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/views/composant/composant-list/composant-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/composant/composant-list/composant-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: composantListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composantListComponent", function() { return composantListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_components_navbar_user_navbar_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/navbar-user/navbar-user.component */ "./src/app/components/navbar-user/navbar-user.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _navidation_sidenav_list_admin_sidenav_list_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../navidation/sidenav-list-admin/sidenav-list-admin.component */ "./src/app/navidation/sidenav-list-admin/sidenav-list-admin.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _components_dynamic_table_list_dynamic_table_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/dynamic-table-list/dynamic-table-list.component */ "./src/app/components/dynamic-table-list/dynamic-table-list.component.ts");
/* harmony import */ var _composant_crud_composant_crud_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../composant-crud/composant-crud.component */ "./src/app/views/composant/composant-crud/composant-crud.component.ts");
















function composantListComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-progress-spinner", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function composantListComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-dynamic-table-list", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("countChanged", function composantListComponent_div_11_Template_app_dynamic_table_list_countChanged_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.actionHandler1($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("echangeData", ctx_r2.echangeData);
} }
function composantListComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-composant-crud", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("countChanged", function composantListComponent_div_13_Template_app_composant_crud_countChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.reloadData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("echangeData", ctx_r3.crudData);
} }
function composantListComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "BR");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "BR");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No Data To Display");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class composantListComponent {
    constructor(httpClient, mainService, crudService, activeRoute) {
        this.httpClient = httpClient;
        this.mainService = mainService;
        this.crudService = crudService;
        this.activeRoute = activeRoute;
        //isSearchShow: boolean;
        this.echangeData = {
            displayedColumns: [], data: [],
            actionColumns: [],
            actionButton: {},
            type: 'df'
        };
        this.displayedColumns = [];
        this.action = 'list';
        this.spinerSelectedField = false;
        this.dataConf = {};
        this.title = "";
        this.getAllObjects = () => {
            let o = {};
            //{'User':localStorage.getItem('user')}
            let sheet = 'composant';
            if (this.activeRoute.snapshot.params.req != undefined) {
                let req = this.activeRoute.snapshot.params.req;
                o['params_id'] = req;
            }
            this.mainService.getDataByCols(sheet, o).subscribe(data => {
                this.action = 'list';
                this.echangeData.data = data;
                if (this.activeRoute.snapshot.params.req != undefined) {
                    let event = {};
                    event['action'] = 'details';
                    event['data'] = []; //.push(ddata[0])
                    event['data'].push(data[0]);
                    this.actionHandler1(event);
                }
            });
        };
    }
    getJson() {
        console.log(' json  getJson ');
        return this.httpClient.get("assets/dbcomposantForm.json").toPromise();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('route ', this.activeRoute.snapshot.routeConfig.path);
            localStorage.setItem('route', this.activeRoute.snapshot.routeConfig.path);
            this.dataConf = yield this.getJson();
            this.title = this.dataConf['titleList'];
            this.echangeData.actionColumns = this.dataConf['actionColumns'];
            this.echangeData.displayedColumns = this.dataConf['displayedColumns'];
            this.getAllObjects();
            console.log(' getAllDataObjec before brfore  ', this.activeRoute.snapshot.params.req);
        });
    }
    deleteRowSheet(id, sheet) {
        return this.crudService.deleteRowSheet(id, sheet).toPromise();
    }
    actionHandler1(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.action = event['action'];
            let data = event['data'][0];
            console.log('action ', this.action, ' actionHandler1 event ', event);
            if (this.action == 'delete') {
                if (window.confirm('Are sure you want to delete this row ?')) {
                    this.spinerSelectedField = true;
                    const resp = yield this.deleteRowSheet(data['composant_id'], 'composant');
                    this.ngOnInit();
                    this.spinerSelectedField = false;
                }
            }
            else {
                this.crudData = data;
                console.log(' actionHandler1  crud data ', this.crudData);
            }
        });
    }
    reloadData(event) {
        this.childC.ngAfterViewInit();
        this.action = 'list';
        console.log(' reloadData', JSON.stringify(event));
        this.ngOnInit();
    }
}
composantListComponent.ɵfac = function composantListComponent_Factory(t) { return new (t || composantListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
composantListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: composantListComponent, selectors: [["app-composant-list"]], viewQuery: function composantListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](src_app_components_navbar_user_navbar_user_component__WEBPACK_IMPORTED_MODULE_2__["NavbarUserComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.childC = _t.first);
    } }, decls: 15, vars: 4, consts: [["mode", "side", 3, "sidenavToggle"], ["mode", "side", "opened", "true"], ["sidenav", ""], ["mode", "side", 3, "sidenavClose"], [2, "overflow", "scroll", "height", "70%"], [1, "container"], ["class", "wrapper", "style", "padding-top: 200px; height: 20px; align-self: center", 4, "ngIf"], ["class", "row", 4, "ngIf"], [4, "ngIf"], ["style", "text-align: center", 4, "ngIf"], [1, "wrapper", 2, "padding-top", "200px", "height", "20px", "align-self", "center"], ["mode", "indeterminate", "diameter", "40", 1, "inner", 2, "left", "50%"], [1, "row"], [3, "echangeData", "countChanged"], [2, "text-align", "center"]], template: function composantListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-navbar-user", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sidenavToggle", function composantListComponent_Template_app_navbar_user_sidenavToggle_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "app-sidenav-list-admin", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sidenavClose", function composantListComponent_Template_app_sidenav_list_admin_sidenavClose_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "main", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, composantListComponent_div_10_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, composantListComponent_div_11_Template, 5, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "BR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, composantListComponent_div_13_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, composantListComponent_div_14_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.spinerSelectedField);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.echangeData.data.length > 0 && ctx.action === "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.action == "add" || ctx.action == "details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.action == "");
    } }, directives: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"], src_app_components_navbar_user_navbar_user_component__WEBPACK_IMPORTED_MODULE_2__["NavbarUserComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenav"], _navidation_sidenav_list_admin_sidenav_list_admin_component__WEBPACK_IMPORTED_MODULE_9__["SidenavListAdminComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinner"], _components_dynamic_table_list_dynamic_table_list_component__WEBPACK_IMPORTED_MODULE_12__["DynamicTableListComponent"], _composant_crud_composant_crud_component__WEBPACK_IMPORTED_MODULE_13__["composantCrudComponent"]], styles: ["mat-sidenav-container[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    height: 100%;\r\n    min-height: 100%;\r\n    width: 100%;\r\n    min-width: 100%;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY29tcG9zYW50L2NvbXBvc2FudC1saXN0L2NvbXBvc2FudC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZUFBZTtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbXBvc2FudC9jb21wb3NhbnQtbGlzdC9jb21wb3NhbnQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](composantListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-composant-list',
                templateUrl: './composant-list.component.html',
                styleUrls: ['./composant-list.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"] }, { type: src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }]; }, { childC: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [src_app_components_navbar_user_navbar_user_component__WEBPACK_IMPORTED_MODULE_2__["NavbarUserComponent"], { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/views/compteur/compteur-crud/compteur-crud.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/compteur/compteur-crud/compteur-crud.component.ts ***!
  \*************************************************************************/
/*! exports provided: compteurCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compteurCrudComponent", function() { return compteurCrudComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var bs_custom_file_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bs-custom-file-input */ "./node_modules/bs-custom-file-input/dist/bs-custom-file-input.js");
/* harmony import */ var bs_custom_file_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bs_custom_file_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_help_help_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var src_app_components_mat_table_list_mat_table_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/mat-table-list/mat-table-list.component */ "./src/app/components/mat-table-list/mat-table-list.component.ts");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
























function compteurCrudComponent_div_7_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-datepicker-toggle", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mat-datepicker", null, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", form_elem_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r16);
} }
function compteurCrudComponent_div_7_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-datepicker-toggle", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mat-datepicker", null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r18)("formControl", ctx_r7.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r18);
} }
function compteurCrudComponent_div_7_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-datepicker-toggle", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mat-datepicker", null, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r19)("min", ctx_r8.startDate.value)("formControl", ctx_r8.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r19);
} }
function compteurCrudComponent_div_7_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function compteurCrudComponent_div_7_div_2_div_5_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r20.showHelp(form_elem_r5.help); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r5.label);
} }
function compteurCrudComponent_div_7_div_2_div_6_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r5.label);
} }
const _c0 = function (a0, a1) { return { "disable": a0, "enable": a1 }; };
function compteurCrudComponent_div_7_div_2_div_6_input_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 24);
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, form_elem_r5.disabled, !form_elem_r5.disabled))("readonly", form_elem_r5.disabled);
} }
function compteurCrudComponent_div_7_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, compteurCrudComponent_div_7_div_2_div_6_label_1_Template, 3, 1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, compteurCrudComponent_div_7_div_2_div_6_input_3_Template, 1, 6, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.myFormGroup.get(form_elem_r5.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.myFormGroup.get(form_elem_r5.label));
} }
function compteurCrudComponent_div_7_div_2_div_7_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r5.label);
} }
function compteurCrudComponent_div_7_div_2_div_7_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", item_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r32, " ");
} }
function compteurCrudComponent_div_7_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, compteurCrudComponent_div_7_div_2_div_7_label_2_Template, 3, 1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function compteurCrudComponent_div_7_div_2_div_7_Template_select_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r33.SelectOnChange($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Select your option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, compteurCrudComponent_div_7_div_2_div_7_option_7_Template, 2, 2, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.myFormGroup.get(form_elem_r5.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", form_elem_r5.disabled == 1 ? "" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", form_elem_r5.paramValue);
} }
function compteurCrudComponent_div_7_div_2_div_8_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r5.label);
} }
function compteurCrudComponent_div_7_div_2_div_8_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topping_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", topping_r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](topping_r39);
} }
function compteurCrudComponent_div_7_div_2_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, compteurCrudComponent_div_7_div_2_div_8_label_1_Template, 3, 1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function compteurCrudComponent_div_7_div_2_div_8_Template_mat_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r40.onSelectMultipleChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, compteurCrudComponent_div_7_div_2_div_8_mat_option_3_Template, 2, 2, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.myFormGroup.get(form_elem_r5.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", form_elem_r5.paramValue);
} }
function compteurCrudComponent_div_7_div_2_div_9_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r5.label);
} }
function compteurCrudComponent_div_7_div_2_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function compteurCrudComponent_div_7_div_2_div_9_div_2_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r47.onCheckChangesNext($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const block_r46 = ctx.$implicit;
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", block_r46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", block_r46, " ");
} }
function compteurCrudComponent_div_7_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, compteurCrudComponent_div_7_div_2_div_9_label_1_Template, 3, 1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, compteurCrudComponent_div_7_div_2_div_9_div_2_Template, 3, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.myFormGroup.get(form_elem_r5.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", form_elem_r5.paramValue);
} }
function compteurCrudComponent_div_7_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function compteurCrudComponent_div_7_div_2_div_10_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r51.onFileChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "iframe", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Choose a File : ", ctx_r14.selectedFileName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Preview File :", ctx_r14.selectedFileName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r14.sanitizer.bypassSecurityTrustResourceUrl(ctx_r14.fileBase64), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
} }
function compteurCrudComponent_div_7_div_2_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-progress-spinner", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function compteurCrudComponent_div_7_div_2_div_11_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r5.label);
} }
function compteurCrudComponent_div_7_div_2_div_11_input_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 48);
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", form_elem_r5.disabled);
} }
function compteurCrudComponent_div_7_div_2_div_11_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", form_elem_r5.label, " is required ");
} }
function compteurCrudComponent_div_7_div_2_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, compteurCrudComponent_div_7_div_2_div_11_div_1_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, compteurCrudComponent_div_7_div_2_div_11_label_3_Template, 3, 1, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function compteurCrudComponent_div_7_div_2_div_11_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62); const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r60.loadSelectionList(form_elem_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "collections");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, compteurCrudComponent_div_7_div_2_div_11_input_8_Template, 1, 2, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, compteurCrudComponent_div_7_div_2_div_11_div_9_Template, 2, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.spinerSelectedFieldpopUp);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.myFormGroup.get(form_elem_r5.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.myFormGroup.get(form_elem_r5.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.myFormGroup.get(form_elem_r5.label).errors == null ? null : ctx_r15.myFormGroup.get(form_elem_r5.label).errors.required);
} }
function compteurCrudComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, compteurCrudComponent_div_7_div_2_div_2_Template, 6, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, compteurCrudComponent_div_7_div_2_div_3_Template, 6, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, compteurCrudComponent_div_7_div_2_div_4_Template, 6, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, compteurCrudComponent_div_7_div_2_div_5_Template, 6, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, compteurCrudComponent_div_7_div_2_div_6_Template, 4, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, compteurCrudComponent_div_7_div_2_div_7_Template, 8, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, compteurCrudComponent_div_7_div_2_div_8_Template, 4, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, compteurCrudComponent_div_7_div_2_div_9_Template, 3, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, compteurCrudComponent_div_7_div_2_div_10_Template, 13, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, compteurCrudComponent_div_7_div_2_div_11_Template, 10, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r5.type == "pickDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r5.type == "startDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r5.type == "endDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r5.type == "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r5.type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r5.type == "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r5.type == "selectMultiple");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r5.type == "checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r5.type == "file");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r5.type == "ValueApiSelect");
} }
function compteurCrudComponent_div_7_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-datepicker-toggle", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mat-datepicker", null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const form_elem_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", form_elem_r64.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r74)("formControl", ctx_r65.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r74);
} }
function compteurCrudComponent_div_7_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-datepicker-toggle", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mat-datepicker", null, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r76)("min", ctx_r66.startDate.value)("formControl", ctx_r66.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r76);
} }
function compteurCrudComponent_div_7_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function compteurCrudComponent_div_7_div_4_div_4_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79); const form_elem_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r77.showHelp(form_elem_r64.help); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r64.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r64.label);
} }
function compteurCrudComponent_div_7_div_4_div_5_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r64.label);
} }
function compteurCrudComponent_div_7_div_4_div_5_input_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 24);
} if (rf & 2) {
    const form_elem_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r64.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, form_elem_r64.disabled, !form_elem_r64.disabled))("readonly", form_elem_r64.disabled);
} }
function compteurCrudComponent_div_7_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, compteurCrudComponent_div_7_div_4_div_5_label_1_Template, 3, 1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, compteurCrudComponent_div_7_div_4_div_5_input_3_Template, 1, 6, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r68.myFormGroup.get(form_elem_r64.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r68.myFormGroup.get(form_elem_r64.label));
} }
function compteurCrudComponent_div_7_div_4_div_6_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r64.label);
} }
function compteurCrudComponent_div_7_div_4_div_6_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r89 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", item_r89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r89, " ");
} }
function compteurCrudComponent_div_7_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, compteurCrudComponent_div_7_div_4_div_6_label_2_Template, 3, 1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function compteurCrudComponent_div_7_div_4_div_6_Template_select_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r91); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r90.SelectOnChange($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Select your option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, compteurCrudComponent_div_7_div_4_div_6_option_7_Template, 2, 2, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r69.myFormGroup.get(form_elem_r64.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r64.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", form_elem_r64.disabled == 1 ? "" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", form_elem_r64.paramValue);
} }
function compteurCrudComponent_div_7_div_4_div_7_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r64.label);
} }
function compteurCrudComponent_div_7_div_4_div_7_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topping_r96 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", topping_r96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](topping_r96);
} }
function compteurCrudComponent_div_7_div_4_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, compteurCrudComponent_div_7_div_4_div_7_label_1_Template, 3, 1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function compteurCrudComponent_div_7_div_4_div_7_Template_mat_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r98); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r97.onSelectMultipleChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, compteurCrudComponent_div_7_div_4_div_7_mat_option_3_Template, 2, 2, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r70.myFormGroup.get(form_elem_r64.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r64.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", form_elem_r64.paramValue);
} }
function compteurCrudComponent_div_7_div_4_div_8_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r64.label);
} }
function compteurCrudComponent_div_7_div_4_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function compteurCrudComponent_div_7_div_4_div_8_div_2_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r105); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r104.onCheckChangesNext($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const block_r103 = ctx.$implicit;
    const form_elem_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", block_r103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r64.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", block_r103, " ");
} }
function compteurCrudComponent_div_7_div_4_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, compteurCrudComponent_div_7_div_4_div_8_label_1_Template, 3, 1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, compteurCrudComponent_div_7_div_4_div_8_div_2_Template, 3, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r71.myFormGroup.get(form_elem_r64.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", form_elem_r64.paramValue);
} }
function compteurCrudComponent_div_7_div_4_div_9_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r64.label);
} }
function compteurCrudComponent_div_7_div_4_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, compteurCrudComponent_div_7_div_4_div_9_label_1_Template, 3, 1, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function compteurCrudComponent_div_7_div_4_div_9_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r111); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r110.onFileChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r72.myFormGroup.get(form_elem_r64.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r64.label);
} }
function compteurCrudComponent_div_7_div_4_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-progress-spinner", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function compteurCrudComponent_div_7_div_4_div_10_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r64.label);
} }
function compteurCrudComponent_div_7_div_4_div_10_input_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 48);
} if (rf & 2) {
    const form_elem_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r64.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", form_elem_r64.disabled);
} }
function compteurCrudComponent_div_7_div_4_div_10_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", form_elem_r64.label, " is required ");
} }
function compteurCrudComponent_div_7_div_4_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, compteurCrudComponent_div_7_div_4_div_10_div_1_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, compteurCrudComponent_div_7_div_4_div_10_label_3_Template, 3, 1, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function compteurCrudComponent_div_7_div_4_div_10_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r122); const form_elem_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r120.loadSelectionList(form_elem_r64); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "collections");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, compteurCrudComponent_div_7_div_4_div_10_input_8_Template, 1, 2, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, compteurCrudComponent_div_7_div_4_div_10_div_9_Template, 2, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r73.spinerSelectedFieldpopUp);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r73.myFormGroup.get(form_elem_r64.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r73.myFormGroup.get(form_elem_r64.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r73.myFormGroup.get(form_elem_r64.label).errors == null ? null : ctx_r73.myFormGroup.get(form_elem_r64.label).errors.required);
} }
function compteurCrudComponent_div_7_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, compteurCrudComponent_div_7_div_4_div_2_Template, 6, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, compteurCrudComponent_div_7_div_4_div_3_Template, 6, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, compteurCrudComponent_div_7_div_4_div_4_Template, 6, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, compteurCrudComponent_div_7_div_4_div_5_Template, 4, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, compteurCrudComponent_div_7_div_4_div_6_Template, 8, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, compteurCrudComponent_div_7_div_4_div_7_Template, 4, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, compteurCrudComponent_div_7_div_4_div_8_Template, 3, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, compteurCrudComponent_div_7_div_4_div_9_Template, 3, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, compteurCrudComponent_div_7_div_4_div_10_Template, 10, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r64.type == "startDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r64.type == "endDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r64.type == "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r64.type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r64.type == "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r64.type == "selectMultiple");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r64.type == "checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r64.type == "file");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r64.type == "ValueApiSelect");
} }
function compteurCrudComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, compteurCrudComponent_div_7_div_2_Template, 12, 10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, compteurCrudComponent_div_7_div_4_Template, 11, 9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.formInputLoop1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.formInputLoop2);
} }
function compteurCrudComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-progress-spinner", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function compteurCrudComponent_div_9_div_1_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r124.label);
} }
function compteurCrudComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "BR");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, compteurCrudComponent_div_9_div_1_label_2_Template, 3, 1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function compteurCrudComponent_div_9_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r130); const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r129.download(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r125.myFormGroup.get(form_elem_r124.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r124.label);
} }
function compteurCrudComponent_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "textarea", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r124.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r124.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", form_elem_r124.disabled);
} }
function compteurCrudComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, compteurCrudComponent_div_9_div_1_Template, 8, 2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, compteurCrudComponent_div_9_div_2_Template, 6, 3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r124 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r124.type == "uploadFile" && ctx_r2.myFormGroup.get(form_elem_r124.label)["value"] != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r124.type == "textarea");
} }
class compteurCrudComponent {
    constructor(matDialog, //private localStorageService: LocalstorageService, 
    mainService, crudService, formBuilder, sanitizer, httpClient) {
        this.matDialog = matDialog;
        this.mainService = mainService;
        this.crudService = crudService;
        this.formBuilder = formBuilder;
        this.sanitizer = sanitizer;
        this.httpClient = httpClient;
        //public listData : EchangeData ={displayedColumns:[],data:[],actionColumns:[],actionButton:{},type:'df'}
        this.displayedColumns = [];
        this.selectedFileName = "";
        this.selectedDate = new Date();
        this.FilterColumnType = false;
        this.group = {};
        this.formInput = [];
        this.formInputLoop = [];
        this.formInputLoop1 = [];
        this.formInputLoop2 = [];
        this.uploadFilePath = null;
        this.UploadDirectory = "";
        this.submitLabel = "validate";
        this.csvFolder = []; //| null = null;
        this.multipleSelectedValue = [];
        this.startDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date());
        this.endDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date());
        this.spinerSelectedField = false;
        this.spinerSelectedFieldpopUp = false;
        this.color = 'primary';
        this.disabled = false;
        this.multiple = false;
        //cronstrue1=""
        this.dataForm = [];
        //addFilterButton:Boolean=false;
        this.data = {};
        this.countChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataConf = {};
        this.form = {};
        this.echangeData = {};
        this.myFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](this.group);
    }
    getJson() {
        // let paramString1='colName=Ref_Request&colValue='+this.echangeData['Ref_Request']+'&sheet=userRequestValidation'
        console.log(' json  getJson ');
        return this.httpClient.get("assets/dbCompteur.json").toPromise();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            bs_custom_file_input__WEBPACK_IMPORTED_MODULE_3___default.a.init();
            console.log(' this.echangeObject  ', this.echangeObject);
            if (this.echangeObject['data'] != undefined)
                this.echangeData = this.echangeObject['data'];
            if (this.echangeObject['action'].toUpperCase() == 'UPDATE') {
                this.echangeData['Ancien_index'] = this.echangeData['Index'];
                this.echangeData['Index'] = 0;
                this.echangeData['Date'] = new Date();
            }
            //console.log(' this.echangeData  ',this.echangeData) 
            this.dataConf = yield this.getJson();
            //if ( this.echangeObject['action'] == 'add')
            this.form = this.dataConf['form'];
            //else 
            //this.form=this.dataConf['form']
            this.formTitle = this.dataConf['TitleFormObject'];
            console.log(this.formTitle, ' this.dataConf  ', this.dataConf);
            /*  if ( this.echangeData != undefined ){
                let o={}
                let sheet='compteur'
               this.mainService.getDataByCols(sheet,o).subscribe(
                data =>{
                  this.echangeData = data;
                 }
              )}else  {
         
                this.echangeData=[]
              }
          */
            this.group = {};
            this.formInput = [];
            this.formInputLoop = [];
            this.myFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](this.group);
            let myDate = new Date();
            let today = myDate.getFullYear() + '-' + (('0' + (myDate.getMonth() + 1)).slice(-2)) + '-' + ('0' + myDate.getDate()).slice(-2);
            /*    if (this.echangeData.length > 0){
                this.data ={action:'action',id:5,type:'type',currentModule:'module321',droppedModules:[],
                form: this.form    }
                }else
                {*/
            this.data = { action: 'action', id: 5, type: 'type', currentModule: 'module321', droppedModules: [],
                form: this.form };
            // }
            // let dataSize = Object.keys(this.data).length;
            this.formInput = [];
            //this.submitLabel='Close'
            if (!(typeof this.data['form'] === 'undefined')) {
                const dataFormClone = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"])(this.data['form']);
                this.dataForm = dataFormClone;
                this.formInput = Object.values(dataFormClone);
                for (var i in this.formInput) {
                    if (this.formInput[i]['hide'] != 1) {
                        this.formInputLoop.push(this.formInput[i]);
                        this.group[this.formInput[i]['label']] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '' });
                        if (this.formInput[i]['type'] == "file") {
                            this.selectedFileName = this.echangeData[this.formInput[i]['label'].replace(/ /g, '_')];
                            this.fileBase64 = this.echangeData['base64'];
                            console.log(' this.fileBase64 ', this.fileBase64);
                        }
                        if (this.formInput[i]['required'] == 1) {
                            this.myFormGroup.controls[this.formInput[i]['label']].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
                        }
                        if (this.echangeData[this.formInput[i]['label'].replace(/ /g, '_')] != undefined) {
                            this.myFormGroup.controls[this.formInput[i]['label']].setValue(this.echangeData[this.formInput[i]['label'].replace(/ /g, '_')]);
                            console.log(this.formInput[i]['label'].replace(/ /g, '_'), '  ', this.echangeData[this.formInput[i]['label'].replace(/ /g, '_')], ' *startDat ', this.myFormGroup.controls[this.formInput[i]['label']]);
                        }
                        else {
                            let value = this.formInput[i]['value'];
                            if (this.formInput[i]['value'].toUpperCase() == 'SYSDATE' && this.echangeObject.action.toUpperCase() == 'ADD') {
                                let myDate = new Date();
                                value = myDate; //.getFullYear() + '-' + (myDate.getMonth()+1) + '-' + ('0' + myDate.getDate()).slice(-2) ;
                                console.log(myDate, this.formInput[i]['value'], ' sysdate ', value);
                            }
                            if (this.formInput[i]['value'].toUpperCase().includes('LOCALSTORAGE') && this.echangeObject.action.toUpperCase() == 'ADD') {
                                value = eval(this.formInput[i]['value']);
                                console.log(this.formInput[i]['value'], ' localStorage ', value);
                                //
                            }
                            this.myFormGroup.controls[this.formInput[i]['label']].setValue(value);
                        }
                        if (this.formInput[i]['type'] == 'startDate') {
                            let value = new Date(this.echangeData[this.formInput[i]['label'].replace(/ /g, '_')]);
                            this.startDate.setValue(value);
                            console.log(this.formInput[i]['value'], ' *startDate ***  ', this.myFormGroup.controls[this.formInput[i]['label']]);
                        }
                        if (this.formInput[i]['type'] == 'endDate') {
                            let value = new Date(this.echangeData[this.formInput[i]['label'].replace(/ /g, '_')]);
                            this.endDate.setValue(value);
                            //console.log( i, ' *startDate ***  ', this.myFormGroup.controls[this.formInput[i]['label']] ) 
                        }
                    }
                }
                //  prepare data for two column 
                let keys = Object.keys(this.formInputLoop);
                for (var el = 0; el < this.formInputLoop.length; el++) {
                    if (el % 2 == 0)
                        this.formInputLoop1.push(this.formInputLoop[el]);
                    else
                        this.formInputLoop2.push(this.formInputLoop[el]);
                }
            }
            else
                this.formInput = [];
        });
    }
    ;
    onSelectMultipleChange(event) {
        this.multipleSelectedValue = event;
    }
    loadSelectionList(form_elem) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            {
                console.log(' loadSelectionList ', JSON.stringify(form_elem));
                const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
                //The user can't close the dialog by clicking outside its body
                //dialogConfig.disableClose = true;
                console.log(' openFolderServerModal  ');
                dialogConfig.position = { top: '0%', left: '20%' };
                dialogConfig.id = "modal-component";
                dialogConfig.height = "800px";
                dialogConfig.width = "800px";
                dialogConfig.autoFocus = false;
                dialogConfig.height = '100%';
                this.spinerSelectedFieldpopUp = true;
                let echangeData = {};
                let val = yield this.getDataForSelect();
                this.spinerSelectedFieldpopUp = false;
                console.log('  getAllUsers ', JSON.stringify(val));
                echangeData['data'] = val;
                echangeData['displayedColumns'] = ['Designation', 'Statut'];
                echangeData['actionColumns'] = ['Action'];
                dialogConfig.data = echangeData;
                const modalDialog = this.matDialog.open(src_app_components_mat_table_list_mat_table_list_component__WEBPACK_IMPORTED_MODULE_7__["MatTableListComponent"], dialogConfig); // load the help component
                modalDialog.afterClosed().subscribe(result => {
                    // if(result.event == 'Add'){
                    console.log(' close dialog ', JSON.parse(result.data)['data'][0]['Designation']);
                    this.myFormGroup.controls[form_elem.label].setValue(JSON.parse(result.data)['data'][0]['Designation']);
                });
            }
        });
    }
    getDataForSelect() {
        //this.usuariosService.updateUserRequestValidation(this.crudData).subscribe(resultat => {
        return this.mainService.getAllRowsSheet('Composant').toPromise();
        //return this.crudService.updateJsonDataToSheet(data,'dataObject').toPromise()
    }
    SelectOnChange(event) {
        console.log(' SelectOnChange   ', event.value, ' SelectOnChange ');
        this.FilterColumnType = event.value.toUpperCase().includes('DATE') || event.value.toUpperCase().includes('DAY');
    }
    pickerEvent(event) {
        this.selectedDate = event.value;
        this.myFormGroup.controls['Filter Value'].setValue(this.selectedDate.getFullYear() + '-' + (this.selectedDate.getMonth() + 1) + '-' + ('0' + this.selectedDate.getDate()).slice(-2));
    }
    onFileChanged(event) {
        console.log(' onFileChanged ', event.target.files[0]);
        this.uploadFilePath = event.target.files[0]; // get the file name  
        this.selectedFileName = this.uploadFilePath.name;
        var reader = new FileReader();
        reader.readAsDataURL(this.uploadFilePath);
        reader.onload = () => {
            this.fileBase64 = reader.result.toString();
            //  this.myFormGroup.controls['base64'].setValue(this.fileBase64)
            console.log(' file base 64 ', this.fileBase64);
        };
    }
    patternValidator() {
        return (control) => {
            if (!control.value) {
                console.log(' patternValidator  !!!! control.value  NULLLLL ', control.value);
                return null;
            }
            if (!control.value.toUpperCase().includes('SELECT') ||
                !control.value.toUpperCase().includes('FROM')) {
                console.log('patternValidator control.value.dont includes("select or from ")  ');
                control.setErrors({ invalidQuery: true });
                return { invalidQuery: true };
            }
            else {
                return null;
            }
        };
    }
    download() {
        let vfileToBeName = this.echangeData['Attached_File'];
        const source = this.echangeData['base64'];
        const link = document.createElement("a");
        link.href = source;
        link.download = `${vfileToBeName}`;
        link.click();
    }
    uploadFile(file) {
        const uploadData = new FormData();
        let filename = file;
        uploadData.append('filename', filename);
        uploadData.append('folder', this.UploadDirectory);
        uploadData.append('user', localStorage.getItem('user'));
        console.log(' uploadFile ', uploadData);
    }
    onFolderChanged(event) {
        console.log(' onFolderChanged ', event.target.files);
        var filesSelected = event.target.files;
        let output = document.getElementById("listing");
        var tmpArr = [];
        for (let item of filesSelected) {
            tmpArr.push(item.webkitRelativePath);
        }
        this.csvFolder = tmpArr; // get the file name 
    }
    // help modal
    showHelp(help) {
        /*
        help["image"]="info.jpg";
        help["text_top"]=" Top Top Top "
        help["text_bottom"]=" Bottom  "
       
    
        */
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.id = "modal-help";
        dialogConfig.height = "450px";
        dialogConfig.width = "800px";
        dialogConfig.data = help; // pass help variable to the helpcomponent
        const modalDialog = this.matDialog.open(src_app_help_help_component__WEBPACK_IMPORTED_MODULE_6__["HelpComponent"], dialogConfig); // load the help component
    }
    isSelected(data) {
        console.log(' isSelected  ', data);
    }
    // onchange checkbox function for "next"
    onCheckChangesNext(event) {
        // get the form array "next" and add data in every changes
        // const formArrayNext: FormArray = this.myFormGroup.get('next') as FormArray;
        this.formInput.map(elem => {
            console.log(' elem ', elem);
            if (this.dataForm[elem['label'].replace(/ /g, '_')]['type'] == 'checkbox') {
                let ar = this.dataForm[elem['label'].replace(/ /g, '_')]['valueSelected'];
                console.log(' el ', event.target.value, '   at  ', ar.indexOf(event.target.value));
                if (ar.indexOf(event.target.value) >= 0 && !event.target.checked) {
                    console.log(' remove ', event.target.value, '   at  ', ar.indexOf(event.target.value));
                    ar.splice(ar.indexOf(event.target.value), 1);
                }
                if (ar.indexOf(event.target.value) == -1 && event.target.checked)
                    ar.push(event.target.value);
                this.dataForm[elem['label'].replace(/ /g, '_')]['valueSelected'] = ar;
                console.log(elem['label'], 'value  ', this.dataForm[elem['label'].replace(/ /g, '_')]['valueSelected']);
            }
        });
    }
    cancel() {
        this.countChanged.emit(this.dataForm);
    }
    buildOjectFromDataForm(obj) {
        var data = {};
        if (Object.keys(this.echangeData).length > 1) {
            data["compteur_id"] = this.echangeData["compteur_id"];
        }
        for (var el in obj) {
            console.log(el, obj[el]['value']);
            data[el] = obj[el]['value'];
        }
        return data;
    }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // check validation form  
            for (var i in this.formInputLoop) {
                if (!this.myFormGroup.controls[this.formInputLoop[i]['label']].valid) {
                    alert(this.myFormGroup.controls[this.formInputLoop[i]['label']] + '  Form Submitted Error : ' + '    ' + this.formInputLoop[i]["label"]);
                    return 0;
                }
            }
            let filename = this.csv; // get the file name 
            console.log(' elem ', JSON.stringify(this.formInputLoop));
            console.log(' this.dataForm ', JSON.stringify(this.dataForm));
            this.formInputLoop.map(elem => {
                console.log('elem ', this.dataForm[elem['label']]);
                console.log('type  ', this.dataForm[elem['label']]);
                if (this.dataForm[elem['label'].replace(/ /g, '_')]['type'] == 'text' ||
                    this.dataForm[elem['label'].replace(/ /g, '_')]['type'] == 'textarea') {
                    let tmpText = this.myFormGroup.get(elem['label']).value; //.replace(/'/g,'~').replace(/"/g,'~')
                    this.dataForm[elem['label'].replace(/ /g, '_')].value = tmpText;
                }
                else if (this.dataForm[elem['label'].replace(/ /g, '_')]['type'] != 'checkbox' &&
                    this.dataForm[elem['label'].replace(/ /g, '_')]['type'] != 'selectMultiple' &&
                    this.dataForm[elem['label'].replace(/ /g, '_')]['type'] != 'savefile' &&
                    !elem['label'].includes('Repertoire')) {
                    console.log('elem  value ! text ', elem['label'].replace(/ /g, '_'));
                    this.dataForm[elem['label'].replace(/ /g, '_')].value = this.myFormGroup.get(elem['label']).value;
                }
                if (elem['label'].includes('fichier1')) {
                    this.dataForm[elem['label'].replace(/ /g, '_')].value = this.filename; //csv['name']
                }
                if (elem['label'].includes('Repertoire')) {
                    this.dataForm[elem['label'].replace(/ /g, '_')].value = this.csvFolder;
                    //console.log(' fichier   ffffffffff  ',JSON.stringify(this.myFormGroup.get(elem['label'])))
                }
                if (this.dataForm[elem['label'].replace(/ /g, '_')]['type'] == 'selectMultiple') {
                    this.dataForm[elem['label'].replace(/ /g, '_')].value = this.multipleSelectedValue;
                }
                if (this.dataForm[elem['label'].replace(/ /g, '_')]['type'] == 'pickDate'
                // ||           this.dataForm[elem['label'].replace(/ /g, '_')]['type'] == 'startDate' 
                // ||           this.dataForm[elem['label'].replace(/ /g, '_')]['type'] == 'endDate'
                ) {
                    let pdate = new Date(this.dataForm[elem['label'].replace(/ /g, '_')].value);
                    console.log(elem['label'].replace(/ /g, '_'), ' Date ', pdate);
                    this.dataForm[elem['label'].replace(/ /g, '_')].value = pdate.getFullYear() + '-' + ('0' + (pdate.getMonth() + 1)).slice(-2) + '-' + ('0' + pdate.getDate()).slice(-2);
                }
                if (this.dataForm[elem['label'].replace(/ /g, '_')]['type'] == 'startDate') {
                    console.log(' this.startDate ', this.startDate);
                    let sdate = new Date(this.startDate.value);
                    this.dataForm[elem['label'].replace(/ /g, '_')].value = sdate.getFullYear() + '-' + ('0' + (sdate.getMonth() + 1)).slice(-2) + '-' + ('0' + sdate.getDate()).slice(-2);
                }
                if (this.dataForm[elem['label'].replace(/ /g, '_')]['type'] == 'endDate') {
                    let edate = new Date(this.endDate.value);
                    this.dataForm[elem['label'].replace(/ /g, '_')].value = edate.getFullYear() + '-' + ('0' + (edate.getMonth() + 1)).slice(-2) + '-' + ('0' + edate.getDate()).slice(-2);
                }
            });
            if (this.echangeObject.action == "add") {
                let data = this.buildOjectFromDataForm(this.dataForm);
                console.log('  this.dataForm length 0000000', JSON.stringify(data));
                /*await this.crudService.insertJsonDataToSheet(data,'dataObject').subscribe(data => {
                 
                 console.log(' retour 0000000',data);
                }
                ) */
                this.spinerSelectedField = true;
                console.log(' base64 ', this.fileBase64);
                data["Attached_Files"] = this.selectedFileName;
                data["base64"] = this.fileBase64;
                let responseData = yield this.insertJsonDataToSheet(data);
                this.spinerSelectedField = false;
                let help = {};
                /*help["image"]="info.jpg";
                help["text_top"]=" Top Top Top "
                help["text_bottom"]=" Bottom  "
                this.showHelp(help)*/
                console.log(' before   getAll test ', responseData);
                this.countChanged.emit(this.dataForm);
                return 0;
            }
            if (this.echangeObject.action == "details") {
                let data = this.buildOjectFromDataForm(this.dataForm);
                /*     console.log(JSON.stringify(this.echangeData),'  this.dataForm length 0000000',JSON.stringify(data))
             
                     this.spinerSelectedField=true
                     let responseData = await this.updateJsonDataToSheet(data)
                     this.spinerSelectedField=false
                     console.log(' before   getAll test ',responseData)*/
                this.countChanged.emit(this.dataForm);
                return 0;
            }
            if (this.echangeObject.action == "update") {
                let data = this.buildOjectFromDataForm(this.dataForm);
                data["Attached_Files"] = this.selectedFileName;
                data["base64"] = this.fileBase64;
                console.log(JSON.stringify(this.echangeData), '  this.dataForm length 0000000', JSON.stringify(data));
                /*await this.crudService.insertJsonDataToSheet(data,'dataObject').subscribe(data => {
                 
                 console.log(' retour 0000000',data);
                }
                ) */
                this.spinerSelectedField = true;
                let responseData = yield this.updateJsonDataToSheet(data);
                this.spinerSelectedField = false;
                console.log(' before   getAll test ', responseData);
                this.countChanged.emit(this.dataForm);
                return 0;
            }
        });
    }
    insertJsonDataToSheet(data) {
        // let paramString1='colName=Ref_Request&colValue='+this.echangeData['Ref_Request']+'&sheet=userRequestValidation'
        return this.crudService.insertJsonDataToSheet(data, 'compteur').toPromise();
    }
    updateJsonDataToSheet(data) {
        // let paramString1='colName=Ref_Request&colValue='+this.echangeData['Ref_Request']+'&sheet=userRequestValidation'
        console.log(' update data ', JSON.stringify(data));
        return this.crudService.updateJsonDataToSheet(data, 'compteur').toPromise();
    }
    ngAfterViewInit() {
        /* for (var i in this.formInputLoop) {
               
           console.log(this.myFormGroup.controls[this.formInputLoop[i]['label']], 'required ',this.myFormGroup.get(this.formInputLoop[i]['label'])['error'])
            
     
           }*/
        if (localStorage.getItem('data') != null) {
            //this.updateProject()
        }
    }
    onReset() {
        this.countChanged.emit(null);
        return 0;
    }
}
compteurCrudComponent.ɵfac = function compteurCrudComponent_Factory(t) { return new (t || compteurCrudComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_8__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_9__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"])); };
compteurCrudComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: compteurCrudComponent, selectors: [["app-compteur-crud"]], inputs: { echangeObject: "echangeObject" }, outputs: { countChanged: "countChanged" }, decls: 18, vars: 5, consts: [[2, "font-size", "smaller"], [3, "formGroup", "ngSubmit"], [1, "text-center"], ["class", "col", 4, "ngIf"], ["class", "wrapper", "style", "height: 20px; align-self: center", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-primary", "mr-1"], ["type", "reset", 1, "btn", "btn-secondary", 3, "click"], [1, "col"], ["class", "row col-10", 4, "ngIf"], [4, "ngIf"], [1, "row", "col-10"], ["matInput", "", 3, "matDatepicker", "placeholder", "formControlName"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "placeholder", "Start Date", 3, "matDatepicker", "formControl"], ["picker1", ""], ["matInput", "", "placeholder", "End Date", 3, "matDatepicker", "min", "formControl"], ["picker2", ""], ["src", "assets/info.png", 1, "info", 3, "click"], ["type", "password", 3, "formControlName"], ["style", "width: 30%", "for", "test", 4, "ngIf"], ["id", "test", "type", "text", 3, "ngClass", "readonly", "formControlName", 4, "ngIf"], ["for", "test", 2, "width", "30%"], ["id", "test", "type", "text", 3, "ngClass", "readonly", "formControlName"], ["id", "test", 2, "width", "68%", 3, "formControlName", "change"], ["value", "", "disabled", "", "selected", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], ["multiple", "", 1, "form-select", 3, "formControlName", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "checkbox", 3, "value", "formControlName", "change"], ["for", "fileInput"], [2, "cursor", "pointer", "color", "yellow"], ["id", "fileInput", "type", "file", 2, "display", "none", 3, "change"], [1, "card"], ["id", "header-finalizado", 1, "card-header"], [1, "card-body"], ["width", "80%", "height", "200px", 3, "src"], ["style", "width: 30%", 4, "ngIf"], ["type", "button", "matTooltip", "select file", 1, "btn", "btn-default", 3, "click"], [2, "margin-top", "10%"], ["style", "\n                  background-color: transparent;\n                  border: none;\n                  outline: none;\n                ", "type", "text", 3, "readonly", "formControlName", 4, "ngIf"], ["style", "color: red", 4, "ngIf"], [1, "wrapper", 2, "height", "20px", "align-self", "center"], ["mode", "indeterminate", "diameter", "40", 1, "inner", 2, "left", "50%"], [2, "width", "30%"], ["type", "text", 2, "background-color", "transparent", "border", "none", "outline", "none", 3, "readonly", "formControlName"], [2, "color", "red"], ["matInput", "", 3, "matDatepicker", "placeholder", "formControl"], ["for", "file", 4, "ngIf"], ["type", "file", "id", "file", 3, "formControlName", "change"], ["for", "file"], ["style", "\n                background-color: transparent;\n                border: none;\n                outline: none;\n              ", "type", "text", 3, "readonly", "formControlName", 4, "ngIf"], ["class", "col-6", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "col-6"], ["id", "test", "type", "text", 2, "background-color", "transparent", "border", "none", "outline", "none", 3, "formControlName"], ["type", "button", "matTooltip", "Download File", 1, "btn", 3, "click"], [2, "margin-top", "15%"], [1, "row"], ["rows", "3", "cols", "35", "spellcheck", "false", 1, "form-control", 2, "font-size", "10px", 3, "readonly", "formControlName"]], template: function compteurCrudComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function compteurCrudComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "BR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "BR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, compteurCrudComponent_div_7_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, compteurCrudComponent_div_8_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, compteurCrudComponent_div_9_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "BR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "BR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function compteurCrudComponent_Template_button_click_16_listener() { return ctx.onReset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.formTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formInputLoop.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.spinerSelectedField);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.formInputLoop);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltip"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinner"]], styles: ["fieldset[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    margin-left: 20vw;\r\n    border: 0px none transparent;\r\n    background: none;\r\n  }\r\n \r\n  select[_ngcontent-%COMP%] {\r\n    \r\n    max-height: 30px;\r\n    \r\n    margin-bottom: .5em;\r\n    border-radius: 4px;\r\n  }\r\n \r\n  .dropbtn[_ngcontent-%COMP%]  {\r\n    display: inline-block;\r\n    margin-bottom: -3px;\r\n    margin-right: 4px;\r\n  }\r\n \r\n  .disable[_ngcontent-%COMP%] {\r\n\r\n    width: 65%;\r\n    background-color: transparent;\r\n    \r\n    outline: none;\r\n\r\n  }\r\n \r\n  .enable[_ngcontent-%COMP%] {\r\n\r\n    width: 65%;\r\n    \r\n    \r\n    outline: none;\r\n\r\n  }\r\n \r\n  \r\n \r\n  \r\n \r\n  \r\n \r\n  \r\n \r\n  \r\n \r\n  input1[_ngcontent-%COMP%] {\r\n    \r\n    max-height: 30px;\r\n    \r\n    margin-bottom: .5em;\r\n    border-radius: 4px;\r\n    \r\n    \r\n    border-radius: 4px;\r\n  }\r\n \r\n  \r\n \r\n  \r\n \r\n  \r\n \r\n  .row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n  }\r\n \r\n  .input-field[_ngcontent-%COMP%] {\r\n    margin-left: 1em;\r\n    padding: .5em;\r\n    margin-bottom: .5em;\r\n  }\r\n \r\n  .config-field[_ngcontent-%COMP%] {\r\n    box-shadow: 2px 2px 5px 2px;\r\n    border: 2px #d9d9d9;\r\n    border-radius: 5px;\r\n    \r\n    margin: 0 auto;\r\n    padding: 15px 20px 20px;\r\n    display: block;\r\n    text-align: left;\r\n    \r\n   \r\n     \r\n    \r\n    background-color: #f5f7f7;\r\n}\r\n \r\n  .config-field1[_ngcontent-%COMP%] {\r\n    box-shadow: 2px 2px 5px 2px;\r\n    border: 2px #d9d9d9;\r\n    border-radius: 5px;\r\n    \r\n    margin: 0 auto;\r\n    \r\n    display: block;\r\n    text-align: center;\r\n    \r\n}\r\n \r\n  \r\n \r\n  .container[_ngcontent-%COMP%] {\r\n    display: block;\r\n    position: relative;\r\n    padding-left: 35px;\r\n    cursor: pointer;\r\n    font-size: 17px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    user-select: none;\r\n    background-color: transparent;\r\n    border-radius: 5px;\r\n    border: 2px solid #dceff0;\r\n    padding: 5px; \r\n}\r\n \r\n  \r\n \r\n  .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 0;\r\n    width: 0;\r\n}\r\n \r\n  \r\n \r\n  .checkmark[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 30px;\r\n    background-color: transparent;\r\n    border-right: 2px solid #5f7d8b;\r\n}\r\n \r\n  \r\n \r\n  .container[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .checkmark[_ngcontent-%COMP%] {\r\n    background-color: #ccc;\r\n}\r\n \r\n  \r\n \r\n  .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\r\n    background-color: #ccc;\r\n    \r\n}\r\n \r\n  \r\n \r\n  .checkmark[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n}\r\n \r\n  \r\n \r\n  .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\r\n    display: block;\r\n}\r\n \r\n  \r\n \r\n  .container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\r\n    left: calc(50% - 4px);\r\n    top: 50%;\r\n    width: 7px;\r\n    height: 10px;\r\n    border: solid white;\r\n    border-width: 0px 3px 2px 0;\r\n    transform: rotate(45deg) translate(-50%, -50%);\r\n}\r\n \r\n  .input-file[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n}\r\n \r\n  \r\n \r\n  .btn-config[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background-color: #f27839;\r\n    border: 0;\r\n    border-radius: 8px;\r\n   \r\n   \r\n    color: #fff;\r\n    font-weight: 500;\r\n    padding: 10px;\r\n}\r\n \r\n  .info[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n    height: 20px;\r\n    cursor: pointer;\r\n    padding: 10px;\r\n\r\n}\r\n \r\n  .col[_ngcontent-%COMP%]{display:flex;}\r\n \r\n  .col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{flex:1}\r\n \r\n  .invisible[_ngcontent-%COMP%]{\r\n    display: block;\r\n    visibility: hidden;\r\n    height: 0;\r\n    width: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY29tcHRldXIvY29tcHRldXItY3J1ZC9jb21wdGV1ci1jcnVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25COztFQUVBOztJQUVFLFVBQVU7SUFDViw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGFBQWE7O0VBRWY7O0VBQ0E7O0lBRUUsVUFBVTtJQUNWLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsYUFBYTs7RUFFZjs7RUFFRjs7Ozs7RUFLRTs7RUFDRSxjQUFjOztFQUNkLG9CQUFvQjs7RUFFcEIsb0JBQW9COztFQUNwQjt3QkFDb0I7O0VBRXRCO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtFQUNwQjs7RUFFQTs7OztJQUlFOztFQUVGOzs7O3VCQUlxQjs7RUFDdEIsS0FBSzs7RUFFTjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0VBRUY7SUFDSSwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjs7S0FFZjsrQkFDMEI7SUFDM0IsNkJBQTZCO0lBQzdCLHlCQUF5QjtBQUM3Qjs7RUFDQTtJQUNJLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEI7K0JBQzJCO0FBQy9COztFQUNBLGtCQUFrQjs7RUFDbEI7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFFdEIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0VBQ0Esd0NBQXdDOztFQUN4QztJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBZTtJQUNmLFNBQVM7SUFDVCxRQUFRO0FBQ1o7O0VBQ0EsNkJBQTZCOztFQUM3QjtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLCtCQUErQjtBQUNuQzs7RUFDQSwrQ0FBK0M7O0VBQy9DO0lBQ0ksc0JBQXNCO0FBQzFCOztFQUNBLHdEQUF3RDs7RUFDeEQ7SUFDSSxzQkFBc0I7SUFDdEIsOEJBQThCO0FBQ2xDOztFQUNBLDZEQUE2RDs7RUFDN0Q7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0VBQ0Esb0NBQW9DOztFQUNwQztJQUNJLGNBQWM7QUFDbEI7O0VBQ0Esa0NBQWtDOztFQUNsQztJQUNJLHFCQUFxQjtJQUNyQixRQUFRO0lBQ1IsVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLDhDQUE4QztBQUNsRDs7RUFDQTtJQUNJLGVBQWU7QUFDbkI7O0VBQ0E7O0VBRUU7O0VBQ0Y7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxrQkFBa0I7R0FDbkI7S0FDRTtHQUNGO0tBQ0U7SUFDRCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0VBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhOztBQUVqQjs7RUFFQSxLQUFLLFlBQVksQ0FBQzs7RUFDbEIsU0FBUyxNQUFNOztFQUVmO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvY29tcHRldXIvY29tcHRldXItY3J1ZC9jb21wdGV1ci1jcnVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmaWVsZHNldCB7XHJcbiAgICAvKndpZHRoOiA1MHZ3OyovXHJcbiAgICAvKnRleHQtYWxpZ246IHJpZ2h0OyovXHJcbiAgICBtYXJnaW4tbGVmdDogMjB2dztcclxuICAgIGJvcmRlcjogMHB4IG5vbmUgdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIH1cclxuIFxyXG4gIHNlbGVjdCB7XHJcbiAgICAvKndpZHRoOiA2MCU7Ki9cclxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICAvKm1heC13aWR0aDogNTAwcHg7Ki9cclxuICAgIG1hcmdpbi1ib3R0b206IC41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG5cclxuICAuZHJvcGJ0biAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTNweDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIH1cclxuXHJcbiAgLmRpc2FibGUge1xyXG5cclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC8qYm9yZGVyOiBub25lOyovXHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG5cclxuICB9XHJcbiAgLmVuYWJsZSB7XHJcblxyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7Ki9cclxuICAgIC8qYm9yZGVyOiBub25lOyovXHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG5cclxuICB9XHJcblxyXG4vKmlucHV0IHtcclxuICAgXHJcbiAgICBtYXgtaGVpZ2h0OiAzMHB4OyAgICAgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59Ki9cclxuICAgIC8qd2lkdGg6IDYwJTsqL1xyXG4gICAgLyptYXgtd2lkdGg6IDUwMHB4OyovXHJcblxyXG4gICAgLyptYXgtd2lkdGg6IDEwMHB4OyovXHJcbiAgICAvKm1hcmdpbi1ib3R0b206IC41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7Ki9cclxuICBcclxuICBpbnB1dDEge1xyXG4gICAgLyp3aWR0aDogNjAlOyovXHJcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gICAgLyptYXgtd2lkdGg6IDUwMHB4OyovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgLyptYXgtd2lkdGg6IDEwMHB4OyovXHJcbiAgICAvKm1hcmdpbi1ib3R0b206IC41ZW07Ki9cclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgXHJcbiAgLypsZWdlbmQge1xyXG4gICAgd2lkdGg6IDcwdnc7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH0qL1xyXG5cclxuICAvKmxhYmVsIHtcclxuICAgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTsgXHJcbiAgICAvKndpZHRoOiAzMCU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDsqL1xyXG4gLyogfSovXHJcblxyXG4ucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0LWZpZWxkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICBwYWRkaW5nOiAuNWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcclxuICB9XHJcblxyXG4uY29uZmlnLWZpZWxkIHtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweDtcclxuICAgIGJvcmRlcjogMnB4ICNkOWQ5ZDk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAvKm1pbi1oZWlnaHQ6IDUwcHg7Ki9cclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTVweCAyMHB4IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAvKmhlaWdodDogMTAwJTsqL1xyXG4gICBcclxuICAgICAvKmJhY2tncm91bmQtY29sb3I6ICNkMGQwZDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGI4MmI4OyovXHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICNkY2VmZjA7Ki9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY3Zjc7XHJcbn1cclxuLmNvbmZpZy1maWVsZDEge1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4O1xyXG4gICAgYm9yZGVyOiAycHggI2Q5ZDlkOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8qbWluLWhlaWdodDogNXB4OyovXHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIC8qcGFkZGluZzogNXB4IDIwcHggMjBweDsqL1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvKmhlaWdodDogMTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QwZDBkMDsqL1xyXG59XHJcbi8qIFRoZSBjb250YWluZXIgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMzVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkY2VmZjA7XHJcbiAgICBwYWRkaW5nOiA1cHg7IFxyXG59XHJcbi8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXHJcbi5jb250YWluZXIgaW5wdXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG59XHJcbi8qIENyZWF0ZSBhIGN1c3RvbSBjaGVja2JveCAqL1xyXG4uY2hlY2ttYXJrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzVmN2Q4YjtcclxufVxyXG4vKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cclxuLmNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxufVxyXG4vKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cclxuLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjNWY3ZDhiOyAqL1xyXG59XHJcbi8qIENyZWF0ZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAoaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXHJcbi5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xyXG4uY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi8qIFN0eWxlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yICovXHJcbi5jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDRweCk7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHdpZHRoOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHggM3B4IDJweCAwO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG4uaW5wdXQtZmlsZSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuLyoubmctdmFsaWQgbGFiZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0qL1xyXG4uYnRuLWNvbmZpZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMjc4Mzk7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgIC8qIHdpZHRoOiAxMDAlO1xyXG4gICAgKi9cclxuICAgLyogYmFja2dyb3VuZDogI2YyNzgzOTtcclxuICAgICovXHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5pbmZvIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuXHJcbn1cclxuXHJcbi5jb2x7ZGlzcGxheTpmbGV4O31cclxuLmNvbCBkaXZ7ZmxleDoxfVxyXG5cclxuLmludmlzaWJsZXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](compteurCrudComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-compteur-crud',
                templateUrl: './compteur-crud.component.html',
                styleUrls: ['./compteur-crud.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_8__["MainService"] }, { type: src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_9__["CrudService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"] }]; }, { echangeObject: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], countChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/views/compteur/compteur-list/compteur-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/compteur/compteur-list/compteur-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: compteurListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compteurListComponent", function() { return compteurListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_components_navbar_user_navbar_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/navbar-user/navbar-user.component */ "./src/app/components/navbar-user/navbar-user.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _navidation_sidenav_list_admin_sidenav_list_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../navidation/sidenav-list-admin/sidenav-list-admin.component */ "./src/app/navidation/sidenav-list-admin/sidenav-list-admin.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _components_dynamic_table_list_dynamic_table_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/dynamic-table-list/dynamic-table-list.component */ "./src/app/components/dynamic-table-list/dynamic-table-list.component.ts");
/* harmony import */ var _compteur_crud_compteur_crud_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../compteur-crud/compteur-crud.component */ "./src/app/views/compteur/compteur-crud/compteur-crud.component.ts");
















function compteurListComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-progress-spinner", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function compteurListComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-dynamic-table-list", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("countChanged", function compteurListComponent_div_11_Template_app_dynamic_table_list_countChanged_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.actionHandler1($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("echangeData", ctx_r2.echangeData);
} }
function compteurListComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-compteur-crud", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("countChanged", function compteurListComponent_div_12_Template_app_compteur_crud_countChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.reloadData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("echangeObject", ctx_r3.crudData);
} }
function compteurListComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "BR");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "BR");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No Data To Display");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class compteurListComponent {
    constructor(httpClient, mainService, crudService, activeRoute) {
        this.httpClient = httpClient;
        this.mainService = mainService;
        this.crudService = crudService;
        this.activeRoute = activeRoute;
        //isSearchShow: boolean;
        this.echangeData = {
            displayedColumns: [], data: [],
            actionColumns: [],
            actionButton: {},
            type: 'df'
        };
        this.sheet = 'compteur';
        this.displayedColumns = [];
        this.action = 'list';
        this.spinerSelectedField = false;
        this.sortField = "";
        this.dataConf = {};
        this.title = "";
        this.getAllObjects = () => {
            let o = {};
            //{'User':localStorage.getItem('user')}
            if (this.activeRoute.snapshot.params.req != undefined) {
                let req = this.activeRoute.snapshot.params.req;
                //  o['R_params_id']=req;
                o['Compteur'] = req;
            }
            console.log(' getALLOBject ', this.sheet, o);
            this.spinerSelectedField = true;
            this.mainService.getDataByCols(this.sheet, o).subscribe(data => {
                this.action = 'list';
                this.echangeData.data = data;
                console.log(' getALLOBject echangeData ', JSON.stringify(this.echangeData));
                if (this.activeRoute.snapshot.params.req != undefined) {
                    let event = {};
                    event['action'] = 'details';
                    event['data'] = []; //.push(ddata[0])
                    event['data'].push(data[0]);
                    this.actionHandler1(event);
                }
            });
            this.spinerSelectedField = false;
        };
    }
    getJson() {
        console.log(' json  getJson ');
        return this.httpClient.get("assets/dbCompteur.json").toPromise();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.sortField = "Date";
            console.log('route ', this.activeRoute.snapshot.routeConfig.path);
            localStorage.setItem('route', this.activeRoute.snapshot.routeConfig.path);
            this.dataConf = yield this.getJson();
            this.title = this.dataConf['titleList'];
            this.echangeData.actionColumns = this.dataConf['actionColumns'];
            this.echangeData.displayedColumns = this.dataConf['displayedColumns'];
            console.log(' ngOninit echange data ', JSON.stringify(this.echangeData));
            //this.getAllObjects();
            let o = {};
            //{'User':localStorage.getItem('user')}
            if (this.activeRoute.snapshot.params.req != undefined) {
                let req = this.activeRoute.snapshot.params.req;
                //  o['R_params_id']=req;
                o['Compteur'] = req;
            }
            console.log(' getALLOBject ', this.sheet, o);
            this.spinerSelectedField = true;
            this.echangeData.data = yield this.getDataByCols(o, this.sheet);
            ///applay sort 
            this.echangeData.data.sort((a, b) => new Date(b[this.sortField]).getTime() - new Date(a[this.sortField]).getTime());
            console.log(' getALLOBject Data ', this.echangeData.data);
            if (this.activeRoute.snapshot.params.req != undefined) {
                let event = {};
                event['action'] = 'details';
                event['data'] = []; //.push(ddata[0])
                event['data'].push(this.echangeData.data[0]);
                this.actionHandler1(event);
            }
            // })
            this.spinerSelectedField = false;
            console.log(' getAllDataObjec before brfore  ', this.activeRoute.snapshot.params.req);
        });
    }
    deleteRowSheet(id, sheet) {
        return this.crudService.deleteRowSheet(id, sheet).toPromise();
    }
    actionHandler1(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.action = event['action'];
            let data = event['data'][0];
            console.log('action ', this.action, ' actionHandler1 event ', event);
            if (this.action == 'delete') {
                if (window.confirm('Are sure you want to delete this row ?')) {
                    this.spinerSelectedField = true;
                    const resp = yield this.deleteRowSheet(data['compteur_id'], this.sheet);
                    this.spinerSelectedField = false;
                    this.reloadData("delete");
                }
            }
            else {
                this.crudData = {};
                this.crudData['data'] = data;
                this.crudData['action'] = this.action;
                console.log(' actionHandler1  crud data ', this.crudData);
            }
        });
    }
    getDataByCols(data, sheet) {
        // let paramString1='colName=Ref_Request&colValue='+this.echangeData['Ref_Request']+'&sheet=userRequestValidation'
        return this.mainService.getDataByCols(sheet, data).toPromise();
    }
    reloadData(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.action = 'list';
            console.log(' reloadData ', JSON.stringify(event), 'echangeData', JSON.stringify(this.echangeData));
            this.echangeData.actionColumns = this.dataConf['actionColumns'];
            if (event != null) {
                //this.childC.ngAfterViewInit();
                this.echangeData.data = [];
                this.spinerSelectedField = true;
                let o = {};
                this.echangeData.data = yield this.getDataByCols(o, this.sheet);
                this.echangeData.data.sort((a, b) => new Date(b[this.sortField]).getTime() - new Date(a[this.sortField]).getTime());
                console.log(' getALLOBject Data ', this.echangeData.data);
                this.spinerSelectedField = false;
            }
        });
    }
}
compteurListComponent.ɵfac = function compteurListComponent_Factory(t) { return new (t || compteurListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
compteurListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: compteurListComponent, selectors: [["app-compteur-list"]], viewQuery: function compteurListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](src_app_components_navbar_user_navbar_user_component__WEBPACK_IMPORTED_MODULE_2__["NavbarUserComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.childC = _t.first);
    } }, decls: 14, vars: 4, consts: [["mode", "side", 3, "sidenavToggle"], ["mode", "side", "opened", "true"], ["sidenav", ""], ["mode", "side", 3, "sidenavClose"], [2, "overflow", "scroll", "height", "700px"], [1, "container"], ["class", "wrapper", "style", "padding-top: 200px; height: 20px; align-self: center", 4, "ngIf"], ["class", "row", 4, "ngIf"], [4, "ngIf"], ["style", "text-align: center", 4, "ngIf"], [1, "wrapper", 2, "padding-top", "200px", "height", "20px", "align-self", "center"], ["mode", "indeterminate", "diameter", "40", 1, "inner", 2, "left", "50%"], [1, "row"], [3, "echangeData", "countChanged"], [3, "echangeObject", "countChanged"], [2, "text-align", "center"]], template: function compteurListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-navbar-user", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sidenavToggle", function compteurListComponent_Template_app_navbar_user_sidenavToggle_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "app-sidenav-list-admin", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sidenavClose", function compteurListComponent_Template_app_sidenav_list_admin_sidenavClose_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "main", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, compteurListComponent_div_10_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, compteurListComponent_div_11_Template, 5, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, compteurListComponent_div_12_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, compteurListComponent_div_13_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.spinerSelectedField);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.echangeData.data.length > 0 && ctx.action === "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.action == "add" || ctx.action == "details" || ctx.action == "update");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.action == "");
    } }, directives: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"], src_app_components_navbar_user_navbar_user_component__WEBPACK_IMPORTED_MODULE_2__["NavbarUserComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenav"], _navidation_sidenav_list_admin_sidenav_list_admin_component__WEBPACK_IMPORTED_MODULE_9__["SidenavListAdminComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinner"], _components_dynamic_table_list_dynamic_table_list_component__WEBPACK_IMPORTED_MODULE_12__["DynamicTableListComponent"], _compteur_crud_compteur_crud_component__WEBPACK_IMPORTED_MODULE_13__["compteurCrudComponent"]], styles: ["mat-sidenav-container[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    height: 100%;\r\n    min-height: 100%;\r\n    width: 100%;\r\n    min-width: 100%;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY29tcHRldXIvY29tcHRldXItbGlzdC9jb21wdGV1ci1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZUFBZTtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbXB0ZXVyL2NvbXB0ZXVyLWxpc3QvY29tcHRldXItbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](compteurListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-compteur-list',
                templateUrl: './compteur-list.component.html',
                styleUrls: ['./compteur-list.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"] }, { type: src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }]; }, { childC: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [src_app_components_navbar_user_navbar_user_component__WEBPACK_IMPORTED_MODULE_2__["NavbarUserComponent"], { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/views/document/add-document/add-document.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/document/add-document/add-document.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddDocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDocumentComponent", function() { return AddDocumentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _components_navbar_user_navbar_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/navbar-user/navbar-user.component */ "./src/app/components/navbar-user/navbar-user.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _navidation_sidenav_list_admin_sidenav_list_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../navidation/sidenav-list-admin/sidenav-list-admin.component */ "./src/app/navidation/sidenav-list-admin/sidenav-list-admin.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

//import { MatDialogRef } from '@angular/material/dialog';












function AddDocumentComponent_div_33_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Type is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddDocumentComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddDocumentComponent_div_33_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.type.errors.required);
} }
function AddDocumentComponent_div_46_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Origin is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddDocumentComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddDocumentComponent_div_46_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.origin.errors.required);
} }
function AddDocumentComponent_div_53_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Titre is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddDocumentComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddDocumentComponent_div_53_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.titre.errors);
} }
function AddDocumentComponent_div_60_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "File is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddDocumentComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddDocumentComponent_div_60_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.fileName.errors.required);
} }
function AddDocumentComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("La taille de photo doit \u00E9tre 50Ko (50-300)X(50-300) : ", ctx_r5.size, " (", ctx_r5.width, " ", ctx_r5.height, ") ");
} }
function AddDocumentComponent_div_68_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddDocumentComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddDocumentComponent_div_68_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f.description.errors.required);
} }
function AddDocumentComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r7.sanitizer.bypassSecurityTrustResourceUrl(ctx_r7.imgURL), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class AddDocumentComponent {
    constructor(newsService, httpclient, formBuilder, sanitizer, router
    //,    public dialogRef : MatDialogRef<AddNewsComponent>
    ) {
        this.newsService = newsService;
        this.httpclient = httpclient;
        this.formBuilder = formBuilder;
        this.sanitizer = sanitizer;
        this.router = router;
        this.champs = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]);
        this.ListFields = ['checkbox', 'text', 'selection'];
        this.imgURL = "";
        this.dataObject = [];
        this.dataString = '';
        this.imgValid = true;
        this.width = 0;
        this.height = 0;
        this.size = 0;
        this.previsualisation = false;
        this.submitted = false;
        this.champs.push(this.formBuilder.group({
            type: '',
            label: '',
            help: ''
        }));
        this.registerForm = this.formBuilder.group({
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            titre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            origin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fileName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    ngOnInit() {
        console.log(' test add-news');
        //this.imgURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA+CAYAAAC875yHAAAZrXpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjarZppkhs7doX/YxVeAqaLYTkYI7wDL9/fASn1k566ox1uVahIZiUzgTucAUh3/ue/r/sv/pWQs8tWW+mleP7lnnscvGn+82+838Hn9/v9s++f+PzLcZfO9w+RQ4nX9PnYyvf8H8fDzwt8Xgbv7C8Xauv7h/nrH3r+Xr/9dqH4eUkakd7v74X690Ipfv4QvhcYn2n50lv96xTmdwb7xxTb57/Tr7i+p31P/v1zrkRvG/dJMZ4Ukud3TPEzgKT/waXBG+N3TJkTQ8q8Nz6NlNKPixGQP8XJ/2VU7ves/Hz3W1ZW+XNSUvmc4TjwazDLz9c/Hg/22/HvBd0L8V/unH7EJ/56fO5Qfp/Oj//37ubuPZ/ZjVwIaflO6md09IYTJyFP72uFn8p/4319P52f5qjeRcq3X37ys0IPkbTckMMOI9xw3usKiyHmeGLlNcZFonSspRp7XInKVp74CTfW1NNOjYwt0ps4Gn+OJbz79ne7FRo33oEzY+BiQaXg9Os/8fNPL3SvSj4EBXN9Usy4ooqQYShz+s1ZJCTcH3VkL8A/fn7/p7wmMmgvzI0JDj8/l5gWvrWlOkov0YkTjddPr4W6vxcgRNzbGExIZMCXkCyU4GuMNQTi2MjP4EJNvTFJQTCLm1HGnFIhOS3q3nynhndutPg5DGaRCEslVVLT0yBXAjbqp+ZGDQ1Lls2sWLVm3UZJJRcrpdQi8Bs11Vytllprq72Ollpu1kqrrbnW2+ixJ8DReum1t977GNx0cOXBtwcnjDHjTDNPm2XW2WafY1E+Ky9bZdXV3Opr7LjTBid22XW33fc44VBKJx875dTTTj/jUmo33Xztlltvu/2On1kL7pPWv/38+1kLP…'
    }
    onFileChanged(event) {
        if (event.target.files && event.target.files[0]) {
            this.csv = event.target.files[0]; // get the file name 
            console.log(' file ', this.csv);
            var reader = new FileReader();
            if ((this.csv.name.split('.').pop().includes('doc') || this.csv.name.split('.').pop().includes('xls'))) {
                alert(' No previsualisation for  ' + this.csv.name.split('.').pop() + '   file ');
                this.imgURL = "";
                //this.registerForm.controls['fileName'].setValue('')
                this.previsualisation = false;
            }
            else
                this.previsualisation = true;
            reader.readAsDataURL(this.csv);
            reader.onload = () => {
                this.imgURL = reader.result.toString();
                console.log(this.registerForm.value.fileName + 'length  ' + this.imgURL.length);
            };
        }
    }
    removeInput(index) { this.registerForm.get('champs')['controls'].splice(index, 1); }
    get f() { return this.registerForm.controls; }
    onSubmit() {
        console.log(this.imgURL);
        this.registerForm.addControl('base64', this.formBuilder.control(''));
        this.registerForm.controls['base64'].setValue(this.imgURL);
        //this.registerForm.controls['fileName'].setValue(this.registerForm.get('name').value)
        // this.registerForm.controls['fileName'].setValue(this.csv)
        console.log('form :', this.registerForm.value);
        this.submitted = true;
        // stop here if form is invalid
        // if (this.registerForm.invalid) {
        //     return;
        // }
        // display form values on success
        var img = img = new Image();
        img.src = this.registerForm.value.fileName;
        var width = img.clientWidth;
        var height = img.clientHeight;
        // alert('SUCCESS!! :-)\n\n' + width +'  '+height +'  '+ JSON.stringify(this.registerForm.value, null, 4));
        console.log(this.registerForm.value.type + ' ' + this.registerForm.value.origin);
        this.dataObject = this.registerForm.value;
        this.dataString = this.registerForm.value.type + '~~' + this.registerForm.value.origin + '~~' + this.registerForm.value.name + '~~' + this.registerForm.value.description + '~~' + this.registerForm.value.fileName + '~~' + this.registerForm.value.base64;
        //this.dataString=this.registerForm.value.type+'~~'+this.registerForm.value.origin+'~~'+this.registerForm.value.name+'~~'+this.registerForm.value.description+'~~'+this.registerForm.value.fileName+'~~base64'
        console.log('type  ' + JSON.stringify(this.registerForm.value));
        this.newsService.insertJsonDataToSheet(this.registerForm.value, 'document').subscribe(data => {
            alert(' les données ont été sauvegarder dans la base ');
            this.router.navigate(['ListDocuments']);
        }, error => console.log(error));
    }
    onReset() {
        this.submitted = false;
        this.registerForm.reset();
        this.router.navigate(['ListDocuments']);
    }
}
AddDocumentComponent.ɵfac = function AddDocumentComponent_Factory(t) { return new (t || AddDocumentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AddDocumentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddDocumentComponent, selectors: [["app-add-document"]], decls: 83, vars: 23, consts: [["mode", "side", 3, "sidenavToggle"], ["mode", "side", "opened", "true"], ["sidenav", ""], ["mode", "side", 3, "sidenavClose"], [1, "container"], [3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "row"], [1, "row", "col-8"], [1, "form-group", "col-6"], ["formControlName", "type", 1, "form-control", 3, "ngClass"], ["value", ""], ["value", "input"], ["value", "treat"], ["value", "output"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "origin", 1, "form-control", 3, "ngClass"], ["value", "local"], ["value", "spark"], [1, "form-group", "col-12"], ["type", "text", "formControlName", "titre", 1, "form-control", 3, "ngClass"], ["type", "file", "formControlName", "fileName", 1, "form-control", 3, "ngClass", "change"], ["style", "color: red;font-size: small;", 4, "ngIf"], ["type", "text", "formControlName", "description", 1, "form-control", 3, "ngClass"], [1, "form-group", "col-4"], [1, "card"], ["id", "header-finalizado", 1, "card-header"], ["class", "card-body", 4, "ngIf"], [1, "text-center", "col-8"], ["type", "submit", 1, "btn", "btn-primary", "mr-1"], ["type", "reset", 1, "btn", "btn-secondary", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"], [2, "color", "red", "font-size", "small"], [1, "card-body"], ["width", "400px", "height", "400px", 3, "src"]], template: function AddDocumentComponent_Template(rf, ctx) { if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-navbar-user", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sidenavToggle", function AddDocumentComponent_Template_app_navbar_user_sidenavToggle_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-sidenav-list-admin", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sidenavClose", function AddDocumentComponent_Template_app_sidenav_list_admin_sidenavClose_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Upload Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "BR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "BR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "BR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddDocumentComponent_Template_form_ngSubmit_17_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Vie Commune");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Etat Financier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "R\u00E9glement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AddDocumentComponent_div_33_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Origin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Syndic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Coopropri\u00E9taire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Autre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, AddDocumentComponent_div_46_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "BR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Titre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, AddDocumentComponent_div_53_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Fichier photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddDocumentComponent_Template_input_change_59_listener($event) { return ctx.onFileChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, AddDocumentComponent_div_60_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, AddDocumentComponent_div_61_Template, 2, 3, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "BR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, AddDocumentComponent_div_68_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Preview File");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, AddDocumentComponent_div_74_Template, 2, 1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "BR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "BR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddDocumentComponent_Template_button_click_81_listener() { return ctx.onReset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.submitted && ctx.f.type.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.type.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.submitted && ctx.f.origin.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.origin.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.submitted && ctx.f.titre.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.titre.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.submitted && ctx.f.fileName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.fileName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.imgValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.submitted && ctx.f.description.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.description.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imgURL.length > 10 && ctx.previsualisation);
    } }, directives: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"], _components_navbar_user_navbar_user_component__WEBPACK_IMPORTED_MODULE_7__["NavbarUserComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenav"], _navidation_sidenav_list_admin_sidenav_list_admin_component__WEBPACK_IMPORTED_MODULE_9__["SidenavListAdminComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2RvY3VtZW50L2FkZC1kb2N1bWVudC9hZGQtZG9jdW1lbnQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddDocumentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-document',
                templateUrl: './add-document.component.html',
                styleUrls: ['./add-document.component.css']
            }]
    }], function () { return [{ type: src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/landing-user/landing-user.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/landing-user/landing-user.component.ts ***!
  \**************************************************************/
/*! exports provided: LandingUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingUserComponent", function() { return LandingUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _components_navbar_user_navbar_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/navbar-user/navbar-user.component */ "./src/app/components/navbar-user/navbar-user.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _navidation_sidenav_list_admin_sidenav_list_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../navidation/sidenav-list-admin/sidenav-list-admin.component */ "./src/app/navidation/sidenav-list-admin/sidenav-list-admin.component.ts");
/* harmony import */ var _components_landing_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/landing-carousel/carousel.component */ "./src/app/components/landing-carousel/carousel.component.ts");








class LandingUserComponent {
    constructor(activeRoute) {
        this.activeRoute = activeRoute;
    }
    ngOnInit() {
        localStorage.setItem('route', 'landing-user');
        localStorage.setItem('page', 'Accueil');
        localStorage.setItem('route', this.activeRoute.snapshot.routeConfig.path);
    }
}
LandingUserComponent.ɵfac = function LandingUserComponent_Factory(t) { return new (t || LandingUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
LandingUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingUserComponent, selectors: [["app-landing-user"]], decls: 10, vars: 0, consts: [["mode", "side", 3, "sidenavToggle"], ["mode", "side", "opened", "true"], ["sidenav", ""], ["mode", "side", 3, "sidenavClose"]], template: function LandingUserComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-navbar-user", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sidenavToggle", function LandingUserComponent_Template_app_navbar_user_sidenavToggle_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-sidenav-list-admin", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sidenavClose", function LandingUserComponent_Template_app_sidenav_list_admin_sidenavClose_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"], _components_navbar_user_navbar_user_component__WEBPACK_IMPORTED_MODULE_3__["NavbarUserComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], _navidation_sidenav_list_admin_sidenav_list_admin_component__WEBPACK_IMPORTED_MODULE_5__["SidenavListAdminComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContent"], _components_landing_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__["CarouselComponent"]], styles: [".landing-button[_ngcontent-%COMP%]{\n    background-color: #feda3f;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n    position: fixed;\n    height: 100%;\n    min-height: 100%;\n    width: 100%;\n    min-width: 100%;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGFuZGluZy11c2VyL2xhbmRpbmctdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGVBQWU7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9sYW5kaW5nLXVzZXIvbGFuZGluZy11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFuZGluZy1idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZGEzZjtcbn1cblxubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuIH1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-user',
                templateUrl: './landing-user.component.html',
                styleUrls: ['./landing-user.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/news/news-crud/add-news.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/news/news-crud/add-news.component.ts ***!
  \************************************************************/
/*! exports provided: AddNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewsComponent", function() { return AddNewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _navidation_sidenav_list_admin_sidenav_list_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../navidation/sidenav-list-admin/sidenav-list-admin.component */ "./src/app/navidation/sidenav-list-admin/sidenav-list-admin.component.ts");
/* harmony import */ var _components_navbar_user_navbar_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/navbar-user/navbar-user.component */ "./src/app/components/navbar-user/navbar-user.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");


//import { MatDialogRef } from '@angular/material/dialog';










function AddNewsComponent_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Type is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddNewsComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddNewsComponent_div_27_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.f.type.errors.required);
} }
function AddNewsComponent_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Origin is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddNewsComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddNewsComponent_div_40_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.f.origin.errors.required);
} }
function AddNewsComponent_div_47_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Titre is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddNewsComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddNewsComponent_div_47_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.f.titre.errors.required);
} }
function AddNewsComponent_div_54_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Photo is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddNewsComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddNewsComponent_div_54_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.f.fileName.errors.required);
} }
function AddNewsComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("La taille de photo doit \u00E9tre 50Ko (50-300)X(50-300) : ", ctx_r5.size, " (", ctx_r5.width, " ", ctx_r5.height, ") ");
} }
function AddNewsComponent_div_62_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Description is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddNewsComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddNewsComponent_div_62_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.f.description.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
//import { RxwebValidators } from '@rxweb/reactive-form-validators';
class AddNewsComponent {
    constructor(crudService, httpclient, formBuilder
    //,    public dialogRef : MatDialogRef<AddNewsComponent>
    ) {
        this.crudService = crudService;
        this.httpclient = httpclient;
        this.formBuilder = formBuilder;
        this.champs = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
        this.ListFields = ['checkbox', 'text', 'selection'];
        this.dataObject = [];
        this.dataString = '';
        this.imgValid = true;
        this.width = 0;
        this.height = 0;
        this.size = 0;
        this.submitted = false;
        this.champs.push(this.formBuilder.group({
            type: '',
            label: '',
            help: ''
        }));
        this.registerForm = this.formBuilder.group({
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            titre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fileName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Origin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            /*,
            profilePhoto:['', [
              RxwebValidators.image({maxHeight:100,maxWidth:100 }),
              RxwebValidators.extension({extensions:["jpeg","gif"]})
              ]
         ]*/
        });
    }
    ngOnInit() {
        console.log(' test add-news');
        this.registerForm.addControl('base64', this.formBuilder.control(''));
        //this.imgURL='data:image/jpeg;base64,PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KPGhlYWQ+CiAgPG1ldGEgY2hhcnNldD0idXRmLTgiPgogIDx0aXRsZT5EYWs8L3RpdGxlPgogIDxiYXNlIGhyZWY9Ii8iPgogIDxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSI+CiAgPGxpbmsgcmVsPSJpY29uIiB0eXBlPSJpbWFnZS94LWljb24iIGhyZWY9ImZhdmljb24uaWNvIj4KICA8bGluayBocmVmPSJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNTAwJmRpc3BsYXk9c3dhcCIgcmVsPSJzdHlsZXNoZWV0Ij4KICA8bGluayBocmVmPSJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zIiByZWw9InN0eWxlc2hlZXQiPgo8L2hlYWQ+Cjxib2R5PgogIDxhcHAtcm9vdD48L2FwcC1yb290Pgo8c2NyaXB0IHNyYz0icnVudGltZS5qcyIgdHlwZT0ibW9kdWxlIj48L3NjcmlwdD48c2NyaXB0IHNyYz0icG9seWZpbGxzLmpzIiB0eXBlPSJtb2R1bGUiPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSJzdHlsZXMuanMiIHR5cGU9Im1vZHVsZSI+PC9zY3JpcHQ+PHNjcmlwdCBzcmM9InNjcmlwdHMuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSJ2ZW5kb3IuanMiIHR5cGU9Im1vZHVsZSI+PC9zY3JpcHQ+PHNjcmlwdCBzcmM9Im1haW4uanMiIHR5cGU9Im1vZHVsZSI+PC9zY3JpcHQ+PC9ib2R5Pgo8L2h0bWw+Cg=='
    }
    onFileChanged(event) {
        var img = img = new Image();
        this.imgValid = true;
        this.csv = event.target.files[0]; // get the file name 
        console.log('onFileChanged  ', this.csv);
        //this.imgURL=this.csv.name;
        const reader1 = new FileReader();
        reader1.readAsDataURL(this.csv);
        reader1.onload = () => {
            console.log(reader1.result);
            this.imgURL = reader1.result;
            this.registerForm.controls['base64'].setValue(this.imgURL);
        };
        /* if ( this.imgURL.length > 50000 ||  img.width <10 || img.width > 450  || img.height > 350 || img.height < 10 ){
            alert(' choose photo failed !! :-)\n\n' + img.width +'  '+img.height );
            this.imgValid=false;
            console.log(' valide '+this.imgValid)
            this.imgURL=null
            }*/
        /*  var reader = new FileReader();
        
        reader.readAsDataURL(this.csv);
        reader.onload = () => {
          this.imgURL = reader.result;
          console.log('result',reader.result)
          img.src=this.imgURL
          this.size=this.imgURL.length
          img.load=()=>{
            this.width=img.width
            this.height=img.height
            console.log('this.imgURL ' ,this.imgURL)
          console.log(this.registerForm.value.icon +'length  '+this.imgURL.length+'this.imgURL '+img.width+' width '+img.height)
         
        
        }
        }*/
    }
    removeInput(index) { this.registerForm.get('champs')['controls'].splice(index, 1); }
    get f() { return this.registerForm.controls; }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.registerForm.controls['base64'].value);
            console.log(this.imgURL);
            //   this.registerForm.addControl('base64',this.formBuilder.control(''))
            // this.registerForm.controls['base64'].setValue(this.imgURL)
            //this.registerForm.controls['icon'].setValue(this.registerForm.get('name').value)
            // this.registerForm.controls['icon'].setValue(this.csv)
            console.log('form :', this.registerForm.value);
            this.submitted = true;
            // stop here if form is invalid
            // if (this.registerForm.invalid) {
            //     return;
            // }
            // display form values on success
            var img = img = new Image();
            img.src = this.registerForm.value.icon;
            var width = img.clientWidth;
            var height = img.clientHeight;
            alert('SUCCESS!! :-)\n\n' + width + '  ' + height + '  ' + JSON.stringify(this.registerForm.value, null, 4));
            console.log(this.registerForm.value.type + ' ' + this.registerForm.value.origin);
            this.dataObject = this.registerForm.value;
            this.dataString = this.registerForm.value.type + '~~' + this.registerForm.value.origin + '~~' + this.registerForm.value.name + '~~' + this.registerForm.value.description + '~~' + this.registerForm.value.icon + '~~' + this.registerForm.value.base64;
            console.log('type  ' + JSON.stringify(this.registerForm.value.base64String));
            var myDate = new Date();
            let today = myDate.getFullYear() + '-' + (('0' + (myDate.getMonth() + 1)).slice(-2)) + '-' + ('0' + myDate.getDate()).slice(-2);
            this.dataObject['Start_Date'] = today;
            myDate.setDate(myDate.getDate() + 15);
            let end_date = myDate.getFullYear() + '-' + (('0' + (myDate.getMonth() + 1)).slice(-2)) + '-' + ('0' + myDate.getDate()).slice(-2);
            this.dataObject['End_Date'] = end_date;
            console.log('  this.dataForm length 0000000', JSON.stringify(this.dataObject));
            /*await this.crudService.insertJsonDataToSheet(data,'dataObject').subscribe(data => {
             
             console.log(' retour 0000000',data);
            }
            ) */
            let responseData = yield this.insertJsonDataToSheet(this.dataObject);
            alert(' Les données ont été enregistrées ');
            /*this.newsService.appendNews(this.registerForm.value).subscribe(
              data => console.log(data),
              error => console.log(error)
            );*/
        });
    }
    insertJsonDataToSheet(data) {
        // let paramString1='colName=Ref_Request&colValue='+this.echangeData['Ref_Request']+'&sheet=userRequestValidation'
        return this.crudService.insertJsonDataToSheet(data, 'News').toPromise();
    }
    updateJsonDataToSheet(data) {
        // let paramString1='colName=Ref_Request&colValue='+this.echangeData['Ref_Request']+'&sheet=userRequestValidation'
        return this.crudService.updateJsonDataToSheet(data, 'News').toPromise();
    }
    buildOjectFromDataForm(obj) {
        var data = {};
        for (var el in obj) {
            console.log(el, obj[el]['value']);
            data[el] = obj[el]['value'];
        }
        return data;
    }
    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}
AddNewsComponent.ɵfac = function AddNewsComponent_Factory(t) { return new (t || AddNewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
AddNewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddNewsComponent, selectors: [["app-add-news"]], decls: 75, vars: 23, consts: [["role", "navigation"], ["sidenav", ""], ["mode", "side", 3, "sidenavClose"], ["mode", "side", 3, "sidenavToggle"], [1, "container"], [1, "col-12", "card-user"], [3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "row"], [1, "row", "col-8"], [1, "form-group", "col-6"], ["formControlName", "type", 1, "form-control", 3, "ngClass"], ["value", ""], ["value", "Vie Commune"], ["value", "Etat Financier"], ["value", "R\u00E9glement"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "Origin", 1, "form-control", 3, "ngClass"], ["value", "Syndic"], ["value", "Coopropri\u00E9taire"], ["value", "Autre"], [1, "form-group", "col-12"], ["type", "text", "formControlName", "titre", 1, "form-control", 3, "ngClass"], ["type", "file", "formControlName", "fileName", 1, "form-control", 3, "ngClass", "change"], ["style", "color: red;font-size: small;", 4, "ngIf"], ["type", "text", "formControlName", "description", 1, "form-control", 3, "ngClass"], [1, "form-group", "col-4"], [1, "card"], ["id", "header-finalizado", 1, "card-header"], [1, "card-body"], ["formControlName", "base64", 1, "form-control", 3, "src"], [1, "text-center", "col-6"], ["type", "submit", 1, "btn", "btn-primary", "mr-1"], ["type", "reset", 1, "btn", "btn-secondary", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"], [2, "color", "red", "font-size", "small"]], template: function AddNewsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-sidenav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-sidenav-list-admin", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sidenavClose", function AddNewsComponent_Template_app_sidenav_list_admin_sidenavClose_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "app-navbar-user", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sidenavToggle", function AddNewsComponent_Template_app_navbar_user_sidenavToggle_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddNewsComponent_Template_form_ngSubmit_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Vie Commune");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Etat Financier");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "R\u00E9glement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, AddNewsComponent_div_27_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Origin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Syndic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Coopropri\u00E9taire");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Autre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, AddNewsComponent_div_40_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "BR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Titre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, AddNewsComponent_div_47_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Fichier photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddNewsComponent_Template_input_change_53_listener($event) { return ctx.onFileChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, AddNewsComponent_div_54_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, AddNewsComponent_div_55_Template, 2, 3, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "BR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "textarea", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, AddNewsComponent_div_62_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddNewsComponent_Template_button_click_73_listener() { return ctx.onReset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, ctx.submitted && ctx.f.type.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.type.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, ctx.submitted && ctx.f.origin.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.origin.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c0, ctx.submitted && ctx.f.titre.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.titre.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c0, ctx.submitted && ctx.f.fileName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.fileName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.imgValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c0, ctx.submitted && ctx.f.description.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.description.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.imgURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, directives: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenav"], _navidation_sidenav_list_admin_sidenav_list_admin_component__WEBPACK_IMPORTED_MODULE_7__["SidenavListAdminComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContent"], _components_navbar_user_navbar_user_component__WEBPACK_IMPORTED_MODULE_8__["NavbarUserComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL25ld3MvbmV3cy1jcnVkL2FkZC1uZXdzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddNewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-add-news',
                templateUrl: './add-news.component.html',
                styleUrls: ['./add-news.component.css']
            }]
    }], function () { return [{ type: src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/news/news-list/news-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/news/news-list/news-list.component.ts ***!
  \*************************************************************/
/*! exports provided: newsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsListComponent", function() { return newsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _components_navbar_user_navbar_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/navbar-user/navbar-user.component */ "./src/app/components/navbar-user/navbar-user.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _navidation_sidenav_list_admin_sidenav_list_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../navidation/sidenav-list-admin/sidenav-list-admin.component */ "./src/app/navidation/sidenav-list-admin/sidenav-list-admin.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");










function newsListComponent_mat_card_11_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const module_r6 = ctx.$implicit;
    const j_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "colapsOne" + j_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-bs-target", "#collapseOne" + j_r7)("aria-controls", "collapseOne" + j_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", module_r6.base64, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 9, module_r6.Start_Date, "dd/MM/y"), " : ", module_r6.titre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "collapseOne" + j_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", module_r6.base64, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](module_r6.description);
} }
function newsListComponent_mat_card_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Les derni\u00E8res informations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, newsListComponent_mat_card_11_div_6_Template, 15, 12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.moduleInputVieComune);
} }
function newsListComponent_mat_card_13_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const module_r9 = ctx.$implicit;
    const j_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "colapsOne" + j_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-bs-target", "#collapseTwo" + j_r10)("aria-controls", "collapseTwo" + j_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", module_r9.base64, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 9, module_r9.Start_Date, "dd/MM/y"), " : ", module_r9.titre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "collapseTwo" + j_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", module_r9.base64, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](module_r9.description);
} }
function newsListComponent_mat_card_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Les Communiqu\u00E9s & R\u00E9glement");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, newsListComponent_mat_card_13_div_6_Template, 15, 12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.moduleInputReglement);
} }
function newsListComponent_mat_card_14_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const module_r12 = ctx.$implicit;
    const j_r13 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "colapsOne" + j_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-bs-target", "#collapseTree" + j_r13)("aria-controls", "collapseTree" + j_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", module_r12.base64, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 9, module_r12.Start_Date, "dd/MM/y"), " : ", module_r12.titre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "collapseTree" + j_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", module_r12.base64, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](module_r12.description);
} }
function newsListComponent_mat_card_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Les Etats Financiers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, newsListComponent_mat_card_14_div_6_Template, 15, 12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.moduleInputEtatFinancier);
} }
function newsListComponent_mat_card_15_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function newsListComponent_mat_card_15_tr_15_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const doc_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.onClickDownloadPdf(doc_r15.base64, doc_r15.fileName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const doc_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](doc_r15.titre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](doc_r15.description);
} }
function newsListComponent_mat_card_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Liste des documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Titre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, newsListComponent_mat_card_15_tr_15_Template, 8, 2, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.moduleDocument);
} }
class newsListComponent {
    constructor(servicioUsuario, activateRoute) {
        this.servicioUsuario = servicioUsuario;
        this.activateRoute = activateRoute;
        this.moduleInput = [];
        this.moduleInputReglement = [];
        this.moduleInputVieComune = [];
        this.moduleInputEtatFinancier = [];
        this.moduleDocument = [];
        this.filterInfos = { title: 'hello' };
        this.filterReglement = { type: 'Réglement' };
        this.open = true;
        this.i = 0;
        this.index = 1000;
        this.uploading = true;
    }
    showdetails(j) {
        this.index = j;
        this.open = true;
        console.log(' index ' + j);
    }
    ngOnInit() {
        this.open = true;
        this.uploading = false;
        localStorage.setItem('route', this.activateRoute.snapshot.routeConfig.path);
        console.log('route', this.activateRoute.snapshot.routeConfig.path);
        if (this.activateRoute.snapshot.routeConfig.path == "ListNews") {
            this.getAllNews();
            console.log(' this.moduleInput ', this.moduleInput);
        }
        if (this.activateRoute.snapshot.routeConfig.path == "ListDocuments") {
            this.getAllDocuments();
            console.log(' this.moduleDocument ', this.moduleDocument);
        }
    }
    getAllDocuments() {
        this.servicioUsuario.getDataByCols("document", {}).subscribe(response => {
            this.moduleDocument = response;
            // console.log(' getAllDocuments '+JSON.stringify(response))
            console.log(' getAllDocuments ' + response[0].origine);
        });
    }
    getAllNews() {
        this.servicioUsuario.getDataByCols("news", {}).subscribe(response => {
            //this.moduleInput=response;
            //this.image=this.moduleInput[0].base64;
            let sysdate = new Date();
            sysdate.setDate(sysdate.getDate() + 1);
            // console.log(' getAllNews sysdate '+sysdate.getTime(),'  ',this.moduleInput[0] );//, ' End Date ',this.moduleInput[0]['End_Date'])
            // this.moduleInput=response.filter(el => el.End_Date.getTime() < sysdate.getTime());
            for (var el in response) {
                //console.log(' response[el] ',el)
                try {
                    let d = new Date(response[el]['End_Date']);
                    console.log(response[el]['News_id'], '  d.getDate() > sysdate.getDate()  ', d.getTime(), '  ', sysdate.getTime(), '  ', d.getTime() > sysdate.getTime());
                    if (d.getTime() > sysdate.getTime()) {
                        if (response[el]['type'] == 'Réglement')
                            this.moduleInputReglement.push(response[el]);
                        if (response[el]['type'] == 'Vie Commune')
                            this.moduleInputVieComune.push(response[el]);
                        if (response[el]['type'] == 'Etat Financier')
                            this.moduleInputEtatFinancier.push(response[el]);
                    }
                }
                catch (_a) { }
            }
            //this.moduleInput  = this.propOrderFirst("End_Date",this.moduleInput);
            this.moduleInputVieComune.sort((a, b) => new Date(b.Start_Date).getTime() - new Date(a.Start_Date).getTime());
            this.moduleInputReglement.sort((a, b) => new Date(b.Start_Date).getTime() - new Date(a.Start_Date).getTime());
            this.moduleInputEtatFinancier.sort((a, b) => new Date(b.Start_Date).getTime() - new Date(a.Start_Date).getTime());
            //console.log(' getAllNews '+JSON.stringify(response))
            console.log(' getAllNews ' + JSON.stringify(this.moduleInput));
        });
    }
    downloadPdf(base64String, vfileToBeName) {
        //let vfileToBeName =this.echangeData['Attached_File']
        const source = base64String;
        const link = document.createElement("a");
        link.href = source;
        link.download = `${vfileToBeName}`;
        link.click();
    }
    downloadPdf1(base64String, fileName) {
        console.log('downloadPdf(' + base64String + '  \n' + fileName);
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            // download PDF in IE
            let byteChar = atob(base64String);
            let byteArray = new Array(byteChar.length);
            for (let i = 0; i < byteChar.length; i++) {
                byteArray[i] = byteChar.charCodeAt(i);
            }
            let uIntArray = new Uint8Array(byteArray);
            let blob = new Blob([uIntArray], { type: 'application/pdf' });
            window.navigator.msSaveOrOpenBlob(blob, `${fileName}`);
        }
        else {
            // Download PDF in Chrome etc.
            //const source = 'data:image/jpeg;base64;base64,${base64String}';
            const source = base64String;
            const link = document.createElement("a");
            link.href = source;
            link.download = `${fileName}`;
            link.click();
        }
    }
    onClickDownloadPdf(base64String, filename) {
        //let base64String = "your-base64-string";
        this.downloadPdf(base64String, filename);
    }
}
newsListComponent.ɵfac = function newsListComponent_Factory(t) { return new (t || newsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
newsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: newsListComponent, selectors: [["app-news-list"]], decls: 16, vars: 4, consts: [["mode", "side", 3, "sidenavToggle"], ["mode", "side", "opened", "true"], ["sidenav", ""], ["mode", "side", 3, "sidenavClose"], [1, "container"], ["class", "centres-card", 4, "ngIf"], [1, "centres-card"], ["fxLayout", "", "fxLayoutAlign", "start center"], [2, "font-size", "medium"], ["id", "accordion-reclamos", 1, "accordion"], ["class", "accordion-item", 4, "ngFor", "ngForOf"], [1, "accordion-item"], [1, "accordion-header", 2, "height", "40px"], ["type", "button", "data-bs-toggle", "collapse", "expanded", "true", "aria-expanded", "false", 1, "accordion-button", "en-progreso", 2, "height", "40px", 3, "id"], ["mat-card-avatar", "", 2, "margin-right", "20px", "height", "30px", "width", "30px", "font-size", "small", 3, "src"], ["aria-labelledby", "headingOne", "data-bs-parent", "#accordion-reclamos", 1, "accordion-collapse", "collapse", 3, "id"], [1, "accordion-body"], ["id", "reportcards", 1, "row"], [1, "col-lg-4"], [3, "src"], [1, "col-lg-8"], [1, "form-label", 2, "white-space", "pre"], [1, "table", "table-bordered", "table-striped", "table-responsive-xl"], ["scope", "col-lg-2", 1, "col-lg-2"], ["scope", "col-lg-3", 1, "col-lg-3"], ["scope", "col-lg-1", 1, "col-lg-1"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "material-icons", 3, "click"]], template: function newsListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-navbar-user", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sidenavToggle", function newsListComponent_Template_app_navbar_user_sidenavToggle_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-sidenav-list-admin", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sidenavClose", function newsListComponent_Template_app_sidenav_list_admin_sidenavClose_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, newsListComponent_mat_card_11_Template, 7, 1, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, newsListComponent_mat_card_13_Template, 7, 1, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, newsListComponent_mat_card_14_Template, 7, 1, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, newsListComponent_mat_card_15_Template, 16, 1, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.moduleInputVieComune.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.moduleInputReglement.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.moduleInputEtatFinancier.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.moduleDocument.length > 0);
    } }, directives: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"], _components_navbar_user_navbar_user_component__WEBPACK_IMPORTED_MODULE_4__["NavbarUserComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"], _navidation_sidenav_list_admin_sidenav_list_admin_component__WEBPACK_IMPORTED_MODULE_6__["SidenavListAdminComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardAvatar"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: ["#colapsOne[_ngcontent-%COMP%]{\r\n    background-color: #d8dfff;\r\n  }\r\n#colapsTwo[_ngcontent-%COMP%]{\r\n    background-color: #e1ffdc;\r\n  }\r\n#colapsThree[_ngcontent-%COMP%]{\r\n    background-color: #ffdcdc;\r\n  }\r\n.card-user[_ngcontent-%COMP%]{\r\n    padding:10px;\r\n  }\r\n.card-body[_ngcontent-%COMP%]{\r\n    height: 250px;\r\n  }\r\n.boton[_ngcontent-%COMP%]{\r\n    margin:10px;\r\n    bottom:0px;\r\n    right:0px;\r\n    position:absolute;\r\n  }\r\n.accordion-button[_ngcontent-%COMP%]{\r\n    border:1px;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    border-color:rgb(170, 170, 170);\r\n}\r\n.en-progreso[_ngcontent-%COMP%]{\r\n    background-color: #fffcef;\r\n    color:black;\r\n}\r\n.finalizado[_ngcontent-%COMP%]{\r\n    background-color:#eaf3ff;\r\n    color:black;\r\n}\r\n.con-error[_ngcontent-%COMP%]{\r\n    background-color:#ffe1eb;\r\n    color:black;\r\n}\r\n#header-totales[_ngcontent-%COMP%]{\r\n  background-color: #FFD083;\r\n}\r\n#header-progreso[_ngcontent-%COMP%]{\r\n  background-color: #85c4f3;\r\n}\r\n#header-finalizado[_ngcontent-%COMP%]{\r\n  background-color: #fbe49b;\r\n}\r\n#header-error[_ngcontent-%COMP%]{\r\n  background-color: #faa4b4;\r\n}\r\n.example-header-image[_ngcontent-%COMP%] {\r\n  background-size: cover;\r\n}\r\n.center[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n  \r\n  \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbmV3cy9uZXdzLWxpc3QvbmV3cy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pEO0lBQ0kseUJBQXlCO0VBQzNCO0FBRUY7SUFDSSx5QkFBeUI7RUFDM0I7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUVBO0lBQ0UsWUFBWTtFQUNkO0FBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFFQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0lBQ1YsU0FBUztJQUNULGlCQUFpQjtFQUNuQjtBQUVBO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsK0JBQStCO0FBQ25DO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztBQUNmO0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztBQUNmO0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztBQUNmO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUdFO0lBQ0UsU0FBUztJQUNULGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUVULGdDQUFnQztFQUNsQyxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbmV3cy9uZXdzLWxpc3QvbmV3cy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKnZlcmRlIHBhcmEgZmluYWxpemFkbywgYXp1bCBwYXJhIHBlbmRpZW50ZSwgcm9qbyBlcnJvciovXHJcbiNjb2xhcHNPbmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkZmZmO1xyXG4gIH1cclxuICBcclxuI2NvbGFwc1R3b3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMWZmZGM7XHJcbiAgfVxyXG4gIFxyXG4gICNjb2xhcHNUaHJlZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmRjZGM7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLXVzZXJ7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWJvZHl7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gIH1cclxuICBcclxuICAuYm90b257XHJcbiAgICBtYXJnaW46MTBweDtcclxuICAgIGJvdHRvbTowcHg7XHJcbiAgICByaWdodDowcHg7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB9XHJcblxyXG4gIC5hY2NvcmRpb24tYnV0dG9ue1xyXG4gICAgYm9yZGVyOjFweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1jb2xvcjpyZ2IoMTcwLCAxNzAsIDE3MCk7XHJcbn1cclxuXHJcbi5lbi1wcm9ncmVzb3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZjZWY7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5cclxuLmZpbmFsaXphZG97XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlYWYzZmY7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5cclxuLmNvbi1lcnJvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZTFlYjtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG4jaGVhZGVyLXRvdGFsZXN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDA4MztcclxufVxyXG5cclxuI2hlYWRlci1wcm9ncmVzb3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODVjNGYzO1xyXG59XHJcblxyXG4jaGVhZGVyLWZpbmFsaXphZG97XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZTQ5YjtcclxufVxyXG5cclxuI2hlYWRlci1lcnJvcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFhNGI0O1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcblxyXG4gIC5jZW50ZXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAvKiAgaGVpZ2h0OiAyMDBweDsqL1xyXG4gIC8qICBib3JkZXI6IDNweCBzb2xpZCBncmVlbjsgKi9cclxuICB9XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](newsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news-list',
                templateUrl: './news-list.component.html',
                styleUrls: ['./news-list.component.css']
            }]
    }], function () { return [{ type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/reclamation/reclamation-crud/reclamation-crud.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/reclamation/reclamation-crud/reclamation-crud.component.ts ***!
  \**********************************************************************************/
/*! exports provided: reclamationCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reclamationCrudComponent", function() { return reclamationCrudComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_help_help_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var src_app_components_mat_table_list_mat_table_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/mat-table-list/mat-table-list.component */ "./src/app/components/mat-table-list/mat-table-list.component.ts");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");



















function reclamationCrudComponent_div_7_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function reclamationCrudComponent_div_7_div_2_div_1_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r13.showHelp(form_elem_r5.help); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r5.label);
} }
function reclamationCrudComponent_div_7_div_2_div_2_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r5.label);
} }
function reclamationCrudComponent_div_7_div_2_div_2_input_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 13);
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", form_elem_r5.disabled);
} }
function reclamationCrudComponent_div_7_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, reclamationCrudComponent_div_7_div_2_div_2_label_1_Template, 3, 1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, reclamationCrudComponent_div_7_div_2_div_2_input_3_Template, 1, 2, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.myFormGroup.get(form_elem_r5.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.myFormGroup.get(form_elem_r5.label));
} }
function reclamationCrudComponent_div_7_div_2_div_3_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r5.label);
} }
function reclamationCrudComponent_div_7_div_2_div_3_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", item_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r25, " ");
} }
function reclamationCrudComponent_div_7_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, reclamationCrudComponent_div_7_div_2_div_3_label_2_Template, 3, 1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function reclamationCrudComponent_div_7_div_2_div_3_Template_select_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r26.SelectOnChange($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Select your option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, reclamationCrudComponent_div_7_div_2_div_3_option_7_Template, 2, 2, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.myFormGroup.get(form_elem_r5.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", form_elem_r5.disabled == 1 ? "" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", form_elem_r5.paramValue);
} }
function reclamationCrudComponent_div_7_div_2_div_4_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r5.label);
} }
function reclamationCrudComponent_div_7_div_2_div_4_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topping_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", topping_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](topping_r32);
} }
function reclamationCrudComponent_div_7_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, reclamationCrudComponent_div_7_div_2_div_4_label_1_Template, 3, 1, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function reclamationCrudComponent_div_7_div_2_div_4_Template_mat_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r33.onSelectMultipleChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, reclamationCrudComponent_div_7_div_2_div_4_mat_option_3_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.myFormGroup.get(form_elem_r5.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", form_elem_r5.paramValue);
} }
function reclamationCrudComponent_div_7_div_2_div_5_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r5.label);
} }
function reclamationCrudComponent_div_7_div_2_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function reclamationCrudComponent_div_7_div_2_div_5_div_2_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r40.onCheckChangesNext($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const block_r39 = ctx.$implicit;
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", block_r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", block_r39, " ");
} }
function reclamationCrudComponent_div_7_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, reclamationCrudComponent_div_7_div_2_div_5_label_1_Template, 3, 1, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, reclamationCrudComponent_div_7_div_2_div_5_div_2_Template, 3, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.myFormGroup.get(form_elem_r5.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", form_elem_r5.paramValue);
} }
function reclamationCrudComponent_div_7_div_2_div_6_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r5.label);
} }
function reclamationCrudComponent_div_7_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, reclamationCrudComponent_div_7_div_2_div_6_label_1_Template, 3, 1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function reclamationCrudComponent_div_7_div_2_div_6_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r46.onFileChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.myFormGroup.get(form_elem_r5.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r5.label);
} }
function reclamationCrudComponent_div_7_div_2_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-progress-spinner", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function reclamationCrudComponent_div_7_div_2_div_7_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r5.label);
} }
function reclamationCrudComponent_div_7_div_2_div_7_input_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 34);
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", form_elem_r5.disabled);
} }
function reclamationCrudComponent_div_7_div_2_div_7_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", form_elem_r5.label, " is required ");
} }
function reclamationCrudComponent_div_7_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, reclamationCrudComponent_div_7_div_2_div_7_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, reclamationCrudComponent_div_7_div_2_div_7_label_3_Template, 3, 1, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function reclamationCrudComponent_div_7_div_2_div_7_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58); const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r56.loadSelectionList(form_elem_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "collections");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, reclamationCrudComponent_div_7_div_2_div_7_input_8_Template, 1, 2, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, reclamationCrudComponent_div_7_div_2_div_7_div_9_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.spinerSelectedFieldpopUp);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.myFormGroup.get(form_elem_r5.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.myFormGroup.get(form_elem_r5.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.myFormGroup.get(form_elem_r5.label).errors == null ? null : ctx_r12.myFormGroup.get(form_elem_r5.label).errors.required);
} }
function reclamationCrudComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, reclamationCrudComponent_div_7_div_2_div_1_Template, 6, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, reclamationCrudComponent_div_7_div_2_div_2_Template, 4, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, reclamationCrudComponent_div_7_div_2_div_3_Template, 8, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, reclamationCrudComponent_div_7_div_2_div_4_Template, 4, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, reclamationCrudComponent_div_7_div_2_div_5_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, reclamationCrudComponent_div_7_div_2_div_6_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, reclamationCrudComponent_div_7_div_2_div_7_Template, 10, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r5.type == "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r5.type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r5.type == "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r5.type == "selectMultiple");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r5.type == "checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r5.type == "file");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r5.type == "ValueApiSelect");
} }
function reclamationCrudComponent_div_7_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function reclamationCrudComponent_div_7_div_4_div_1_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r70); const form_elem_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r68.showHelp(form_elem_r60.help); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r60.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r60.label);
} }
function reclamationCrudComponent_div_7_div_4_div_2_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r60.label);
} }
function reclamationCrudComponent_div_7_div_4_div_2_input_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 13);
} if (rf & 2) {
    const form_elem_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r60.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", form_elem_r60.disabled);
} }
function reclamationCrudComponent_div_7_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, reclamationCrudComponent_div_7_div_4_div_2_label_1_Template, 3, 1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, reclamationCrudComponent_div_7_div_4_div_2_input_3_Template, 1, 2, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r62.myFormGroup.get(form_elem_r60.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r62.myFormGroup.get(form_elem_r60.label));
} }
function reclamationCrudComponent_div_7_div_4_div_3_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r60.label);
} }
function reclamationCrudComponent_div_7_div_4_div_3_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", item_r80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r80, " ");
} }
function reclamationCrudComponent_div_7_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, reclamationCrudComponent_div_7_div_4_div_3_label_2_Template, 3, 1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function reclamationCrudComponent_div_7_div_4_div_3_Template_select_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r82); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r81.SelectOnChange($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Select your option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, reclamationCrudComponent_div_7_div_4_div_3_option_7_Template, 2, 2, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r63.myFormGroup.get(form_elem_r60.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r60.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", form_elem_r60.disabled == 1 ? "" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", form_elem_r60.paramValue);
} }
function reclamationCrudComponent_div_7_div_4_div_4_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r60.label);
} }
function reclamationCrudComponent_div_7_div_4_div_4_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topping_r87 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", topping_r87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](topping_r87);
} }
function reclamationCrudComponent_div_7_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, reclamationCrudComponent_div_7_div_4_div_4_label_1_Template, 3, 1, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function reclamationCrudComponent_div_7_div_4_div_4_Template_mat_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r89); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r88.onSelectMultipleChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, reclamationCrudComponent_div_7_div_4_div_4_mat_option_3_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r64.myFormGroup.get(form_elem_r60.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r60.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", form_elem_r60.paramValue);
} }
function reclamationCrudComponent_div_7_div_4_div_5_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r60.label);
} }
function reclamationCrudComponent_div_7_div_4_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function reclamationCrudComponent_div_7_div_4_div_5_div_2_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r95.onCheckChangesNext($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const block_r94 = ctx.$implicit;
    const form_elem_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", block_r94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r60.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", block_r94, " ");
} }
function reclamationCrudComponent_div_7_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, reclamationCrudComponent_div_7_div_4_div_5_label_1_Template, 3, 1, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, reclamationCrudComponent_div_7_div_4_div_5_div_2_Template, 3, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r65.myFormGroup.get(form_elem_r60.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", form_elem_r60.paramValue);
} }
function reclamationCrudComponent_div_7_div_4_div_6_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r60.label);
} }
function reclamationCrudComponent_div_7_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, reclamationCrudComponent_div_7_div_4_div_6_label_1_Template, 3, 1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function reclamationCrudComponent_div_7_div_4_div_6_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r102); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r101.onFileChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r66.myFormGroup.get(form_elem_r60.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r60.label);
} }
function reclamationCrudComponent_div_7_div_4_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-progress-spinner", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function reclamationCrudComponent_div_7_div_4_div_7_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r60.label);
} }
function reclamationCrudComponent_div_7_div_4_div_7_input_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 34);
} if (rf & 2) {
    const form_elem_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r60.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", form_elem_r60.disabled);
} }
function reclamationCrudComponent_div_7_div_4_div_7_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", form_elem_r60.label, " is required ");
} }
function reclamationCrudComponent_div_7_div_4_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, reclamationCrudComponent_div_7_div_4_div_7_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, reclamationCrudComponent_div_7_div_4_div_7_label_3_Template, 3, 1, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function reclamationCrudComponent_div_7_div_4_div_7_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r113); const form_elem_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r111.loadSelectionList(form_elem_r60); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "collections");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, reclamationCrudComponent_div_7_div_4_div_7_input_8_Template, 1, 2, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, reclamationCrudComponent_div_7_div_4_div_7_div_9_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r67.spinerSelectedFieldpopUp);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r67.myFormGroup.get(form_elem_r60.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r67.myFormGroup.get(form_elem_r60.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r67.myFormGroup.get(form_elem_r60.label).errors == null ? null : ctx_r67.myFormGroup.get(form_elem_r60.label).errors.required);
} }
function reclamationCrudComponent_div_7_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, reclamationCrudComponent_div_7_div_4_div_1_Template, 6, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, reclamationCrudComponent_div_7_div_4_div_2_Template, 4, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, reclamationCrudComponent_div_7_div_4_div_3_Template, 8, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, reclamationCrudComponent_div_7_div_4_div_4_Template, 4, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, reclamationCrudComponent_div_7_div_4_div_5_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, reclamationCrudComponent_div_7_div_4_div_6_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, reclamationCrudComponent_div_7_div_4_div_7_Template, 10, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r60.type == "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r60.type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r60.type == "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r60.type == "selectMultiple");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r60.type == "checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r60.type == "file");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r60.type == "ValueApiSelect");
} }
function reclamationCrudComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, reclamationCrudComponent_div_7_div_2_Template, 8, 7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, reclamationCrudComponent_div_7_div_4_Template, 8, 7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.formInputLoop1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.formInputLoop2);
} }
function reclamationCrudComponent_div_8_div_1_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r115.label);
} }
function reclamationCrudComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "BR");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, reclamationCrudComponent_div_8_div_1_label_2_Template, 3, 1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function reclamationCrudComponent_div_8_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r121); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r120.download(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r116.myFormGroup.get(form_elem_r115.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r115.label);
} }
function reclamationCrudComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "textarea", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r115.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r115.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", form_elem_r115.disabled);
} }
function reclamationCrudComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, reclamationCrudComponent_div_8_div_1_Template, 8, 2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, reclamationCrudComponent_div_8_div_2_Template, 6, 3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r115 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r115.type == "uploadFile" && ctx_r1.myFormGroup.get(form_elem_r115.label)["value"] != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r115.type == "textarea");
} }
function reclamationCrudComponent_input_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 45);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r2.submitLabel);
} }
class reclamationCrudComponent {
    constructor(matDialog, //private localStorageService: LocalstorageService, 
    mainService, crudService, formBuilder, httpClient) {
        this.matDialog = matDialog;
        this.mainService = mainService;
        this.crudService = crudService;
        this.formBuilder = formBuilder;
        this.httpClient = httpClient;
        this.listData = { displayedColumns: [], data: [], actionColumns: [], actionButton: {}, type: 'df' };
        this.displayedColumns = [];
        this.selectedDate = new Date();
        this.FilterColumnType = false;
        this.group = {};
        this.formInput = [];
        this.formInputLoop = [];
        this.formInputLoop1 = [];
        this.formInputLoop2 = [];
        this.uploadFilePath = null;
        this.UploadDirectory = "";
        this.submitLabel = "validate";
        this.csvFolder = []; //| null = null;
        this.multipleSelectedValue = [];
        this.startDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date());
        this.endDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date());
        this.spinerSelectedField = false;
        this.spinerSelectedFieldpopUp = false;
        //cronstrue1=""
        this.dataForm = [];
        //addFilterButton:Boolean=false;
        this.data = {};
        this.countChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataConf = {};
        this.form = {};
        this.myFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](this.group);
    }
    getJson() {
        // let paramString1='colName=Ref_Request&colValue='+this.echangeData['Ref_Request']+'&sheet=userRequestValidation'
        console.log(' json  getJson ');
        return this.httpClient.get("assets/requestForm.json").toPromise();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataConf = yield this.getJson();
            console.log(' this.echangeData  ', this.echangeData);
            if (this.echangeData == undefined)
                this.form = this.dataConf['form'];
            else
                this.form = this.dataConf['formDetails'];
            this.formTitle = this.dataConf['TitleFormObject'];
            console.log(this.formTitle, ' this.dataConf  ', this.dataConf);
            this.listData.displayedColumns = []; //this.displayedColumns;
            this.listData.actionColumns = [];
            console.log(' this.form  ', this.form);
            if (this.echangeData != undefined) {
                let o = {};
                let sheet = 'reclamation';
                this.mainService.getDataByCols(sheet, o).subscribe(data => {
                    this.listData.data = data;
                });
            }
            else {
                this.listData.data = [];
                this.echangeData = [];
            }
            this.group = {};
            this.formInput = [];
            this.formInputLoop = [];
            this.myFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](this.group);
            let myDate = new Date();
            let today = myDate.getFullYear() + '-' + (('0' + (myDate.getMonth() + 1)).slice(-2)) + '-' + ('0' + myDate.getDate()).slice(-2);
            if (this.echangeData.length > 0) {
                this.data = { action: 'action', id: 5, type: 'type', currentModule: 'module321', droppedModules: [],
                    form: this.form };
            }
            else {
                this.data = { action: 'action', id: 5, type: 'type', currentModule: 'module321', droppedModules: [],
                    form: this.form };
            }
            let dataSize = Object.keys(this.data).length;
            this.formInput = [];
            //this.submitLabel='Close'
            if (!(typeof this.data['form'] === 'undefined')) {
                const dataFormClone = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.data['form']);
                this.dataForm = dataFormClone;
                this.formInput = Object.values(dataFormClone);
                for (var i in this.formInput) {
                    if (this.formInput[i]['hide'] != 1) {
                        this.formInputLoop.push(this.formInput[i]);
                        this.group[this.formInput[i]['label']] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '' });
                        if (this.formInput[i]['required'] == 1) {
                            this.myFormGroup.controls[this.formInput[i]['label']].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
                        }
                        if (this.echangeData[this.formInput[i]['label'].replace(/ /g, '_')] != undefined) {
                            this.myFormGroup.controls[this.formInput[i]['label']].setValue(this.echangeData[this.formInput[i]['label'].replace(/ /g, '_')]);
                        }
                        else {
                            let value = this.formInput[i]['value'];
                            if (this.formInput[i]['value'].toUpperCase() == 'SYSDATE' && this.echangeData.length == 0) {
                                let myDate = new Date();
                                value = myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + ('0' + myDate.getDate()).slice(-2);
                            }
                            if (this.formInput[i]['value'].toUpperCase().includes('LOCALSTORAGE') && this.echangeData.length == 0) {
                                value = eval(this.formInput[i]['value']);
                                console.log(this.formInput[i]['value'], ' localStorage ', value);
                            }
                            this.myFormGroup.controls[this.formInput[i]['label']].setValue(value);
                        }
                        if (this.formInput[i]['type'] == 'startDate') {
                            this.startDate.setValue(this.formInput[i]['value']);
                            console.log(i, ' *startDate ***  ', this.myFormGroup.controls[this.formInput[i]['label']]);
                        }
                        if (this.formInput[i]['type'] == 'endDate') {
                            this.endDate.setValue(this.formInput[i]['value']);
                            //console.log( i, ' *startDate ***  ', this.myFormGroup.controls[this.formInput[i]['label']] ) 
                        }
                    }
                }
                //  prepare data for two column 
                let keys = Object.keys(this.formInputLoop);
                for (var el = 0; el < this.formInputLoop.length; el++) {
                    if (el % 2 == 0)
                        this.formInputLoop1.push(this.formInputLoop[el]);
                    else
                        this.formInputLoop2.push(this.formInputLoop[el]);
                }
            }
            else
                this.formInput = [];
        });
    }
    ;
    onSelectMultipleChange(event) {
        this.multipleSelectedValue = event;
    }
    loadSelectionList(form_elem) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            {
                console.log(' loadSelectionList ', JSON.stringify(form_elem));
                const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
                //The user can't close the dialog by clicking outside its body
                //dialogConfig.disableClose = true;
                console.log(' openFolderServerModal  ');
                dialogConfig.position = { top: '0%', left: '20%' };
                dialogConfig.id = "modal-component";
                dialogConfig.height = "800px";
                dialogConfig.width = "800px";
                dialogConfig.autoFocus = false;
                dialogConfig.height = '100%';
                this.spinerSelectedFieldpopUp = true;
                let echangeData = {};
                let val = yield this.getDataForSelect();
                this.spinerSelectedFieldpopUp = false;
                console.log('  getAllUsers ', JSON.stringify(val));
                echangeData['data'] = val;
                echangeData['displayedColumns'] = ['Designation'];
                echangeData['actionColumns'] = ['Action'];
                dialogConfig.data = echangeData;
                this.spinerSelectedFieldpopUp = false;
                const modalDialog = this.matDialog.open(src_app_components_mat_table_list_mat_table_list_component__WEBPACK_IMPORTED_MODULE_6__["MatTableListComponent"], dialogConfig); // load the help component
                modalDialog.afterClosed().subscribe(result => {
                    // if(result.event == 'Add'){
                    // console.log(' close dialog ', JSON.parse(result.data)['data'][0]['Ref'])
                    this.myFormGroup.controls[form_elem['label']].setValue(JSON.parse(result.data)['data'][0]['Designation']);
                });
            }
        });
    }
    getDataForSelect() {
        let sheet = 'Composant';
        //this.usuariosService.updateUserRequestValidation(this.crudData).subscribe(resultat => {
        return this.mainService.getAllRowsSheet(sheet).toPromise();
        //return this.crudService.updateJsonDataToSheet(data,'dataObject').toPromise()
    }
    SelectOnChange(event) {
        this.FilterColumnType = event.toUpperCase().includes('DATE') || event.toUpperCase().includes('DAY');
    }
    pickerEvent(event) {
        this.selectedDate = event.value;
        this.myFormGroup.controls['Filter Value'].setValue(this.selectedDate.getFullYear() + '-' + (this.selectedDate.getMonth() + 1) + '-' + ('0' + this.selectedDate.getDate()).slice(-2));
    }
    onFileChanged(event) {
        console.log(' onFileChanged ', event.target.files[0]);
        this.uploadFilePath = event.target.files[0]; // get the file name  
        var reader = new FileReader();
        reader.readAsDataURL(this.uploadFilePath);
        reader.onload = (_event) => {
            this.fileBase64 = reader.result;
            console.log(' file base 64 ', this.fileBase64);
        };
    }
    patternValidator() {
        return (control) => {
            if (!control.value) {
                console.log(' patternValidator  !!!! control.value  NULLLLL ', control.value);
                return null;
            }
            if (!control.value.toUpperCase().includes('SELECT') ||
                !control.value.toUpperCase().includes('FROM')) {
                console.log('patternValidator control.value.dont includes("select or from ")  ');
                control.setErrors({ invalidQuery: true });
                return { invalidQuery: true };
            }
            else {
                return null;
            }
        };
    }
    download() {
        let vfileToBeName = this.echangeData['Attached_File'];
        const source = this.echangeData['base64'];
        const link = document.createElement("a");
        link.href = source;
        link.download = `${vfileToBeName}`;
        link.click();
    }
    uploadFile(file) {
        const uploadData = new FormData();
        let filename = file;
        uploadData.append('filename', filename);
        uploadData.append('folder', this.UploadDirectory);
        uploadData.append('user', localStorage.getItem('user'));
        console.log(' uploadFile ', uploadData);
    }
    onFolderChanged(event) {
        console.log(' onFolderChanged ', event.target.files);
        var filesSelected = event.target.files;
        let output = document.getElementById("listing");
        var tmpArr = [];
        for (let item of filesSelected) {
            tmpArr.push(item.webkitRelativePath);
        }
        this.csvFolder = tmpArr; // get the file name 
    }
    // help modal
    showHelp(help) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.id = "modal-help";
        dialogConfig.height = "450px";
        dialogConfig.width = "800px";
        dialogConfig.data = help; // pass help variable to the helpcomponent
        const modalDialog = this.matDialog.open(src_app_help_help_component__WEBPACK_IMPORTED_MODULE_5__["HelpComponent"], dialogConfig); // load the help component
    }
    isSelected(data) {
        console.log(' isSelected  ', data);
    }
    // onchange checkbox function for "next"
    onCheckChangesNext(event) {
        // get the form array "next" and add data in every changes
        // const formArrayNext: FormArray = this.myFormGroup.get('next') as FormArray;
        this.formInput.map(elem => {
            if (this.dataForm[elem['label'].replace(/ /g, '_')]['type'] == 'checkbox') {
                let ar = this.dataForm[elem['label'].replace(/ /g, '_')]['valueSelected'];
                console.log(' el ', event.target.value, '   at  ', ar.indexOf(event.target.value));
                if (ar.indexOf(event.target.value) >= 0 && !event.target.checked) {
                    console.log(' remove ', event.target.value, '   at  ', ar.indexOf(event.target.value));
                    ar.splice(ar.indexOf(event.target.value), 1);
                }
                if (ar.indexOf(event.target.value) == -1 && event.target.checked)
                    ar.push(event.target.value);
                this.dataForm[elem['label'].replace(/ /g, '_')]['valueSelected'] = ar;
                console.log(elem['label'], 'value  ', this.dataForm[elem['label'].replace(/ /g, '_')]['valueSelected']);
            }
        });
    }
    cancel() {
        this.countChanged.emit(this.dataForm);
    }
    buildOjectFromDataForm(obj) {
        var data = {};
        if (Object.keys(this.echangeData).length > 1) {
            data["Ref"] = this.echangeData["Ref"];
        }
        for (var el in obj) {
            console.log(el, obj[el]['value']);
            data[el] = obj[el]['value'];
        }
        return data;
    }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // check validation form  
            for (var i in this.formInputLoop) {
                if (!this.myFormGroup.controls[this.formInputLoop[i]['label']].valid) {
                    alert(this.myFormGroup.controls[this.formInputLoop[i]['label']] + '  Form Submitted Error : ' + '    ' + this.formInputLoop[i]["label"]);
                    return 0;
                }
            }
            let filename = this.csv; // get the file name 
            console.log(' this.formInputLoop ', JSON.stringify(this.formInputLoop));
            this.formInputLoop.map(elem => {
                console.log(elem['label'], ' elem label  ', this.dataForm[elem['label'].replace(/ /g, '_')]['type']);
                if (this.dataForm[elem['label'].replace(/ /g, '_')]['type'] == 'text' ||
                    this.dataForm[elem['label'].replace(/ /g, '_')]['type'] == 'textarea') {
                    let tmpText = this.myFormGroup.get(elem['label']).value; //.replace(/'/g,'~').replace(/"/g,'~')
                    this.dataForm[elem['label'].replace(/ /g, '_')].value = tmpText;
                }
                else if (this.dataForm[elem['label'].replace(/ /g, '_')]['type'] != 'checkbox' &&
                    this.dataForm[elem['label'].replace(/ /g, '_')]['type'] != 'selectMultiple' &&
                    this.dataForm[elem['label'].replace(/ /g, '_')]['type'] != 'savefile' &&
                    //  this.dataForm[elem['label'].replace(/ /g, '_')]['type'] != 'file' &&
                    !elem['label'].includes('Repertoire')) {
                    this.dataForm[elem['label'].replace(/ /g, '_')].value = this.myFormGroup.get(elem['label']).value;
                }
                if (elem['label'].includes('fichier1') //||  this.dataForm[elem['label'].replace(/ /g, '_')]['type'] == 'file' 
                ) {
                    this.dataForm[elem['label'].replace(/ /g, '_')].value = this.filename; //csv['name']
                }
                if (elem['label'].includes('Repertoire')) {
                    this.dataForm[elem['label'].replace(/ /g, '_')].value = this.csvFolder;
                    //console.log(' fichier   ffffffffff  ',JSON.stringify(this.myFormGroup.get(elem['label'])))
                }
                if (this.dataForm[elem['label'].replace(/ /g, '_')]['type'] == 'selectMultiple') {
                    this.dataForm[elem['label'].replace(/ /g, '_')].value = this.multipleSelectedValue;
                }
                console.log(elem['label'], ' elem label  ', this.dataForm[elem['label'].replace(/ /g, '_')]['type']);
            });
            if (this.echangeData.length == 0) {
                let data = this.buildOjectFromDataForm(this.dataForm);
                console.log('  this.dataForm length 0000000', JSON.stringify(data));
                /*await this.crudService.insertJsonDataToSheet(data,'dataObject').subscribe(data => {
                 
                 console.log(' retour 0000000',data);
                }
                ) */
                this.spinerSelectedField = true;
                console.log(' base64 ', this.fileBase64);
                data["base64"] = this.fileBase64;
                let responseData = yield this.insertJsonDataToSheet(data);
                this.spinerSelectedField = false;
                console.log(' before   getAll test ', responseData);
                this.countChanged.emit(this.dataForm);
                return 0;
            }
            else {
                let data = this.buildOjectFromDataForm(this.dataForm);
                console.log(JSON.stringify(this.echangeData), '  this.dataForm length 0000000', JSON.stringify(data));
                /*await this.crudService.insertJsonDataToSheet(data,'dataObject').subscribe(data => {
                 
                 console.log(' retour 0000000',data);
                }
                ) */
                this.spinerSelectedField = true;
                let responseData = yield this.updateJsonDataToSheet(data);
                this.spinerSelectedField = false;
                console.log(' before   getAll test ', responseData);
                this.countChanged.emit(this.dataForm);
                return 0;
            }
        });
    }
    insertJsonDataToSheet(data) {
        // let paramString1='colName=Ref_Request&colValue='+this.echangeData['Ref_Request']+'&sheet=userRequestValidation'
        return this.crudService.insertJsonDataToSheet(data, 'reclamation').toPromise();
    }
    updateJsonDataToSheet(data) {
        // let paramString1='colName=Ref_Request&colValue='+this.echangeData['Ref_Request']+'&sheet=userRequestValidation'
        console.log(' update ', JSON.stringify(data));
        return this.crudService.updateJsonDataToSheet(data, 'reclamation').toPromise();
    }
    ngAfterViewInit() {
        /* for (var i in this.formInputLoop) {
               
           console.log(this.myFormGroup.controls[this.formInputLoop[i]['label']], 'required ',this.myFormGroup.get(this.formInputLoop[i]['label'])['error'])
            
     
           }*/
        if (localStorage.getItem('data') != null) {
            //this.updateProject()
        }
    }
}
reclamationCrudComponent.ɵfac = function reclamationCrudComponent_Factory(t) { return new (t || reclamationCrudComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_7__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_8__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"])); };
reclamationCrudComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: reclamationCrudComponent, selectors: [["app-reclamation-crud"]], inputs: { echangeData: "echangeData" }, outputs: { countChanged: "countChanged" }, decls: 11, vars: 4, consts: [[2, "font-size", "smaller"], [3, "formGroup", "ngSubmit"], ["class", "col", 4, "ngIf"], [4, "ngFor", "ngForOf"], [2, "display", "flex", "justify-content", "center"], ["style", "width: 25%", "type", "submit", "class", "btn btn-config", 3, "value", 4, "ngIf"], [1, "col"], [4, "ngIf"], ["src", "assets/info.png", 1, "info", 3, "click"], ["type", "password", 3, "formControlName"], ["style", "width: 30%", "for", "test", 4, "ngIf"], ["style", "\n                width: 65%;\n                background-color: transparent;\n                border: none;\n                outline: none;\n              ", "id", "test", "type", "text", 3, "readonly", "formControlName", 4, "ngIf"], ["for", "test", 2, "width", "30%"], ["id", "test", "type", "text", 2, "width", "65%", "background-color", "transparent", "border", "none", "outline", "none", 3, "readonly", "formControlName"], ["id", "test", 2, "width", "68%", 3, "formControlName", "change"], ["value", "", "disabled", "", "selected", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], ["multiple", "", 1, "form-select", 3, "formControlName", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "checkbox", 3, "value", "formControlName", "change"], ["for", "file", 4, "ngIf"], ["type", "file", "id", "file", 3, "formControlName", "change"], ["for", "file"], ["class", "wrapper", "style", "height: 20px; align-self: center", 4, "ngIf"], ["style", "width: 30%", 4, "ngIf"], ["type", "button", "matTooltip", "select file", 1, "btn", "btn-default", 3, "click"], [2, "margin-top", "10%"], ["style", "\n                  background-color: transparent;\n                  border: none;\n                  outline: none;\n                ", "type", "text", 3, "readonly", "formControlName", 4, "ngIf"], ["style", "color: red", 4, "ngIf"], [1, "wrapper", 2, "height", "20px", "align-self", "center"], ["mode", "indeterminate", "diameter", "40", 1, "inner", 2, "left", "50%"], [2, "width", "30%"], ["type", "text", 2, "background-color", "transparent", "border", "none", "outline", "none", 3, "readonly", "formControlName"], [2, "color", "red"], ["style", "\n                background-color: transparent;\n                border: none;\n                outline: none;\n              ", "type", "text", 3, "readonly", "formControlName", 4, "ngIf"], ["class", "col-6", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "col-6"], ["id", "test", "type", "text", 2, "background-color", "transparent", "border", "none", "outline", "none", 3, "formControlName"], ["matTooltip", "Download File", 1, "btn", 3, "click"], [2, "margin-top", "15%"], [1, "row"], ["rows", "3", "cols", "35", "spellcheck", "false", 1, "form-control", 2, "font-size", "10px", 3, "readonly", "formControlName"], ["type", "submit", 1, "btn", "btn-config", 2, "width", "25%", 3, "value"]], template: function reclamationCrudComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function reclamationCrudComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Request Details Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "BR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "BR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, reclamationCrudComponent_div_7_Template, 5, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, reclamationCrudComponent_div_8_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, reclamationCrudComponent_input_10_Template, 1, 1, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formInputLoop.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.formInputLoop);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formInputLoop.length > 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinner"]], styles: ["fieldset[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    margin-left: 20vw;\r\n    border: 0px none transparent;\r\n    background: none;\r\n  }\r\n \r\n  select[_ngcontent-%COMP%] {\r\n    \r\n    max-height: 30px;\r\n    \r\n    margin-bottom: .5em;\r\n    border-radius: 4px;\r\n  }\r\n \r\n  .dropbtn[_ngcontent-%COMP%]  {\r\n    display: inline-block;\r\n    margin-bottom: -3px;\r\n    margin-right: 4px;\r\n  }\r\n \r\n  input[_ngcontent-%COMP%] {\r\n    \r\n    max-height: 30px;\r\n    \r\n    margin-bottom: .5em;\r\n    border-radius: 4px;\r\n    \r\n    \r\n  }\r\n \r\n  input1[_ngcontent-%COMP%] {\r\n    \r\n    max-height: 30px;\r\n    \r\n    margin-bottom: .5em;\r\n    border-radius: 4px;\r\n    \r\n    \r\n    border-radius: 4px;\r\n  }\r\n \r\n  legend[_ngcontent-%COMP%] {\r\n    width: 70vw;\r\n    text-align:center;\r\n    margin: 0 auto;\r\n  }\r\n \r\n  \r\n \r\n  \r\n \r\n  .row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n  }\r\n \r\n  .input-field[_ngcontent-%COMP%] {\r\n    margin-left: 1em;\r\n    padding: .5em;\r\n    margin-bottom: .5em;\r\n  }\r\n \r\n  .config-field[_ngcontent-%COMP%] {\r\n    box-shadow: 2px 2px 5px 2px;\r\n    border: 2px #d9d9d9;\r\n    border-radius: 5px;\r\n    \r\n    margin: 0 auto;\r\n    padding: 15px 20px 20px;\r\n    display: block;\r\n    text-align: left;\r\n    \r\n   \r\n     \r\n    \r\n    background-color: #f5f7f7;\r\n}\r\n \r\n  .config-field1[_ngcontent-%COMP%] {\r\n    box-shadow: 2px 2px 5px 2px;\r\n    border: 2px #d9d9d9;\r\n    border-radius: 5px;\r\n    \r\n    margin: 0 auto;\r\n    \r\n    display: block;\r\n    text-align: center;\r\n    \r\n}\r\n \r\n  \r\n \r\n  .container[_ngcontent-%COMP%] {\r\n    display: block;\r\n    position: relative;\r\n    padding-left: 35px;\r\n    cursor: pointer;\r\n    font-size: 17px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    user-select: none;\r\n    background-color: transparent;\r\n    border-radius: 5px;\r\n    border: 2px solid #dceff0;\r\n    padding: 5px; \r\n}\r\n \r\n  \r\n \r\n  .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 0;\r\n    width: 0;\r\n}\r\n \r\n  \r\n \r\n  .checkmark[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 30px;\r\n    background-color: transparent;\r\n    border-right: 2px solid #5f7d8b;\r\n}\r\n \r\n  \r\n \r\n  .container[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .checkmark[_ngcontent-%COMP%] {\r\n    background-color: #ccc;\r\n}\r\n \r\n  \r\n \r\n  .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\r\n    background-color: #ccc;\r\n    \r\n}\r\n \r\n  \r\n \r\n  .checkmark[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n}\r\n \r\n  \r\n \r\n  .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\r\n    display: block;\r\n}\r\n \r\n  \r\n \r\n  .container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\r\n    left: calc(50% - 4px);\r\n    top: 50%;\r\n    width: 7px;\r\n    height: 10px;\r\n    border: solid white;\r\n    border-width: 0px 3px 2px 0;\r\n    transform: rotate(45deg) translate(-50%, -50%);\r\n}\r\n \r\n  .input-file[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n}\r\n \r\n  \r\n \r\n  .btn-config[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background-color: #f27839;\r\n    border: 0;\r\n    border-radius: 8px;\r\n   \r\n   \r\n    color: #fff;\r\n    font-weight: 500;\r\n    padding: 10px;\r\n}\r\n \r\n  .info[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n    height: 20px;\r\n    cursor: pointer;\r\n    padding: 10px;\r\n\r\n}\r\n \r\n  .col[_ngcontent-%COMP%]{display:flex;}\r\n \r\n  .col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{flex:1}\r\n \r\n  .invisible[_ngcontent-%COMP%]{\r\n    display: block;\r\n    visibility: hidden;\r\n    height: 0;\r\n    width: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcmVjbGFtYXRpb24vcmVjbGFtYXRpb24tY3J1ZC9yZWNsYW1hdGlvbi1jcnVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25COztFQUVGO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEI7d0JBQ29CO0VBQ3RCOztFQUNBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjs7RUFFQTs7Ozt1QkFJcUI7O0VBQ3RCLEtBQUs7O0VBRU47SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOztFQUVGO0lBQ0ksMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7O0tBRWY7K0JBQzBCO0lBQzNCLDZCQUE2QjtJQUM3Qix5QkFBeUI7QUFDN0I7O0VBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCOytCQUMyQjtBQUMvQjs7RUFDQSxrQkFBa0I7O0VBQ2xCO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsc0JBQXNCO0lBRXRCLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztFQUNBLHdDQUF3Qzs7RUFDeEM7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGVBQWU7SUFDZixTQUFTO0lBQ1QsUUFBUTtBQUNaOztFQUNBLDZCQUE2Qjs7RUFDN0I7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztJQUNYLDZCQUE2QjtJQUM3QiwrQkFBK0I7QUFDbkM7O0VBQ0EsK0NBQStDOztFQUMvQztJQUNJLHNCQUFzQjtBQUMxQjs7RUFDQSx3REFBd0Q7O0VBQ3hEO0lBQ0ksc0JBQXNCO0lBQ3RCLDhCQUE4QjtBQUNsQzs7RUFDQSw2REFBNkQ7O0VBQzdEO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztFQUNBLG9DQUFvQzs7RUFDcEM7SUFDSSxjQUFjO0FBQ2xCOztFQUNBLGtDQUFrQzs7RUFDbEM7SUFDSSxxQkFBcUI7SUFDckIsUUFBUTtJQUNSLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQiw4Q0FBOEM7QUFDbEQ7O0VBQ0E7SUFDSSxlQUFlO0FBQ25COztFQUNBOztFQUVFOztFQUNGO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1Qsa0JBQWtCO0dBQ25CO0tBQ0U7R0FDRjtLQUNFO0lBQ0QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztFQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTs7QUFFakI7O0VBRUEsS0FBSyxZQUFZLENBQUM7O0VBQ2xCLFNBQVMsTUFBTTs7RUFFZjtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JlY2xhbWF0aW9uL3JlY2xhbWF0aW9uLWNydWQvcmVjbGFtYXRpb24tY3J1ZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZmllbGRzZXQge1xyXG4gICAgLyp3aWR0aDogNTB2dzsqL1xyXG4gICAgLyp0ZXh0LWFsaWduOiByaWdodDsqL1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwdnc7XHJcbiAgICBib3JkZXI6IDBweCBub25lIHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICB9XHJcbiBcclxuICBzZWxlY3Qge1xyXG4gICAgLyp3aWR0aDogNjAlOyovXHJcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gICAgLyptYXgtd2lkdGg6IDUwMHB4OyovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuXHJcbiAgLmRyb3BidG4gIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IC0zcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICB9XHJcblxyXG5pbnB1dCB7XHJcbiAgICAvKndpZHRoOiA2MCU7Ki9cclxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICAvKm1heC13aWR0aDogNTAwcHg7Ki9cclxuICAgIG1hcmdpbi1ib3R0b206IC41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAvKm1heC13aWR0aDogMTAwcHg7Ki9cclxuICAgIC8qbWFyZ2luLWJvdHRvbTogLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDsqL1xyXG4gIH1cclxuICBpbnB1dDEge1xyXG4gICAgLyp3aWR0aDogNjAlOyovXHJcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gICAgLyptYXgtd2lkdGg6IDUwMHB4OyovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgLyptYXgtd2lkdGg6IDEwMHB4OyovXHJcbiAgICAvKm1hcmdpbi1ib3R0b206IC41ZW07Ki9cclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgXHJcbiAgbGVnZW5kIHtcclxuICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIC8qbGFiZWwge1xyXG4gICBcclxuICAgIG1hcmdpbi1yaWdodDogMWVtOyBcclxuICAgIC8qd2lkdGg6IDMwJTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0OyovXHJcbiAvKiB9Ki9cclxuXHJcbi5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIH1cclxuICBcclxuICAuaW5wdXQtZmllbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIHBhZGRpbmc6IC41ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xyXG4gIH1cclxuXHJcbi5jb25maWctZmllbGQge1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4O1xyXG4gICAgYm9yZGVyOiAycHggI2Q5ZDlkOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8qbWluLWhlaWdodDogNTBweDsqL1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHggMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIC8qaGVpZ2h0OiAxMDAlOyovXHJcbiAgIFxyXG4gICAgIC8qYmFja2dyb3VuZC1jb2xvcjogI2QwZDBkMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4YjgyYjg7Ki9cclxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogI2RjZWZmMDsqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjdmNztcclxufVxyXG4uY29uZmlnLWZpZWxkMSB7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHg7XHJcbiAgICBib3JkZXI6IDJweCAjZDlkOWQ5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLyptaW4taGVpZ2h0OiA1cHg7Ki9cclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgLypwYWRkaW5nOiA1cHggMjBweCAyMHB4OyovXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qaGVpZ2h0OiAxMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDBkMGQwOyovXHJcbn1cclxuLyogVGhlIGNvbnRhaW5lciAqL1xyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2RjZWZmMDtcclxuICAgIHBhZGRpbmc6IDVweDsgXHJcbn1cclxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cclxuLmNvbnRhaW5lciBpbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbn1cclxuLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXHJcbi5jaGVja21hcmsge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjNWY3ZDhiO1xyXG59XHJcbi8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xyXG4uY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG59XHJcbi8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xyXG4uY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICM1ZjdkOGI7ICovXHJcbn1cclxuLyogQ3JlYXRlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cclxuLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4vKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXHJcbi5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cclxuLmNvbnRhaW5lciAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gNHB4KTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgd2lkdGg6IDdweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJvcmRlcjogc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweCAzcHggMnB4IDA7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcbi5pbnB1dC1maWxlIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4vKi5uZy12YWxpZCBsYWJlbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSovXHJcbi5idG4tY29uZmlnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyNzgzOTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgLyogd2lkdGg6IDEwMCU7XHJcbiAgICAqL1xyXG4gICAvKiBiYWNrZ3JvdW5kOiAjZjI3ODM5O1xyXG4gICAgKi9cclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmluZm8ge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxufVxyXG5cclxuLmNvbHtkaXNwbGF5OmZsZXg7fVxyXG4uY29sIGRpdntmbGV4OjF9XHJcblxyXG4uaW52aXNpYmxle1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](reclamationCrudComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-reclamation-crud',
                templateUrl: './reclamation-crud.component.html',
                styleUrls: ['./reclamation-crud.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_7__["MainService"] }, { type: src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_8__["CrudService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] }]; }, { echangeData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], countChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/views/reclamation/reclamation-list/reclamation-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/reclamation/reclamation-list/reclamation-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: reclamationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reclamationListComponent", function() { return reclamationListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_components_navbar_user_navbar_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/navbar-user/navbar-user.component */ "./src/app/components/navbar-user/navbar-user.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _navidation_sidenav_list_admin_sidenav_list_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../navidation/sidenav-list-admin/sidenav-list-admin.component */ "./src/app/navidation/sidenav-list-admin/sidenav-list-admin.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _components_dynamic_table_list_dynamic_table_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/dynamic-table-list/dynamic-table-list.component */ "./src/app/components/dynamic-table-list/dynamic-table-list.component.ts");
/* harmony import */ var _reclamation_crud_reclamation_crud_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../reclamation-crud/reclamation-crud.component */ "./src/app/views/reclamation/reclamation-crud/reclamation-crud.component.ts");
















function reclamationListComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-progress-spinner", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function reclamationListComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-dynamic-table-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("countChanged", function reclamationListComponent_div_11_Template_app_dynamic_table_list_countChanged_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.actionHandler1($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("echangeData", ctx_r2.echangeData);
} }
function reclamationListComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-reclamation-crud", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("countChanged", function reclamationListComponent_div_13_Template_app_reclamation_crud_countChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.reloadData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("echangeData", ctx_r3.crudData);
} }
function reclamationListComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "BR");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "BR");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No Data To Display");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class reclamationListComponent {
    constructor(httpClient, mainService, crudService, activeRoute) {
        this.httpClient = httpClient;
        this.mainService = mainService;
        this.crudService = crudService;
        this.activeRoute = activeRoute;
        //isSearchShow: boolean;
        this.echangeData = {
            displayedColumns: [], data: [],
            actionColumns: [],
            actionButton: {},
            type: 'df'
        };
        this.displayedColumns = [];
        this.action = 'list';
        this.spinerSelectedField = false;
        this.dataConf = {};
        this.title = "";
        this.getAllObjects = () => {
            let o = {};
            //{'User':localStorage.getItem('user')}
            let sheet = 'reclamation';
            if (this.activeRoute.snapshot.params.req != undefined) {
                let req = this.activeRoute.snapshot.params.req;
                o['params_id'] = req;
            }
            this.spinerSelectedField = true;
            this.mainService.getDataByCols(sheet, o).subscribe(data => {
                this.action = 'list';
                this.echangeData.data = data;
                if (this.activeRoute.snapshot.params.req != undefined) {
                    let event = {};
                    event['action'] = 'details';
                    event['data'] = []; //.push(ddata[0])
                    event['data'].push(data[0]);
                    this.actionHandler1(event);
                }
            });
            this.spinerSelectedField = false;
        };
    }
    getJson() {
        console.log(' json  getJson ');
        return this.httpClient.get("assets/requestForm.json").toPromise();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('route ', this.activeRoute.snapshot.routeConfig.path);
            localStorage.setItem('route', this.activeRoute.snapshot.routeConfig.path);
            this.dataConf = yield this.getJson();
            this.title = this.dataConf['titleList'];
            this.echangeData.actionColumns = this.dataConf['actionColumns'];
            this.echangeData.displayedColumns = this.dataConf['displayedColumns'];
            this.getAllObjects();
            console.log(' getAllDataObjec before brfore  ', this.activeRoute.snapshot.params.req);
        });
    }
    deleteRowSheet(id, sheet) {
        return this.crudService.deleteRowSheet(id, sheet).toPromise();
    }
    actionHandler1(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.action = event['action'];
            let data = event['data'][0];
            console.log('action ', this.action, ' actionHandler1 event ', event);
            if (this.action == 'delete') {
                if (window.confirm('Are sure you want to delete this row ?' + data['reclamation_id'])) {
                    this.spinerSelectedField = true;
                    const resp = yield this.deleteRowSheet(data['reclamation_id'], 'reclamation');
                    this.ngOnInit();
                    this.spinerSelectedField = false;
                }
            }
            else {
                this.crudData = data;
                console.log(' actionHandler1  crud data ', this.crudData);
            }
        });
    }
    reloadData(event) {
        this.childC.ngAfterViewInit();
        this.action = 'list';
        this.ngOnInit();
    }
}
reclamationListComponent.ɵfac = function reclamationListComponent_Factory(t) { return new (t || reclamationListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
reclamationListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: reclamationListComponent, selectors: [["app-reclamation-list"]], viewQuery: function reclamationListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](src_app_components_navbar_user_navbar_user_component__WEBPACK_IMPORTED_MODULE_2__["NavbarUserComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.childC = _t.first);
    } }, decls: 15, vars: 4, consts: [["mode", "side", 3, "sidenavToggle"], ["mode", "side", "opened", "true"], ["sidenav", ""], ["mode", "side", 3, "sidenavClose"], [1, "container"], ["class", "wrapper", "style", "padding-top: 200px; height: 20px; align-self: center", 4, "ngIf"], ["class", "row", 4, "ngIf"], [4, "ngIf"], ["style", "text-align: center", 4, "ngIf"], [1, "wrapper", 2, "padding-top", "200px", "height", "20px", "align-self", "center"], ["mode", "indeterminate", "diameter", "40", 1, "inner", 2, "left", "50%"], [1, "row"], [3, "echangeData", "countChanged"], [2, "text-align", "center"]], template: function reclamationListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-navbar-user", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sidenavToggle", function reclamationListComponent_Template_app_navbar_user_sidenavToggle_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "app-sidenav-list-admin", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sidenavClose", function reclamationListComponent_Template_app_sidenav_list_admin_sidenavClose_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, reclamationListComponent_div_10_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, reclamationListComponent_div_11_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "BR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, reclamationListComponent_div_13_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, reclamationListComponent_div_14_Template, 5, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.spinerSelectedField);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.echangeData.data.length > 0 && ctx.action === "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.action == "add" || ctx.action == "details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.action == "");
    } }, directives: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"], src_app_components_navbar_user_navbar_user_component__WEBPACK_IMPORTED_MODULE_2__["NavbarUserComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenav"], _navidation_sidenav_list_admin_sidenav_list_admin_component__WEBPACK_IMPORTED_MODULE_9__["SidenavListAdminComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinner"], _components_dynamic_table_list_dynamic_table_list_component__WEBPACK_IMPORTED_MODULE_12__["DynamicTableListComponent"], _reclamation_crud_reclamation_crud_component__WEBPACK_IMPORTED_MODULE_13__["reclamationCrudComponent"]], styles: ["mat-sidenav-container[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    height: 100%;\r\n    min-height: 100%;\r\n    width: 100%;\r\n    min-width: 100%;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcmVjbGFtYXRpb24vcmVjbGFtYXRpb24tbGlzdC9yZWNsYW1hdGlvbi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZUFBZTtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JlY2xhbWF0aW9uL3JlY2xhbWF0aW9uLWxpc3QvcmVjbGFtYXRpb24tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](reclamationListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-reclamation-list',
                templateUrl: './reclamation-list.component.html',
                styleUrls: ['./reclamation-list.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"] }, { type: src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }]; }, { childC: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [src_app_components_navbar_user_navbar_user_component__WEBPACK_IMPORTED_MODULE_2__["NavbarUserComponent"], { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/views/user/user-crud-password/user-crud-password.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/user/user-crud-password/user-crud-password.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UserCrudPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCrudPasswordComponent", function() { return UserCrudPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_help_help_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var src_app_components_mat_table_list_mat_table_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/mat-table-list/mat-table-list.component */ "./src/app/components/mat-table-list/mat-table-list.component.ts");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _components_navbar_user_navbar_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/navbar-user/navbar-user.component */ "./src/app/components/navbar-user/navbar-user.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _navidation_sidenav_list_admin_sidenav_list_admin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../navidation/sidenav-list-admin/sidenav-list-admin.component */ "./src/app/navidation/sidenav-list-admin/sidenav-list-admin.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");

























function UserCrudPasswordComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "BR");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "BR");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.error_message);
} }
function UserCrudPasswordComponent_div_17_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserCrudPasswordComponent_div_17_div_2_div_1_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const form_elem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.showHelp(form_elem_r7.help); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", form_elem_r7.label, " 000000");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r7.label);
} }
function UserCrudPasswordComponent_div_17_div_2_div_2_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r7.label);
} }
function UserCrudPasswordComponent_div_17_div_2_div_2_input_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 19);
} if (rf & 2) {
    const form_elem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r7.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", form_elem_r7.disabled);
} }
function UserCrudPasswordComponent_div_17_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserCrudPasswordComponent_div_17_div_2_div_2_label_1_Template, 3, 1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserCrudPasswordComponent_div_17_div_2_div_2_input_3_Template, 1, 2, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.myFormGroup.get(form_elem_r7.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.myFormGroup.get(form_elem_r7.label));
} }
function UserCrudPasswordComponent_div_17_div_2_div_3_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r7.label);
} }
function UserCrudPasswordComponent_div_17_div_2_div_3_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", item_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r26, " ");
} }
function UserCrudPasswordComponent_div_17_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserCrudPasswordComponent_div_17_div_2_div_3_label_2_Template, 3, 1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UserCrudPasswordComponent_div_17_div_2_div_3_Template_select_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r27.SelectOnChange($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Select your option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, UserCrudPasswordComponent_div_17_div_2_div_3_option_7_Template, 2, 2, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.myFormGroup.get(form_elem_r7.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r7.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", form_elem_r7.disabled == 1 ? "" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", form_elem_r7.paramValue);
} }
function UserCrudPasswordComponent_div_17_div_2_div_4_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r7.label);
} }
function UserCrudPasswordComponent_div_17_div_2_div_4_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topping_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", topping_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](topping_r33);
} }
function UserCrudPasswordComponent_div_17_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserCrudPasswordComponent_div_17_div_2_div_4_label_1_Template, 3, 1, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserCrudPasswordComponent_div_17_div_2_div_4_Template_mat_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r34.onSelectMultipleChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserCrudPasswordComponent_div_17_div_2_div_4_mat_option_3_Template, 2, 2, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.myFormGroup.get(form_elem_r7.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r7.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", form_elem_r7.paramValue);
} }
function UserCrudPasswordComponent_div_17_div_2_div_5_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r7.label);
} }
function UserCrudPasswordComponent_div_17_div_2_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UserCrudPasswordComponent_div_17_div_2_div_5_div_2_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r41.onCheckChangesNext($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const block_r40 = ctx.$implicit;
    const form_elem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", block_r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r7.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", block_r40, " ");
} }
function UserCrudPasswordComponent_div_17_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserCrudPasswordComponent_div_17_div_2_div_5_label_1_Template, 3, 1, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserCrudPasswordComponent_div_17_div_2_div_5_div_2_Template, 3, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.myFormGroup.get(form_elem_r7.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", form_elem_r7.paramValue);
} }
function UserCrudPasswordComponent_div_17_div_2_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-progress-spinner", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserCrudPasswordComponent_div_17_div_2_div_6_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r7.label);
} }
function UserCrudPasswordComponent_div_17_div_2_div_6_input_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 37);
} if (rf & 2) {
    const form_elem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r7.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", form_elem_r7.disabled);
} }
function UserCrudPasswordComponent_div_17_div_2_div_6_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", form_elem_r7.label, " is required ");
} }
function UserCrudPasswordComponent_div_17_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserCrudPasswordComponent_div_17_div_2_div_6_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserCrudPasswordComponent_div_17_div_2_div_6_label_3_Template, 3, 1, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserCrudPasswordComponent_div_17_div_2_div_6_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54); const form_elem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r52.loadSelectionList(form_elem_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "collections");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, UserCrudPasswordComponent_div_17_div_2_div_6_input_8_Template, 1, 2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, UserCrudPasswordComponent_div_17_div_2_div_6_div_9_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.spinerSelectedFieldpopUp);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.myFormGroup.get(form_elem_r7.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.myFormGroup.get(form_elem_r7.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.myFormGroup.get(form_elem_r7.label).errors == null ? null : ctx_r13.myFormGroup.get(form_elem_r7.label).errors.required);
} }
function UserCrudPasswordComponent_div_17_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserCrudPasswordComponent_div_17_div_2_div_1_Template, 6, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserCrudPasswordComponent_div_17_div_2_div_2_Template, 4, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserCrudPasswordComponent_div_17_div_2_div_3_Template, 8, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UserCrudPasswordComponent_div_17_div_2_div_4_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, UserCrudPasswordComponent_div_17_div_2_div_5_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, UserCrudPasswordComponent_div_17_div_2_div_6_Template, 10, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r7.type == "password4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r7.type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r7.type == "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r7.type == "selectMultiple");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r7.type == "checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r7.type == "ValueApiSelect");
} }
function UserCrudPasswordComponent_div_17_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserCrudPasswordComponent_div_17_div_4_div_1_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r65); const form_elem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r63.showHelp(form_elem_r56.help); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", form_elem_r56.label, " 111");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r56.label);
} }
function UserCrudPasswordComponent_div_17_div_4_div_2_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r56.label);
} }
function UserCrudPasswordComponent_div_17_div_4_div_2_input_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 19);
} if (rf & 2) {
    const form_elem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r56.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", form_elem_r56.disabled);
} }
function UserCrudPasswordComponent_div_17_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserCrudPasswordComponent_div_17_div_4_div_2_label_1_Template, 3, 1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserCrudPasswordComponent_div_17_div_4_div_2_input_3_Template, 1, 2, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r58.myFormGroup.get(form_elem_r56.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r58.myFormGroup.get(form_elem_r56.label));
} }
function UserCrudPasswordComponent_div_17_div_4_div_3_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r56.label);
} }
function UserCrudPasswordComponent_div_17_div_4_div_3_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", item_r75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r75, " ");
} }
function UserCrudPasswordComponent_div_17_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserCrudPasswordComponent_div_17_div_4_div_3_label_2_Template, 3, 1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UserCrudPasswordComponent_div_17_div_4_div_3_Template_select_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r77); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r76.SelectOnChange($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Select your option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, UserCrudPasswordComponent_div_17_div_4_div_3_option_7_Template, 2, 2, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r59.myFormGroup.get(form_elem_r56.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r56.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", form_elem_r56.disabled == 1 ? "" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", form_elem_r56.paramValue);
} }
function UserCrudPasswordComponent_div_17_div_4_div_4_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r56.label);
} }
function UserCrudPasswordComponent_div_17_div_4_div_4_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topping_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", topping_r82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](topping_r82);
} }
function UserCrudPasswordComponent_div_17_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserCrudPasswordComponent_div_17_div_4_div_4_label_1_Template, 3, 1, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserCrudPasswordComponent_div_17_div_4_div_4_Template_mat_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r83.onSelectMultipleChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserCrudPasswordComponent_div_17_div_4_div_4_mat_option_3_Template, 2, 2, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r60.myFormGroup.get(form_elem_r56.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r56.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", form_elem_r56.paramValue);
} }
function UserCrudPasswordComponent_div_17_div_4_div_5_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r56.label);
} }
function UserCrudPasswordComponent_div_17_div_4_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UserCrudPasswordComponent_div_17_div_4_div_5_div_2_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r91); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r90.onCheckChangesNext($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const block_r89 = ctx.$implicit;
    const form_elem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", block_r89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r56.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", block_r89, " ");
} }
function UserCrudPasswordComponent_div_17_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserCrudPasswordComponent_div_17_div_4_div_5_label_1_Template, 3, 1, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserCrudPasswordComponent_div_17_div_4_div_5_div_2_Template, 3, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r61.myFormGroup.get(form_elem_r56.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", form_elem_r56.paramValue);
} }
function UserCrudPasswordComponent_div_17_div_4_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-progress-spinner", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserCrudPasswordComponent_div_17_div_4_div_6_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r56.label);
} }
function UserCrudPasswordComponent_div_17_div_4_div_6_input_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 37);
} if (rf & 2) {
    const form_elem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r56.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", form_elem_r56.disabled);
} }
function UserCrudPasswordComponent_div_17_div_4_div_6_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", form_elem_r56.label, " is required ");
} }
function UserCrudPasswordComponent_div_17_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserCrudPasswordComponent_div_17_div_4_div_6_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserCrudPasswordComponent_div_17_div_4_div_6_label_3_Template, 3, 1, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserCrudPasswordComponent_div_17_div_4_div_6_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r103); const form_elem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r101.loadSelectionList(form_elem_r56); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "collections");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, UserCrudPasswordComponent_div_17_div_4_div_6_input_8_Template, 1, 2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, UserCrudPasswordComponent_div_17_div_4_div_6_div_9_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r62.spinerSelectedFieldpopUp);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r62.myFormGroup.get(form_elem_r56.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r62.myFormGroup.get(form_elem_r56.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r62.myFormGroup.get(form_elem_r56.label).errors == null ? null : ctx_r62.myFormGroup.get(form_elem_r56.label).errors.required);
} }
function UserCrudPasswordComponent_div_17_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserCrudPasswordComponent_div_17_div_4_div_1_Template, 6, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserCrudPasswordComponent_div_17_div_4_div_2_Template, 4, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserCrudPasswordComponent_div_17_div_4_div_3_Template, 8, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UserCrudPasswordComponent_div_17_div_4_div_4_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, UserCrudPasswordComponent_div_17_div_4_div_5_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, UserCrudPasswordComponent_div_17_div_4_div_6_Template, 10, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r56.type == "password4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r56.type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r56.type == "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r56.type == "selectMultiple");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r56.type == "checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r56.type == "ValueApiSelect");
} }
function UserCrudPasswordComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserCrudPasswordComponent_div_17_div_2_Template, 7, 6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UserCrudPasswordComponent_div_17_div_4_Template, 7, 6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.formInputLoop1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.formInputLoop2);
} }
function UserCrudPasswordComponent_div_18_div_1_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserCrudPasswordComponent_div_18_div_1_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password must be at least 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserCrudPasswordComponent_div_18_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserCrudPasswordComponent_div_18_div_1_div_8_div_1_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserCrudPasswordComponent_div_18_div_1_div_8_div_2_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r109.f.Password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r109.f.Password.errors.minlength);
} }
function UserCrudPasswordComponent_div_18_div_1_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Passwords must match");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserCrudPasswordComponent_div_18_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserCrudPasswordComponent_div_18_div_1_div_13_div_1_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r110.f.confirmPassword.errors.mustMatch);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function UserCrudPasswordComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Password555555");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserCrudPasswordComponent_div_18_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r115); const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r114.changePasswordType(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, UserCrudPasswordComponent_div_18_div_1_div_8_Template, 3, 2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Confirm Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, UserCrudPasswordComponent_div_18_div_1_div_13_Template, 2, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("type", ctx_r106.passwordType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx_r106.submitted && ctx_r106.f.Password.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r106.hide ? "visibility" : "visibility_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r106.submitted && ctx_r106.f.Password.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("type", ctx_r106.passwordType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx_r106.submitted && ctx_r106.f.confirmPassword.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r106.submitted && ctx_r106.f.confirmPassword.errors);
} }
function UserCrudPasswordComponent_div_18_div_2_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r105.label);
} }
function UserCrudPasswordComponent_div_18_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "BR");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserCrudPasswordComponent_div_18_div_2_label_2_Template, 3, 1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserCrudPasswordComponent_div_18_div_2_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r119); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r118.download(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r107.myFormGroup.get(form_elem_r105.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r105.label);
} }
function UserCrudPasswordComponent_div_18_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "textarea", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r105.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r105.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", form_elem_r105.disabled);
} }
function UserCrudPasswordComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserCrudPasswordComponent_div_18_div_1_Template, 14, 11, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserCrudPasswordComponent_div_18_div_2_Template, 8, 2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserCrudPasswordComponent_div_18_div_3_Template, 6, 3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r105 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r105.type == "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r105.type == "uploadFile" && form_elem_r105.value != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r105.type == "textarea");
} }
function UserCrudPasswordComponent_input_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 57);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r4.submitLabel);
} }
class UserCrudPasswordComponent {
    constructor(matDialog, //private localStorageService: LocalstorageService, 
    mainService, crudService, formBuilder, httpClient, activeRoute) {
        this.matDialog = matDialog;
        this.mainService = mainService;
        this.crudService = crudService;
        this.formBuilder = formBuilder;
        this.httpClient = httpClient;
        this.activeRoute = activeRoute;
        //public listData : EchangeData ={displayedColumns:[],data:[],actionColumns:[],actionButton:{},type:'df'}
        this.displayedColumns = [];
        this.error_message = "";
        this.spinerSelectedFieldpopUp = false;
        this.selectedDate = new Date();
        this.FilterColumnType = false;
        this.group = {};
        this.formInput = [];
        this.formInputLoop = [];
        this.formInputLoop1 = [];
        this.formInputLoop2 = [];
        this.uploadFilePath = null;
        this.UploadDirectory = "";
        this.submitLabel = "validate";
        this.csvFolder = []; //| null = null;
        this.multipleSelectedValue = [];
        this.hide = false;
        this.startDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date());
        this.endDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date());
        this.spinerSelectedField = false;
        this.passwordType = "password";
        this.Password = '';
        this.PasswordC = '';
        //cronstrue1=""
        this.dataForm = [];
        //addFilterButton:Boolean=false;
        this.data = {};
        this.countChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataConf = {};
        this.form = {};
        this.submitted = true;
        this.myFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](this.group);
    }
    getJson() {
        // let paramString1='colName=Ref_Request&colValue='+this.echangeData['Ref_Request']+'&sheet=userRequestValidation'
        console.log(' json  getJson ');
        return this.httpClient.get("assets/dbUserForm.json").toPromise();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            localStorage.setItem('route', this.activeRoute.snapshot.routeConfig.path);
            console.log('route ', this.activeRoute.snapshot.routeConfig.path);
            this.dataConf = yield this.getJson();
            if (this.activeRoute.snapshot.routeConfig.path.toUpperCase().includes('CHANGEUSERPASSWORD')) {
                this.form = this.dataConf['formChangePassword'];
                this.formTitle = this.dataConf['TitleFormChangePassword'];
            }
            else {
                this.form = this.dataConf['form'];
                this.formTitle = this.dataConf['TitleFormObject'];
            }
            console.log(this.formTitle, ' this.dataConf  ', this.dataConf);
            //this.listData.displayedColumns=[] //this.displayedColumns;
            //this.listData.actionColumns=[]
            //localStorage.setItem('route','ListUser')
            //console.log(' Route',localStorage.getItem('route'))  
            let data = yield this.getAllObjects();
            this.echangeData = data[0];
            console.log(' this.echangeData  ', this.echangeData);
            /*    if ( this.echangeData != undefined ){
                  let o={"User":localStorage.getItem("user")}
                  let sheet='user'
                 this.mainService.getDataByCols(sheet,o).subscribe(
                  data =>{
                    this.listData.data = data;
                   }
                )}else  {
                  this.listData.data = [];
                  this.echangeData=[]
                }
            */
            this.group = {};
            this.formInput = [];
            this.formInputLoop = [];
            this.myFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](this.group);
            let myDate = new Date();
            let today = myDate.getFullYear() + '-' + (('0' + (myDate.getMonth() + 1)).slice(-2)) + '-' + ('0' + myDate.getDate()).slice(-2);
            if (this.echangeData.length > 0) {
                this.data = { action: 'action', id: 5, type: 'type', currentModule: 'module321', droppedModules: [],
                    form: this.form };
            }
            else {
                this.data = { action: 'action', id: 5, type: 'type', currentModule: 'module321', droppedModules: [],
                    form: this.form };
            }
            let dataSize = Object.keys(this.data).length;
            this.formInput = [];
            //this.submitLabel='Close'
            if (!(typeof this.data['form'] === 'undefined')) {
                const dataFormClone = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.data['form']);
                this.dataForm = dataFormClone;
                this.formInput = Object.values(dataFormClone);
                for (var i in this.formInput) {
                    if (this.formInput[i]['hide'] != 1) {
                        this.formInputLoop.push(this.formInput[i]);
                        this.group[this.formInput[i]['label']] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '' });
                        if (this.formInput[i]['required'] == 1) {
                            this.myFormGroup.controls[this.formInput[i]['label']].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
                        }
                        if (this.formInput[i]['label'] == "Password") {
                            this.myFormGroup.controls[this.formInput[i]['label']].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6));
                            this.group["confirmPassword"] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [this.patternValidator()]);
                            //  this.group["Password"] = new FormControl('',[Validators.required,Validators.minLength(6)])
                        }
                        /* if ( this.formInput[i]['label'] == "confirmPassword"){
                          this.myFormGroup.controls[this.formInput[i]['label']].setValidators(this.patternValidator())
                          //
            
                         }*/
                        if (this.echangeData[this.formInput[i]['label'].replace(/ /g, '_')] != undefined) {
                            this.myFormGroup.controls[this.formInput[i]['label']].setValue(this.echangeData[this.formInput[i]['label'].replace(/ /g, '_')]);
                        }
                        else {
                            this.myFormGroup.controls[this.formInput[i]['label']].setValue('');
                        }
                        if (this.formInput[i]['type'] == 'startDate') {
                            this.startDate.setValue(this.formInput[i]['value']);
                            console.log(i, ' *startDate ***  ', this.myFormGroup.controls[this.formInput[i]['label']]);
                        }
                        if (this.formInput[i]['type'] == 'endDate') {
                            this.endDate.setValue(this.formInput[i]['value']);
                            //console.log( i, ' *startDate ***  ', this.myFormGroup.controls[this.formInput[i]['label']] ) 
                        }
                    }
                    this.group["PasswordCC"] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '' });
                    //this.myFormGroup.controls["confirmPassword"].setValue('') 
                    //this.myFormGroup.controls["password"].setValue('') 
                    //this.myFormGroup.controls["PasswordCC"].setValue('') 
                    //this.myFormGroup.controls["password"].setValidators(Validators.required)
                    //this.myFormGroup.controls["password"].setValidators(Validators.minLength(6))
                    //this.myFormGroup.controls["confirmPassword"].setValidators(Validators.required)
                    //this.myFormGroup.controls["confirmPassword"].setValidators(Validators.minLength(6))
                    //  this.myFormGroup.controls["confirmPassword"].setPatt(pattern(this.passwordMatch("password","confirmPassword") )
                }
                //  prepare data for two column 
                let keys = Object.keys(this.formInputLoop);
                for (var el = 0; el < this.formInputLoop.length; el++) {
                    if (el % 2 == 0)
                        this.formInputLoop1.push(this.formInputLoop[el]);
                    else
                        this.formInputLoop2.push(this.formInputLoop[el]);
                }
            }
            else
                this.formInput = [];
        });
    }
    ;
    get f() { return this.myFormGroup.controls; }
    patternValidator() {
        return (control) => {
            if (!control.value) {
                console.log(' patternValidator  !!!! control.value  NULLLLL ', control.value);
                return null;
            }
            /*if (!control.value.toUpperCase().includes('SELECT') ||
            !control.value.toUpperCase().includes('FROM') ) {
              console.log('patternValidator control.value.dont includes("select or from ")  ')
              control.setErrors({ invalidQuery: true });
              return { invalidQuery: true };
            } else
            {
            return null;
            }*/
            if (this.f.Password.value !== control.value) {
                control.setErrors({ mustMatch: true });
                return { mustMatch: true };
            }
            else {
                control.setErrors(null);
                return null;
            }
        };
    }
    passwordMatch(password, confirmPassword) {
        return (control) => {
            console.log(this.f.password.value, '  controle value ', control.value);
            if (!control.value) {
                console.log(' patternValidator  !!!! control.value  NULLLLL ', control.value);
                return null;
            }
            if (this.f.password.value !== control.value) {
                control.setErrors({ mustMatch: true });
                return { mustMatch: true };
            }
            else {
                control.setErrors(null);
                return null;
            }
        };
    }
    checkPassword() {
        return JSON.stringify(this.f.confirmPassword.errors);
    }
    checkPasswordC() {
        return this.myFormGroup.get('PasswordCC')['value'] + this.myFormGroup.get('PasswordCC')['value'].length;
    }
    onSelectMultipleChange(event) {
        this.multipleSelectedValue = event;
    }
    changePasswordType() {
        if (this.passwordType == 'password') {
            this.passwordType = 'text';
        }
        else {
            this.passwordType = 'password';
        }
        this.hide = !this.hide;
    }
    loadSelectionList(form_elem) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            {
                console.log(' loadSelectionList ', JSON.stringify(form_elem));
                const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
                //The user can't close the dialog by clicking outside its body
                //dialogConfig.disableClose = true;
                console.log(' openFolderServerModal  ');
                dialogConfig.position = { top: '0%', left: '20%' };
                dialogConfig.id = "modal-component";
                dialogConfig.height = "800px";
                dialogConfig.width = "800px";
                dialogConfig.autoFocus = false;
                dialogConfig.height = '100%';
                this.spinerSelectedFieldpopUp = true;
                let echangeData = {};
                let val = yield this.getDataForSelect();
                this.spinerSelectedFieldpopUp = false;
                console.log('  getAllUsers ', JSON.stringify(val));
                echangeData['data'] = val;
                echangeData['displayedColumns'] = ['Prenom', 'Nom', 'Ref', 'Poste', 'N+1', 'N+2', 'Director', 'Email', 'Phone'];
                echangeData['actionColumns'] = ['Action'];
                dialogConfig.data = echangeData;
                this.spinerSelectedFieldpopUp = false;
                const modalDialog = this.matDialog.open(src_app_components_mat_table_list_mat_table_list_component__WEBPACK_IMPORTED_MODULE_6__["MatTableListComponent"], dialogConfig); // load the help component
                modalDialog.afterClosed().subscribe(result => {
                    // if(result.event == 'Add'){
                    // console.log(' close dialog ', JSON.parse(result.data)['data'][0]['Ref'])
                    this.myFormGroup.controls[form_elem['label']].setValue(JSON.parse(result.data)['data'][0]['Ref']);
                });
            }
        });
    }
    getDataForSelect() {
        let sheet = 'user';
        //this.usuariosService.updateUserRequestValidation(this.crudData).subscribe(resultat => {
        return this.mainService.getAllRowsSheet(sheet).toPromise();
        //return this.crudService.updateJsonDataToSheet(data,'dataObject').toPromise()
    }
    SelectOnChange(event) {
        this.FilterColumnType = event.toUpperCase().includes('DATE') || event.toUpperCase().includes('DAY');
    }
    pickerEvent(event) {
        this.selectedDate = event.value;
        this.myFormGroup.controls['Filter Value'].setValue(this.selectedDate.getFullYear() + '-' + (this.selectedDate.getMonth() + 1) + '-' + ('0' + this.selectedDate.getDate()).slice(-2));
    }
    onFileChanged(event) {
        this.uploadFilePath = event.target.files[0]; // get the file name     
    }
    download() {
        let vfileToBeName = this.echangeData['Attached_File'];
        const source = this.echangeData['base64'];
        const link = document.createElement("a");
        link.href = source;
        link.download = `${vfileToBeName}`;
        link.click();
    }
    uploadFile(file) {
        const uploadData = new FormData();
        let filename = file;
        uploadData.append('filename', filename);
        uploadData.append('folder', this.UploadDirectory);
        uploadData.append('user', localStorage.getItem('user'));
        console.log(' uploadFile ', uploadData);
    }
    onFolderChanged(event) {
        console.log(' onFolderChanged ', event.target.files);
        var filesSelected = event.target.files;
        let output = document.getElementById("listing");
        var tmpArr = [];
        for (let item of filesSelected) {
            tmpArr.push(item.webkitRelativePath);
        }
        this.csvFolder = tmpArr; // get the file name 
    }
    // help modal
    showHelp(help) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.id = "modal-help";
        dialogConfig.height = "450px";
        dialogConfig.width = "800px";
        dialogConfig.data = help; // pass help variable to the helpcomponent
        const modalDialog = this.matDialog.open(src_app_help_help_component__WEBPACK_IMPORTED_MODULE_5__["HelpComponent"], dialogConfig); // load the help component
    }
    isSelected(data) {
        console.log(' isSelected  ', data);
    }
    // onchange checkbox function for "next"
    onCheckChangesNext(event) {
        // get the form array "next" and add data in every changes
        // const formArrayNext: FormArray = this.myFormGroup.get('next') as FormArray;
        this.formInput.map(elem => {
            if (this.dataForm[elem['label'].replace(/ /g, '_')]['type'] == 'checkbox') {
                let ar = this.dataForm[elem['label'].replace(/ /g, '_')]['valueSelected'];
                console.log(' el ', event.target.value, '   at  ', ar.indexOf(event.target.value));
                if (ar.indexOf(event.target.value) >= 0 && !event.target.checked) {
                    console.log(' remove ', event.target.value, '   at  ', ar.indexOf(event.target.value));
                    ar.splice(ar.indexOf(event.target.value), 1);
                }
                if (ar.indexOf(event.target.value) == -1 && event.target.checked)
                    ar.push(event.target.value);
                this.dataForm[elem['label'].replace(/ /g, '_')]['valueSelected'] = ar;
                console.log(elem['label'], 'value  ', this.dataForm[elem['label'].replace(/ /g, '_')]['valueSelected']);
            }
        });
    }
    cancel() {
        this.countChanged.emit(this.dataForm);
    }
    buildOjectFromDataForm(obj) {
        var data = {};
        if (Object.keys(this.echangeData).length > 1) {
            data["co-owner_id"] = this.echangeData["co-owner_id"];
        }
        for (var el in obj) {
            console.log(el, obj[el]['value']);
            data[el] = obj[el]['value'];
        }
        return data;
    }
    getAllObjects() {
        let o = {};
        //{'User':localStorage.getItem('user')}
        this.error_message = "";
        var result = [];
        if (this.activeRoute.snapshot.params.req != undefined) {
            let req = this.activeRoute.snapshot.params.req;
            if (req != localStorage.getItem('user')) {
                this.error_message = "Can\'t change password for Ref :" + req;
                return result;
            }
            o['Ref'] = req;
        }
        else {
            o['Ref'] = localStorage.getItem("user");
        }
        result = this.mainService.getDataByCols('co-owner', o).toPromise();
        return result;
    }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // check validation form  
            for (var i in this.formInputLoop) {
                if (!this.myFormGroup.controls[this.formInputLoop[i]['label']].valid) {
                    alert(this.myFormGroup.controls[this.formInputLoop[i]['label']] + '  Form Submitted Error : ' + '    ' + this.formInputLoop[i]["label"]);
                    return 0;
                }
            }
            let filename = this.csv; // get the file name 
            this.formInputLoop.map(elem => {
                if (this.dataForm[elem['label'].replace(/ /g, '_')]['type'] == 'text' ||
                    this.dataForm[elem['label'].replace(/ /g, '_')]['type'] == 'textarea' ||
                    this.dataForm[elem['label'].replace(/ /g, '_')]['type'] == 'password') {
                    let tmpText = this.myFormGroup.get(elem['label']).value; //.replace(/'/g,'~').replace(/"/g,'~')
                    this.dataForm[elem['label'].replace(/ /g, '_')].value = tmpText;
                }
                else if (this.dataForm[elem['label'].replace(/ /g, '_')]['type'] != 'checkbox' &&
                    this.dataForm[elem['label'].replace(/ /g, '_')]['type'] != 'selectMultiple' &&
                    this.dataForm[elem['label'].replace(/ /g, '_')]['type'] != 'savefile' &&
                    !elem['label'].includes('Repertoire')) {
                    this.dataForm[elem['label'].replace(/ /g, '_')].value = this.myFormGroup.get(elem['label']).value;
                }
                if (elem['label'].includes('fichier1')) {
                    this.dataForm[elem['label'].replace(/ /g, '_')].value = this.filename; //csv['name']
                }
                if (elem['label'].includes('Repertoire')) {
                    this.dataForm[elem['label'].replace(/ /g, '_')].value = this.csvFolder;
                    //console.log(' fichier   ffffffffff  ',JSON.stringify(this.myFormGroup.get(elem['label'])))
                }
                if (this.dataForm[elem['label'].replace(/ /g, '_')]['type'] == 'selectMultiple') {
                    this.dataForm[elem['label'].replace(/ /g, '_')].value = this.multipleSelectedValue;
                }
            });
            if (this.echangeData.length == 0) {
                let data = this.buildOjectFromDataForm(this.dataForm);
                console.log('  this.dataForm length 0000000', JSON.stringify(data));
                /*await this.crudService.insertJsonDataToSheet(data,'dataObject').subscribe(data => {
                 
                 console.log(' retour 0000000',data);
                }
                ) */
                this.spinerSelectedField = true;
                let responseData = yield this.insertJsonDataToSheet(data);
                this.spinerSelectedField = false;
                console.log(' before   getAll test ', responseData);
                this.countChanged.emit(this.dataForm);
                return 0;
            }
            else {
                let data = this.buildOjectFromDataForm(this.dataForm);
                console.log(JSON.stringify(this.echangeData), '  this.dataForm length 0000000', JSON.stringify(data));
                /*await this.crudService.insertJsonDataToSheet(data,'dataObject').subscribe(data => {
                 
                 console.log(' retour 0000000',data);
                }
                ) */
                this.spinerSelectedField = true;
                let responseData = yield this.updateJsonDataToSheet(data);
                this.spinerSelectedField = false;
                console.log(' before   getAll test ', responseData);
                this.countChanged.emit(this.dataForm);
                return 0;
            }
        });
    }
    insertJsonDataToSheet(data) {
        // let paramString1='colName=Ref_Request&colValue='+this.echangeData['Ref_Request']+'&sheet=userRequestValidation'
        return this.crudService.insertJsonDataToSheet(data, 'co-owner').toPromise();
    }
    updateJsonDataToSheet(data) {
        // let paramString1='colName=Ref_Request&colValue='+this.echangeData['Ref_Request']+'&sheet=userRequestValidation'
        return this.crudService.updateJsonDataToSheet(data, 'co-owner').toPromise();
    }
    ngAfterViewInit() {
        /* for (var i in this.formInputLoop) {
               
           console.log(this.myFormGroup.controls[this.formInputLoop[i]['label']], 'required ',this.myFormGroup.get(this.formInputLoop[i]['label'])['error'])
            
     
           }*/
        if (localStorage.getItem('data') != null) {
            //this.updateProject()
        }
    }
}
UserCrudPasswordComponent.ɵfac = function UserCrudPasswordComponent_Factory(t) { return new (t || UserCrudPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_7__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_8__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"])); };
UserCrudPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserCrudPasswordComponent, selectors: [["app-user-crud-password"]], outputs: { countChanged: "countChanged" }, decls: 21, vars: 6, consts: [["mode", "side", 3, "sidenavToggle"], ["mode", "side", "opened", "true"], ["sidenav", ""], ["mode", "side", 3, "sidenavClose"], [2, "font-size", "smaller"], [3, "formGroup", "ngSubmit"], ["style", "color: red;text-align: center;", 4, "ngIf"], ["class", "col", 4, "ngIf"], [4, "ngFor", "ngForOf"], [2, "display", "flex", "justify-content", "center"], ["style", "width: 25%", "type", "submit", "class", "btn btn-config", 3, "value", 4, "ngIf"], [2, "color", "red", "text-align", "center"], [1, "col"], [4, "ngIf"], ["src", "assets/info.png", 1, "info", 3, "click"], ["type", "password", 3, "formControlName"], ["style", "width: 30%", "for", "test", 4, "ngIf"], ["style", "\n                width: 65%;\n                background-color: transparent;\n                border: none;\n                outline: none;\n              ", "id", "test", "type", "text", 3, "readonly", "formControlName", 4, "ngIf"], ["for", "test", 2, "width", "30%"], ["id", "test", "type", "text", 2, "width", "65%", "background-color", "transparent", "border", "none", "outline", "none", 3, "readonly", "formControlName"], ["id", "test", 2, "width", "68%", 3, "formControlName", "change"], ["value", "", "disabled", "", "selected", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], ["multiple", "", 1, "form-select", 3, "formControlName", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "checkbox", 3, "value", "formControlName", "change"], ["class", "wrapper", "style", "height: 20px; align-self: center", 4, "ngIf"], ["style", "width: 30%", 4, "ngIf"], ["type", "button", "matTooltip", "select file", 1, "btn", "btn-default", 3, "click"], [2, "margin-top", "10%"], ["style", "\n                  background-color: transparent;\n                  border: none;\n                  outline: none;\n                ", "type", "text", 3, "readonly", "formControlName", 4, "ngIf"], ["style", "color: red", 4, "ngIf"], [1, "wrapper", 2, "height", "20px", "align-self", "center"], ["mode", "indeterminate", "diameter", "40", 1, "inner", 2, "left", "50%"], [2, "width", "30%"], ["type", "text", 2, "background-color", "transparent", "border", "none", "outline", "none", 3, "readonly", "formControlName"], [2, "color", "red"], ["class", "form-row", 4, "ngIf"], ["class", "col-6", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "form-row"], [1, "form-group", "col"], [2, "width", "10%"], ["formControlName", "Password", 1, "form-control", 2, "width", "32%", 3, "type", "ngClass"], ["type", "button", "id", "picon", 2, "background-color", "transparent", "border", "unset", 3, "click"], ["matSuffix", ""], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "confirmPassword", 1, "form-control", 2, "width", "32%", 3, "type", "ngClass"], [1, "invalid-feedback"], [1, "col-6"], ["id", "test", "type", "text", 2, "background-color", "transparent", "border", "none", "outline", "none", 3, "formControlName"], ["matTooltip", "Download File", 1, "btn", 3, "click"], [2, "margin-top", "15%"], [1, "row"], ["rows", "3", "cols", "35", "spellcheck", "false", 1, "form-control", 2, "font-size", "10px", 3, "readonly", "formControlName"], ["type", "submit", 1, "btn", "btn-config", 2, "width", "25%", 3, "value"]], template: function UserCrudPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-navbar-user", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sidenavToggle", function UserCrudPasswordComponent_Template_app_navbar_user_sidenavToggle_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r122); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "app-sidenav-list-admin", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sidenavClose", function UserCrudPasswordComponent_Template_app_sidenav_list_admin_sidenavClose_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r122); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UserCrudPasswordComponent_Template_form_ngSubmit_10_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "BR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, UserCrudPasswordComponent_div_15_Template, 5, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "BR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, UserCrudPasswordComponent_div_17_Template, 5, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, UserCrudPasswordComponent_div_18_Template, 4, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, UserCrudPasswordComponent_input_20_Template, 1, 1, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error_message.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formInputLoop.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.formInputLoop);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formInputLoop.length > 0);
    } }, directives: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_11__["LayoutComponent"], _components_navbar_user_navbar_user_component__WEBPACK_IMPORTED_MODULE_12__["NavbarUserComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenav"], _navidation_sidenav_list_admin_sidenav_list_admin_component__WEBPACK_IMPORTED_MODULE_14__["SidenavListAdminComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgClass"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatSuffix"]], styles: ["fieldset[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    margin-left: 20vw;\r\n    border: 0px none transparent;\r\n    background: none;\r\n  }\r\n \r\n  select[_ngcontent-%COMP%] {\r\n    \r\n    max-height: 30px;\r\n    \r\n    margin-bottom: .5em;\r\n    border-radius: 4px;\r\n  }\r\n \r\n  .dropbtn[_ngcontent-%COMP%]  {\r\n    display: inline-block;\r\n    margin-bottom: -3px;\r\n    margin-right: 4px;\r\n  }\r\n \r\n  input[_ngcontent-%COMP%] {\r\n    \r\n    max-height: 30px;\r\n    \r\n    margin-bottom: .5em;\r\n    border-radius: 4px;\r\n    \r\n    \r\n  }\r\n \r\n  input1[_ngcontent-%COMP%] {\r\n    \r\n    max-height: 30px;\r\n    \r\n    margin-bottom: .5em;\r\n    border-radius: 4px;\r\n    \r\n    \r\n    border-radius: 4px;\r\n  }\r\n \r\n  legend[_ngcontent-%COMP%] {\r\n   \r\n    text-align:center;\r\n    margin: 0 auto;\r\n  }\r\n \r\n  \r\n \r\n  \r\n \r\n  .row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n  }\r\n \r\n  .input-field[_ngcontent-%COMP%] {\r\n    margin-left: 1em;\r\n    padding: .5em;\r\n    margin-bottom: .5em;\r\n  }\r\n \r\n  .config-field[_ngcontent-%COMP%] {\r\n    box-shadow: 2px 2px 5px 2px;\r\n    border: 2px #d9d9d9;\r\n    border-radius: 5px;\r\n    \r\n    margin: 0 auto;\r\n    padding: 15px 20px 20px;\r\n    display: block;\r\n    text-align: left;\r\n    \r\n   \r\n     \r\n    \r\n    background-color: #f5f7f7;\r\n}\r\n \r\n  .config-field1[_ngcontent-%COMP%] {\r\n    box-shadow: 2px 2px 5px 2px;\r\n    border: 2px #d9d9d9;\r\n    border-radius: 5px;\r\n    \r\n    margin: 0 auto;\r\n    \r\n    display: block;\r\n    text-align: center;\r\n    \r\n}\r\n \r\n  \r\n \r\n  .container[_ngcontent-%COMP%] {\r\n    display: block;\r\n    position: relative;\r\n    padding-left: 35px;\r\n    cursor: pointer;\r\n    font-size: 17px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    user-select: none;\r\n    background-color: transparent;\r\n    border-radius: 5px;\r\n    border: 2px solid #dceff0;\r\n    padding: 5px; \r\n}\r\n \r\n  \r\n \r\n  .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 0;\r\n    width: 0;\r\n}\r\n \r\n  \r\n \r\n  .checkmark[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 30px;\r\n    background-color: transparent;\r\n    border-right: 2px solid #5f7d8b;\r\n}\r\n \r\n  \r\n \r\n  .container[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .checkmark[_ngcontent-%COMP%] {\r\n    background-color: #ccc;\r\n}\r\n \r\n  \r\n \r\n  .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\r\n    background-color: #ccc;\r\n    \r\n}\r\n \r\n  \r\n \r\n  .checkmark[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n}\r\n \r\n  \r\n \r\n  .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\r\n    display: block;\r\n}\r\n \r\n  \r\n \r\n  .container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\r\n    left: calc(50% - 4px);\r\n    top: 50%;\r\n    width: 7px;\r\n    height: 10px;\r\n    border: solid white;\r\n    border-width: 0px 3px 2px 0;\r\n    transform: rotate(45deg) translate(-50%, -50%);\r\n}\r\n \r\n  .input-file[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n}\r\n \r\n  \r\n \r\n  .btn-config[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background-color: #f27839;\r\n    border: 0;\r\n    border-radius: 8px;\r\n   \r\n   \r\n    color: #fff;\r\n    font-weight: 500;\r\n    padding: 10px;\r\n}\r\n \r\n  .info[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n    height: 20px;\r\n    cursor: pointer;\r\n    padding: 10px;\r\n\r\n}\r\n \r\n  .col[_ngcontent-%COMP%]{display:flex;}\r\n \r\n  .col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{flex:1}\r\n \r\n  .invisible[_ngcontent-%COMP%]{\r\n    display: block;\r\n    visibility: hidden;\r\n    height: 0;\r\n    width: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci91c2VyLWNydWQtcGFzc3dvcmQvdXNlci1jcnVkLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25COztFQUVGO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEI7d0JBQ29CO0VBQ3RCOztFQUNBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtFQUNwQjs7RUFFQTtHQUNDLGdCQUFnQjtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCOztFQUVBOzs7O3VCQUlxQjs7RUFDdEIsS0FBSzs7RUFFTjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0VBRUY7SUFDSSwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjs7S0FFZjsrQkFDMEI7SUFDM0IsNkJBQTZCO0lBQzdCLHlCQUF5QjtBQUM3Qjs7RUFDQTtJQUNJLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEI7K0JBQzJCO0FBQy9COztFQUNBLGtCQUFrQjs7RUFDbEI7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFFdEIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0VBQ0Esd0NBQXdDOztFQUN4QztJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBZTtJQUNmLFNBQVM7SUFDVCxRQUFRO0FBQ1o7O0VBQ0EsNkJBQTZCOztFQUM3QjtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLCtCQUErQjtBQUNuQzs7RUFDQSwrQ0FBK0M7O0VBQy9DO0lBQ0ksc0JBQXNCO0FBQzFCOztFQUNBLHdEQUF3RDs7RUFDeEQ7SUFDSSxzQkFBc0I7SUFDdEIsOEJBQThCO0FBQ2xDOztFQUNBLDZEQUE2RDs7RUFDN0Q7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0VBQ0Esb0NBQW9DOztFQUNwQztJQUNJLGNBQWM7QUFDbEI7O0VBQ0Esa0NBQWtDOztFQUNsQztJQUNJLHFCQUFxQjtJQUNyQixRQUFRO0lBQ1IsVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLDhDQUE4QztBQUNsRDs7RUFDQTtJQUNJLGVBQWU7QUFDbkI7O0VBQ0E7O0VBRUU7O0VBQ0Y7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxrQkFBa0I7R0FDbkI7S0FDRTtHQUNGO0tBQ0U7SUFDRCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0VBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhOztBQUVqQjs7RUFFQSxLQUFLLFlBQVksQ0FBQzs7RUFDbEIsU0FBUyxNQUFNOztFQUVmO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdXNlci91c2VyLWNydWQtcGFzc3dvcmQvdXNlci1jcnVkLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmaWVsZHNldCB7XHJcbiAgICAvKndpZHRoOiA1MHZ3OyovXHJcbiAgICAvKnRleHQtYWxpZ246IHJpZ2h0OyovXHJcbiAgICBtYXJnaW4tbGVmdDogMjB2dztcclxuICAgIGJvcmRlcjogMHB4IG5vbmUgdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIH1cclxuIFxyXG4gIHNlbGVjdCB7XHJcbiAgICAvKndpZHRoOiA2MCU7Ki9cclxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICAvKm1heC13aWR0aDogNTAwcHg7Ki9cclxuICAgIG1hcmdpbi1ib3R0b206IC41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG5cclxuICAuZHJvcGJ0biAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTNweDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIH1cclxuXHJcbmlucHV0IHtcclxuICAgIC8qd2lkdGg6IDYwJTsqL1xyXG4gICAgbWF4LWhlaWdodDogMzBweDtcclxuICAgIC8qbWF4LXdpZHRoOiA1MDBweDsqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIC8qbWF4LXdpZHRoOiAxMDBweDsqL1xyXG4gICAgLyptYXJnaW4tYm90dG9tOiAuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyovXHJcbiAgfVxyXG4gIGlucHV0MSB7XHJcbiAgICAvKndpZHRoOiA2MCU7Ki9cclxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICAvKm1heC13aWR0aDogNTAwcHg7Ki9cclxuICAgIG1hcmdpbi1ib3R0b206IC41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAvKm1heC13aWR0aDogMTAwcHg7Ki9cclxuICAgIC8qbWFyZ2luLWJvdHRvbTogLjVlbTsqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICBcclxuICBsZWdlbmQge1xyXG4gICAvKiB3aWR0aDogNzB2dzsqL1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIC8qbGFiZWwge1xyXG4gICBcclxuICAgIG1hcmdpbi1yaWdodDogMWVtOyBcclxuICAgIC8qd2lkdGg6IDMwJTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0OyovXHJcbiAvKiB9Ki9cclxuXHJcbi5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIH1cclxuICBcclxuICAuaW5wdXQtZmllbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIHBhZGRpbmc6IC41ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xyXG4gIH1cclxuXHJcbi5jb25maWctZmllbGQge1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4O1xyXG4gICAgYm9yZGVyOiAycHggI2Q5ZDlkOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8qbWluLWhlaWdodDogNTBweDsqL1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHggMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIC8qaGVpZ2h0OiAxMDAlOyovXHJcbiAgIFxyXG4gICAgIC8qYmFja2dyb3VuZC1jb2xvcjogI2QwZDBkMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4YjgyYjg7Ki9cclxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogI2RjZWZmMDsqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjdmNztcclxufVxyXG4uY29uZmlnLWZpZWxkMSB7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHg7XHJcbiAgICBib3JkZXI6IDJweCAjZDlkOWQ5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLyptaW4taGVpZ2h0OiA1cHg7Ki9cclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgLypwYWRkaW5nOiA1cHggMjBweCAyMHB4OyovXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qaGVpZ2h0OiAxMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDBkMGQwOyovXHJcbn1cclxuLyogVGhlIGNvbnRhaW5lciAqL1xyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2RjZWZmMDtcclxuICAgIHBhZGRpbmc6IDVweDsgXHJcbn1cclxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cclxuLmNvbnRhaW5lciBpbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbn1cclxuLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXHJcbi5jaGVja21hcmsge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjNWY3ZDhiO1xyXG59XHJcbi8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xyXG4uY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG59XHJcbi8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xyXG4uY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICM1ZjdkOGI7ICovXHJcbn1cclxuLyogQ3JlYXRlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cclxuLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4vKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXHJcbi5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cclxuLmNvbnRhaW5lciAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gNHB4KTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgd2lkdGg6IDdweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJvcmRlcjogc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweCAzcHggMnB4IDA7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcbi5pbnB1dC1maWxlIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4vKi5uZy12YWxpZCBsYWJlbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSovXHJcbi5idG4tY29uZmlnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyNzgzOTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgLyogd2lkdGg6IDEwMCU7XHJcbiAgICAqL1xyXG4gICAvKiBiYWNrZ3JvdW5kOiAjZjI3ODM5O1xyXG4gICAgKi9cclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmluZm8ge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxufVxyXG5cclxuLmNvbHtkaXNwbGF5OmZsZXg7fVxyXG4uY29sIGRpdntmbGV4OjF9XHJcblxyXG4uaW52aXNpYmxle1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserCrudPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-user-crud-password',
                templateUrl: './user-crud-password.component.html',
                styleUrls: ['./user-crud-password.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_7__["MainService"] }, { type: src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_8__["CrudService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }]; }, { countChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/views/user/user-crud/user-crud.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/user/user-crud/user-crud.component.ts ***!
  \*************************************************************/
/*! exports provided: UserCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCrudComponent", function() { return UserCrudComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_help_help_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var src_app_components_mat_table_list_mat_table_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/mat-table-list/mat-table-list.component */ "./src/app/components/mat-table-list/mat-table-list.component.ts");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");




















function UserCrudComponent_div_7_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserCrudComponent_div_7_div_2_div_1_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.showHelp(form_elem_r5.help); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", form_elem_r5.label, " 000000");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r5.label);
} }
function UserCrudComponent_div_7_div_2_div_2_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r5.label);
} }
function UserCrudComponent_div_7_div_2_div_2_input_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 13);
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", form_elem_r5.disabled);
} }
function UserCrudComponent_div_7_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserCrudComponent_div_7_div_2_div_2_label_1_Template, 3, 1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserCrudComponent_div_7_div_2_div_2_input_3_Template, 1, 2, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.myFormGroup.get(form_elem_r5.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.myFormGroup.get(form_elem_r5.label));
} }
function UserCrudComponent_div_7_div_2_div_3_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r5.label);
} }
function UserCrudComponent_div_7_div_2_div_3_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", item_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r24, " ");
} }
function UserCrudComponent_div_7_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserCrudComponent_div_7_div_2_div_3_label_2_Template, 3, 1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UserCrudComponent_div_7_div_2_div_3_Template_select_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r25.SelectOnChange($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Select your option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, UserCrudComponent_div_7_div_2_div_3_option_7_Template, 2, 2, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.myFormGroup.get(form_elem_r5.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", form_elem_r5.disabled == 1 ? "" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", form_elem_r5.paramValue);
} }
function UserCrudComponent_div_7_div_2_div_4_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r5.label);
} }
function UserCrudComponent_div_7_div_2_div_4_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topping_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", topping_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](topping_r31);
} }
function UserCrudComponent_div_7_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserCrudComponent_div_7_div_2_div_4_label_1_Template, 3, 1, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserCrudComponent_div_7_div_2_div_4_Template_mat_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r32.onSelectMultipleChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserCrudComponent_div_7_div_2_div_4_mat_option_3_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.myFormGroup.get(form_elem_r5.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", form_elem_r5.paramValue);
} }
function UserCrudComponent_div_7_div_2_div_5_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r5.label);
} }
function UserCrudComponent_div_7_div_2_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UserCrudComponent_div_7_div_2_div_5_div_2_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r39.onCheckChangesNext($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const block_r38 = ctx.$implicit;
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", block_r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", block_r38, " ");
} }
function UserCrudComponent_div_7_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserCrudComponent_div_7_div_2_div_5_label_1_Template, 3, 1, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserCrudComponent_div_7_div_2_div_5_div_2_Template, 3, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.myFormGroup.get(form_elem_r5.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", form_elem_r5.paramValue);
} }
function UserCrudComponent_div_7_div_2_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-progress-spinner", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserCrudComponent_div_7_div_2_div_6_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r5.label);
} }
function UserCrudComponent_div_7_div_2_div_6_input_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 31);
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", form_elem_r5.disabled);
} }
function UserCrudComponent_div_7_div_2_div_6_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", form_elem_r5.label, " is required ");
} }
function UserCrudComponent_div_7_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserCrudComponent_div_7_div_2_div_6_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserCrudComponent_div_7_div_2_div_6_label_3_Template, 3, 1, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserCrudComponent_div_7_div_2_div_6_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52); const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r50.loadSelectionList(form_elem_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "collections");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, UserCrudComponent_div_7_div_2_div_6_input_8_Template, 1, 2, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, UserCrudComponent_div_7_div_2_div_6_div_9_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.spinerSelectedFieldpopUp);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.myFormGroup.get(form_elem_r5.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.myFormGroup.get(form_elem_r5.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.myFormGroup.get(form_elem_r5.label).errors == null ? null : ctx_r11.myFormGroup.get(form_elem_r5.label).errors.required);
} }
function UserCrudComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserCrudComponent_div_7_div_2_div_1_Template, 6, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserCrudComponent_div_7_div_2_div_2_Template, 4, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserCrudComponent_div_7_div_2_div_3_Template, 8, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UserCrudComponent_div_7_div_2_div_4_Template, 4, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, UserCrudComponent_div_7_div_2_div_5_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, UserCrudComponent_div_7_div_2_div_6_Template, 10, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r5.type == "password4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r5.type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r5.type == "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r5.type == "selectMultiple");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r5.type == "checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r5.type == "ValueApiSelect");
} }
function UserCrudComponent_div_7_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserCrudComponent_div_7_div_4_div_1_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63); const form_elem_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r61.showHelp(form_elem_r54.help); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", form_elem_r54.label, " 111");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r54.label);
} }
function UserCrudComponent_div_7_div_4_div_2_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r54.label);
} }
function UserCrudComponent_div_7_div_4_div_2_input_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 13);
} if (rf & 2) {
    const form_elem_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r54.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", form_elem_r54.disabled);
} }
function UserCrudComponent_div_7_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserCrudComponent_div_7_div_4_div_2_label_1_Template, 3, 1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserCrudComponent_div_7_div_4_div_2_input_3_Template, 1, 2, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r56.myFormGroup.get(form_elem_r54.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r56.myFormGroup.get(form_elem_r54.label));
} }
function UserCrudComponent_div_7_div_4_div_3_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r54.label);
} }
function UserCrudComponent_div_7_div_4_div_3_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", item_r73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r73, " ");
} }
function UserCrudComponent_div_7_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserCrudComponent_div_7_div_4_div_3_label_2_Template, 3, 1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UserCrudComponent_div_7_div_4_div_3_Template_select_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r75); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r74.SelectOnChange($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Select your option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, UserCrudComponent_div_7_div_4_div_3_option_7_Template, 2, 2, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r57.myFormGroup.get(form_elem_r54.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r54.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", form_elem_r54.disabled == 1 ? "" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", form_elem_r54.paramValue);
} }
function UserCrudComponent_div_7_div_4_div_4_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r54.label);
} }
function UserCrudComponent_div_7_div_4_div_4_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topping_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", topping_r80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](topping_r80);
} }
function UserCrudComponent_div_7_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserCrudComponent_div_7_div_4_div_4_label_1_Template, 3, 1, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserCrudComponent_div_7_div_4_div_4_Template_mat_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r82); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r81.onSelectMultipleChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserCrudComponent_div_7_div_4_div_4_mat_option_3_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r58.myFormGroup.get(form_elem_r54.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r54.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", form_elem_r54.paramValue);
} }
function UserCrudComponent_div_7_div_4_div_5_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r54.label);
} }
function UserCrudComponent_div_7_div_4_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UserCrudComponent_div_7_div_4_div_5_div_2_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r89); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r88.onCheckChangesNext($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const block_r87 = ctx.$implicit;
    const form_elem_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", block_r87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r54.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", block_r87, " ");
} }
function UserCrudComponent_div_7_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserCrudComponent_div_7_div_4_div_5_label_1_Template, 3, 1, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserCrudComponent_div_7_div_4_div_5_div_2_Template, 3, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r59.myFormGroup.get(form_elem_r54.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", form_elem_r54.paramValue);
} }
function UserCrudComponent_div_7_div_4_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-progress-spinner", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserCrudComponent_div_7_div_4_div_6_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r54.label);
} }
function UserCrudComponent_div_7_div_4_div_6_input_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 31);
} if (rf & 2) {
    const form_elem_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r54.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", form_elem_r54.disabled);
} }
function UserCrudComponent_div_7_div_4_div_6_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", form_elem_r54.label, " is required ");
} }
function UserCrudComponent_div_7_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserCrudComponent_div_7_div_4_div_6_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserCrudComponent_div_7_div_4_div_6_label_3_Template, 3, 1, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserCrudComponent_div_7_div_4_div_6_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r101); const form_elem_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r99.loadSelectionList(form_elem_r54); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "collections");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, UserCrudComponent_div_7_div_4_div_6_input_8_Template, 1, 2, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, UserCrudComponent_div_7_div_4_div_6_div_9_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r60.spinerSelectedFieldpopUp);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r60.myFormGroup.get(form_elem_r54.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r60.myFormGroup.get(form_elem_r54.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r60.myFormGroup.get(form_elem_r54.label).errors == null ? null : ctx_r60.myFormGroup.get(form_elem_r54.label).errors.required);
} }
function UserCrudComponent_div_7_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserCrudComponent_div_7_div_4_div_1_Template, 6, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserCrudComponent_div_7_div_4_div_2_Template, 4, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserCrudComponent_div_7_div_4_div_3_Template, 8, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UserCrudComponent_div_7_div_4_div_4_Template, 4, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, UserCrudComponent_div_7_div_4_div_5_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, UserCrudComponent_div_7_div_4_div_6_Template, 10, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r54.type == "password4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r54.type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r54.type == "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r54.type == "selectMultiple");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r54.type == "checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r54.type == "ValueApiSelect");
} }
function UserCrudComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserCrudComponent_div_7_div_2_Template, 7, 6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UserCrudComponent_div_7_div_4_Template, 7, 6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.formInputLoop1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.formInputLoop2);
} }
function UserCrudComponent_div_8_div_1_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserCrudComponent_div_8_div_1_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password must be at least 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserCrudComponent_div_8_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserCrudComponent_div_8_div_1_div_8_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserCrudComponent_div_8_div_1_div_8_div_2_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r107.f.Password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r107.f.Password.errors.minlength);
} }
function UserCrudComponent_div_8_div_1_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Passwords must match");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserCrudComponent_div_8_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserCrudComponent_div_8_div_1_div_13_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r108.f.confirmPassword.errors.mustMatch);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function UserCrudComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Password555555");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserCrudComponent_div_8_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r113); const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r112.changePasswordType(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, UserCrudComponent_div_8_div_1_div_8_Template, 3, 2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Confirm Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, UserCrudComponent_div_8_div_1_div_13_Template, 2, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("type", ctx_r104.passwordType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx_r104.submitted && ctx_r104.f.Password.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r104.hide ? "visibility" : "visibility_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r104.submitted && ctx_r104.f.Password.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("type", ctx_r104.passwordType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx_r104.submitted && ctx_r104.f.confirmPassword.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r104.submitted && ctx_r104.f.confirmPassword.errors);
} }
function UserCrudComponent_div_8_div_2_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r103.label);
} }
function UserCrudComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "BR");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserCrudComponent_div_8_div_2_label_2_Template, 3, 1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserCrudComponent_div_8_div_2_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r117); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r116.download(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r105.myFormGroup.get(form_elem_r103.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r103.label);
} }
function UserCrudComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "textarea", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](form_elem_r103.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", form_elem_r103.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", form_elem_r103.disabled);
} }
function UserCrudComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserCrudComponent_div_8_div_1_Template, 14, 11, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserCrudComponent_div_8_div_2_Template, 8, 2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserCrudComponent_div_8_div_3_Template, 6, 3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r103 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r103.type == "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r103.type == "uploadFile" && form_elem_r103.value != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", form_elem_r103.type == "textarea");
} }
function UserCrudComponent_input_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 51);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r2.submitLabel);
} }
class UserCrudComponent {
    constructor(matDialog, //private localStorageService: LocalstorageService, 
    mainService, crudService, formBuilder, httpClient) {
        this.matDialog = matDialog;
        this.mainService = mainService;
        this.crudService = crudService;
        this.formBuilder = formBuilder;
        this.httpClient = httpClient;
        this.listData = { displayedColumns: [], data: [], actionColumns: [], actionButton: {}, type: 'df' };
        this.displayedColumns = [];
        this.spinerSelectedFieldpopUp = false;
        this.selectedDate = new Date();
        this.FilterColumnType = false;
        this.group = {};
        this.formInput = [];
        this.formInputLoop = [];
        this.formInputLoop1 = [];
        this.formInputLoop2 = [];
        this.uploadFilePath = null;
        this.UploadDirectory = "";
        this.submitLabel = "validate";
        this.csvFolder = []; //| null = null;
        this.multipleSelectedValue = [];
        this.hide = false;
        this.startDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date());
        this.endDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date());
        this.spinerSelectedField = false;
        this.passwordType = "password";
        this.Password = '';
        this.PasswordC = '';
        //cronstrue1=""
        this.dataForm = [];
        //addFilterButton:Boolean=false;
        this.data = {};
        this.countChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataConf = {};
        this.form = {};
        this.submitted = true;
        this.myFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](this.group);
    }
    getJson() {
        // let paramString1='colName=Ref_Request&colValue='+this.echangeData['Ref_Request']+'&sheet=userRequestValidation'
        console.log(' json  getJson ');
        return this.httpClient.get("assets/dbUserForm.json").toPromise();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataConf = yield this.getJson();
            this.form = this.dataConf['form'];
            this.formTitle = this.dataConf['TitleFormObject'];
            console.log(this.formTitle, ' this.dataConf  ', this.dataConf);
            this.listData.displayedColumns = []; //this.displayedColumns;
            this.listData.actionColumns = [];
            console.log(' this.echangeData  ', this.echangeData);
            if (this.echangeData != undefined) {
                let o = { "User": localStorage.getItem("user") };
                let sheet = 'user';
                this.mainService.getDataByCols(sheet, o).subscribe(data => {
                    this.listData.data = data;
                });
            }
            else {
                this.listData.data = [];
                this.echangeData = [];
            }
            this.group = {};
            this.formInput = [];
            this.formInputLoop = [];
            this.myFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](this.group);
            let myDate = new Date();
            let today = myDate.getFullYear() + '-' + (('0' + (myDate.getMonth() + 1)).slice(-2)) + '-' + ('0' + myDate.getDate()).slice(-2);
            if (this.echangeData.length > 0) {
                this.data = { action: 'action', id: 5, type: 'type', currentModule: 'module321', droppedModules: [],
                    form: this.form };
            }
            else {
                this.data = { action: 'action', id: 5, type: 'type', currentModule: 'module321', droppedModules: [],
                    form: this.form };
            }
            let dataSize = Object.keys(this.data).length;
            this.formInput = [];
            //this.submitLabel='Close'
            if (!(typeof this.data['form'] === 'undefined')) {
                const dataFormClone = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.data['form']);
                this.dataForm = dataFormClone;
                this.formInput = Object.values(dataFormClone);
                for (var i in this.formInput) {
                    if (this.formInput[i]['hide'] != 1) {
                        this.formInputLoop.push(this.formInput[i]);
                        this.group[this.formInput[i]['label']] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '' });
                        if (this.formInput[i]['required'] == 1) {
                            this.myFormGroup.controls[this.formInput[i]['label']].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
                        }
                        if (this.formInput[i]['label'] == "Password") {
                            this.myFormGroup.controls[this.formInput[i]['label']].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6));
                            this.group["confirmPassword"] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [this.patternValidator()]);
                            //  this.group["Password"] = new FormControl('',[Validators.required,Validators.minLength(6)])
                        }
                        /* if ( this.formInput[i]['label'] == "confirmPassword"){
                          this.myFormGroup.controls[this.formInput[i]['label']].setValidators(this.patternValidator())
                          //
            
                         }*/
                        if (this.echangeData[this.formInput[i]['label'].replace(/ /g, '_')] != undefined) {
                            this.myFormGroup.controls[this.formInput[i]['label']].setValue(this.echangeData[this.formInput[i]['label'].replace(/ /g, '_')]);
                        }
                        else {
                            this.myFormGroup.controls[this.formInput[i]['label']].setValue('');
                        }
                        if (this.formInput[i]['type'] == 'startDate') {
                            this.startDate.setValue(this.formInput[i]['value']);
                            console.log(i, ' *startDate ***  ', this.myFormGroup.controls[this.formInput[i]['label']]);
                        }
                        if (this.formInput[i]['type'] == 'endDate') {
                            this.endDate.setValue(this.formInput[i]['value']);
                            //console.log( i, ' *startDate ***  ', this.myFormGroup.controls[this.formInput[i]['label']] ) 
                        }
                    }
                    this.group["PasswordCC"] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '' });
                    //this.myFormGroup.controls["confirmPassword"].setValue('') 
                    //this.myFormGroup.controls["password"].setValue('') 
                    //this.myFormGroup.controls["PasswordCC"].setValue('') 
                    //this.myFormGroup.controls["password"].setValidators(Validators.required)
                    //this.myFormGroup.controls["password"].setValidators(Validators.minLength(6))
                    //this.myFormGroup.controls["confirmPassword"].setValidators(Validators.required)
                    //this.myFormGroup.controls["confirmPassword"].setValidators(Validators.minLength(6))
                    //  this.myFormGroup.controls["confirmPassword"].setPatt(pattern(this.passwordMatch("password","confirmPassword") )
                }
                //  prepare data for two column 
                let keys = Object.keys(this.formInputLoop);
                for (var el = 0; el < this.formInputLoop.length; el++) {
                    if (el % 2 == 0)
                        this.formInputLoop1.push(this.formInputLoop[el]);
                    else
                        this.formInputLoop2.push(this.formInputLoop[el]);
                }
            }
            else
                this.formInput = [];
        });
    }
    ;
    get f() { return this.myFormGroup.controls; }
    patternValidator() {
        return (control) => {
            if (!control.value) {
                console.log(' patternValidator  !!!! control.value  NULLLLL ', control.value);
                return null;
            }
            /*if (!control.value.toUpperCase().includes('SELECT') ||
            !control.value.toUpperCase().includes('FROM') ) {
              console.log('patternValidator control.value.dont includes("select or from ")  ')
              control.setErrors({ invalidQuery: true });
              return { invalidQuery: true };
            } else
            {
            return null;
            }*/
            if (this.f.Password.value !== control.value) {
                control.setErrors({ mustMatch: true });
                return { mustMatch: true };
            }
            else {
                control.setErrors(null);
                return null;
            }
        };
    }
    passwordMatch(password, confirmPassword) {
        return (control) => {
            console.log(this.f.password.value, '  controle value ', control.value);
            if (!control.value) {
                console.log(' patternValidator  !!!! control.value  NULLLLL ', control.value);
                return null;
            }
            if (this.f.password.value !== control.value) {
                control.setErrors({ mustMatch: true });
                return { mustMatch: true };
            }
            else {
                control.setErrors(null);
                return null;
            }
        };
    }
    checkPassword() {
        return JSON.stringify(this.f.confirmPassword.errors);
    }
    checkPasswordC() {
        return this.myFormGroup.get('PasswordCC')['value'] + this.myFormGroup.get('PasswordCC')['value'].length;
    }
    onSelectMultipleChange(event) {
        this.multipleSelectedValue = event;
    }
    changePasswordType() {
        if (this.passwordType == 'password') {
            this.passwordType = 'text';
        }
        else {
            this.passwordType = 'password';
        }
        this.hide = !this.hide;
    }
    loadSelectionList(form_elem) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            {
                console.log(' loadSelectionList ', JSON.stringify(form_elem));
                const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
                //The user can't close the dialog by clicking outside its body
                //dialogConfig.disableClose = true;
                console.log(' openFolderServerModal  ');
                dialogConfig.position = { top: '0%', left: '20%' };
                dialogConfig.id = "modal-component";
                dialogConfig.height = "800px";
                dialogConfig.width = "800px";
                dialogConfig.autoFocus = false;
                dialogConfig.height = '100%';
                this.spinerSelectedFieldpopUp = true;
                let echangeData = {};
                let val = yield this.getDataForSelect();
                this.spinerSelectedFieldpopUp = false;
                console.log('  getAllUsers ', JSON.stringify(val));
                echangeData['data'] = val;
                echangeData['displayedColumns'] = ['Prenom', 'Nom', 'Ref', 'Poste', 'N+1', 'N+2', 'Director', 'Email', 'Phone'];
                echangeData['actionColumns'] = ['Action'];
                dialogConfig.data = echangeData;
                this.spinerSelectedFieldpopUp = false;
                const modalDialog = this.matDialog.open(src_app_components_mat_table_list_mat_table_list_component__WEBPACK_IMPORTED_MODULE_6__["MatTableListComponent"], dialogConfig); // load the help component
                modalDialog.afterClosed().subscribe(result => {
                    // if(result.event == 'Add'){
                    // console.log(' close dialog ', JSON.parse(result.data)['data'][0]['Ref'])
                    this.myFormGroup.controls[form_elem['label']].setValue(JSON.parse(result.data)['data'][0]['Ref']);
                });
            }
        });
    }
    getDataForSelect() {
        let sheet = 'user';
        //this.usuariosService.updateUserRequestValidation(this.crudData).subscribe(resultat => {
        return this.mainService.getAllRowsSheet(sheet).toPromise();
        //return this.crudService.updateJsonDataToSheet(data,'dataObject').toPromise()
    }
    SelectOnChange(event) {
        this.FilterColumnType = event.toUpperCase().includes('DATE') || event.toUpperCase().includes('DAY');
    }
    pickerEvent(event) {
        this.selectedDate = event.value;
        this.myFormGroup.controls['Filter Value'].setValue(this.selectedDate.getFullYear() + '-' + (this.selectedDate.getMonth() + 1) + '-' + ('0' + this.selectedDate.getDate()).slice(-2));
    }
    onFileChanged(event) {
        this.uploadFilePath = event.target.files[0]; // get the file name     
    }
    download() {
        let vfileToBeName = this.echangeData['Attached_File'];
        const source = this.echangeData['base64'];
        const link = document.createElement("a");
        link.href = source;
        link.download = `${vfileToBeName}`;
        link.click();
    }
    uploadFile(file) {
        const uploadData = new FormData();
        let filename = file;
        uploadData.append('filename', filename);
        uploadData.append('folder', this.UploadDirectory);
        uploadData.append('user', localStorage.getItem('user'));
        console.log(' uploadFile ', uploadData);
    }
    onFolderChanged(event) {
        console.log(' onFolderChanged ', event.target.files);
        var filesSelected = event.target.files;
        let output = document.getElementById("listing");
        var tmpArr = [];
        for (let item of filesSelected) {
            tmpArr.push(item.webkitRelativePath);
        }
        this.csvFolder = tmpArr; // get the file name 
    }
    // help modal
    showHelp(help) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.id = "modal-help";
        dialogConfig.height = "450px";
        dialogConfig.width = "800px";
        dialogConfig.data = help; // pass help variable to the helpcomponent
        const modalDialog = this.matDialog.open(src_app_help_help_component__WEBPACK_IMPORTED_MODULE_5__["HelpComponent"], dialogConfig); // load the help component
    }
    isSelected(data) {
        console.log(' isSelected  ', data);
    }
    // onchange checkbox function for "next"
    onCheckChangesNext(event) {
        // get the form array "next" and add data in every changes
        // const formArrayNext: FormArray = this.myFormGroup.get('next') as FormArray;
        this.formInput.map(elem => {
            if (this.dataForm[elem['label'].replace(/ /g, '_')]['type'] == 'checkbox') {
                let ar = this.dataForm[elem['label'].replace(/ /g, '_')]['valueSelected'];
                console.log(' el ', event.target.value, '   at  ', ar.indexOf(event.target.value));
                if (ar.indexOf(event.target.value) >= 0 && !event.target.checked) {
                    console.log(' remove ', event.target.value, '   at  ', ar.indexOf(event.target.value));
                    ar.splice(ar.indexOf(event.target.value), 1);
                }
                if (ar.indexOf(event.target.value) == -1 && event.target.checked)
                    ar.push(event.target.value);
                this.dataForm[elem['label'].replace(/ /g, '_')]['valueSelected'] = ar;
                console.log(elem['label'], 'value  ', this.dataForm[elem['label'].replace(/ /g, '_')]['valueSelected']);
            }
        });
    }
    cancel() {
        this.countChanged.emit(this.dataForm);
    }
    buildOjectFromDataForm(obj) {
        var data = {};
        if (Object.keys(this.echangeData).length > 1) {
            data["co-owner_id"] = this.echangeData["co-owner_id"];
        }
        for (var el in obj) {
            console.log(el, obj[el]['value']);
            data[el] = obj[el]['value'];
        }
        return data;
    }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // check validation form  
            for (var i in this.formInputLoop) {
                if (!this.myFormGroup.controls[this.formInputLoop[i]['label']].valid) {
                    alert(this.myFormGroup.controls[this.formInputLoop[i]['label']] + '  Form Submitted Error : ' + '    ' + this.formInputLoop[i]["label"]);
                    return 0;
                }
            }
            let filename = this.csv; // get the file name 
            this.formInputLoop.map(elem => {
                if (this.dataForm[elem['label'].replace(/ /g, '_')]['type'] == 'text' ||
                    this.dataForm[elem['label'].replace(/ /g, '_')]['type'] == 'textarea') {
                    let tmpText = this.myFormGroup.get(elem['label']).value; //.replace(/'/g,'~').replace(/"/g,'~')
                    this.dataForm[elem['label'].replace(/ /g, '_')].value = tmpText;
                }
                else if (this.dataForm[elem['label'].replace(/ /g, '_')]['type'] != 'checkbox' &&
                    this.dataForm[elem['label'].replace(/ /g, '_')]['type'] != 'selectMultiple' &&
                    this.dataForm[elem['label'].replace(/ /g, '_')]['type'] != 'savefile' &&
                    !elem['label'].includes('Repertoire')) {
                    this.dataForm[elem['label'].replace(/ /g, '_')].value = this.myFormGroup.get(elem['label']).value;
                }
                if (elem['label'].includes('fichier1')) {
                    this.dataForm[elem['label'].replace(/ /g, '_')].value = this.filename; //csv['name']
                }
                if (elem['label'].includes('Repertoire')) {
                    this.dataForm[elem['label'].replace(/ /g, '_')].value = this.csvFolder;
                    //console.log(' fichier   ffffffffff  ',JSON.stringify(this.myFormGroup.get(elem['label'])))
                }
                if (this.dataForm[elem['label'].replace(/ /g, '_')]['type'] == 'selectMultiple') {
                    this.dataForm[elem['label'].replace(/ /g, '_')].value = this.multipleSelectedValue;
                }
            });
            if (this.echangeData.length == 0) {
                let data = this.buildOjectFromDataForm(this.dataForm);
                console.log('  this.dataForm length 0000000', JSON.stringify(data));
                /*await this.crudService.insertJsonDataToSheet(data,'dataObject').subscribe(data => {
                 
                 console.log(' retour 0000000',data);
                }
                ) */
                this.spinerSelectedField = true;
                let responseData = yield this.insertJsonDataToSheet(data);
                this.spinerSelectedField = false;
                console.log(' before   getAll test ', responseData);
                this.countChanged.emit(this.dataForm);
                return 0;
            }
            else {
                let data = this.buildOjectFromDataForm(this.dataForm);
                console.log(JSON.stringify(this.echangeData), '  this.dataForm length 0000000', JSON.stringify(data));
                /*await this.crudService.insertJsonDataToSheet(data,'dataObject').subscribe(data => {
                 
                 console.log(' retour 0000000',data);
                }
                ) */
                this.spinerSelectedField = true;
                let responseData = yield this.updateJsonDataToSheet(data);
                this.spinerSelectedField = false;
                console.log(' before   getAll test ', responseData);
                this.countChanged.emit(this.dataForm);
                return 0;
            }
        });
    }
    insertJsonDataToSheet(data) {
        // let paramString1='colName=Ref_Request&colValue='+this.echangeData['Ref_Request']+'&sheet=userRequestValidation'
        return this.crudService.insertJsonDataToSheet(data, 'co-owner').toPromise();
    }
    updateJsonDataToSheet(data) {
        // let paramString1='colName=Ref_Request&colValue='+this.echangeData['Ref_Request']+'&sheet=userRequestValidation'
        return this.crudService.updateJsonDataToSheet(data, 'co-owner').toPromise();
    }
    ngAfterViewInit() {
        /* for (var i in this.formInputLoop) {
               
           console.log(this.myFormGroup.controls[this.formInputLoop[i]['label']], 'required ',this.myFormGroup.get(this.formInputLoop[i]['label'])['error'])
            
     
           }*/
        if (localStorage.getItem('data') != null) {
            //this.updateProject()
        }
    }
}
UserCrudComponent.ɵfac = function UserCrudComponent_Factory(t) { return new (t || UserCrudComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_7__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_8__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"])); };
UserCrudComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserCrudComponent, selectors: [["app-user-crud"]], inputs: { echangeData: "echangeData" }, outputs: { countChanged: "countChanged" }, decls: 11, vars: 4, consts: [[2, "font-size", "smaller"], [3, "formGroup", "ngSubmit"], ["class", "col", 4, "ngIf"], [4, "ngFor", "ngForOf"], [2, "display", "flex", "justify-content", "center"], ["style", "width: 25%", "type", "submit", "class", "btn btn-config", 3, "value", 4, "ngIf"], [1, "col"], [4, "ngIf"], ["src", "assets/info.png", 1, "info", 3, "click"], ["type", "password", 3, "formControlName"], ["style", "width: 30%", "for", "test", 4, "ngIf"], ["style", "\n                width: 65%;\n                background-color: transparent;\n                border: none;\n                outline: none;\n              ", "id", "test", "type", "text", 3, "readonly", "formControlName", 4, "ngIf"], ["for", "test", 2, "width", "30%"], ["id", "test", "type", "text", 2, "width", "65%", "background-color", "transparent", "border", "none", "outline", "none", 3, "readonly", "formControlName"], ["id", "test", 2, "width", "68%", 3, "formControlName", "change"], ["value", "", "disabled", "", "selected", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], ["multiple", "", 1, "form-select", 3, "formControlName", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "checkbox", 3, "value", "formControlName", "change"], ["class", "wrapper", "style", "height: 20px; align-self: center", 4, "ngIf"], ["style", "width: 30%", 4, "ngIf"], ["type", "button", "matTooltip", "select file", 1, "btn", "btn-default", 3, "click"], [2, "margin-top", "10%"], ["style", "\n                  background-color: transparent;\n                  border: none;\n                  outline: none;\n                ", "type", "text", 3, "readonly", "formControlName", 4, "ngIf"], ["style", "color: red", 4, "ngIf"], [1, "wrapper", 2, "height", "20px", "align-self", "center"], ["mode", "indeterminate", "diameter", "40", 1, "inner", 2, "left", "50%"], [2, "width", "30%"], ["type", "text", 2, "background-color", "transparent", "border", "none", "outline", "none", 3, "readonly", "formControlName"], [2, "color", "red"], ["class", "form-row", 4, "ngIf"], ["class", "col-6", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "form-row"], [1, "form-group", "col"], [2, "width", "10%"], ["formControlName", "Password", 1, "form-control", 2, "width", "32%", 3, "type", "ngClass"], ["type", "button", "id", "picon", 2, "background-color", "transparent", "border", "unset", 3, "click"], ["matSuffix", ""], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "confirmPassword", 1, "form-control", 2, "width", "32%", 3, "type", "ngClass"], [1, "invalid-feedback"], [1, "col-6"], ["id", "test", "type", "text", 2, "background-color", "transparent", "border", "none", "outline", "none", 3, "formControlName"], ["matTooltip", "Download File", 1, "btn", 3, "click"], [2, "margin-top", "15%"], [1, "row"], ["rows", "3", "cols", "35", "spellcheck", "false", 1, "form-control", 2, "font-size", "10px", 3, "readonly", "formControlName"], ["type", "submit", 1, "btn", "btn-config", 2, "width", "25%", 3, "value"]], template: function UserCrudComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UserCrudComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Request Details Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "BR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "BR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, UserCrudComponent_div_7_Template, 5, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, UserCrudComponent_div_8_Template, 4, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, UserCrudComponent_input_10_Template, 1, 1, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formInputLoop.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.formInputLoop);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formInputLoop.length > 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatSuffix"]], styles: ["fieldset[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    margin-left: 20vw;\r\n    border: 0px none transparent;\r\n    background: none;\r\n  }\r\n \r\n  select[_ngcontent-%COMP%] {\r\n    \r\n    max-height: 30px;\r\n    \r\n    margin-bottom: .5em;\r\n    border-radius: 4px;\r\n  }\r\n \r\n  .dropbtn[_ngcontent-%COMP%]  {\r\n    display: inline-block;\r\n    margin-bottom: -3px;\r\n    margin-right: 4px;\r\n  }\r\n \r\n  input[_ngcontent-%COMP%] {\r\n    \r\n    max-height: 30px;\r\n    \r\n    margin-bottom: .5em;\r\n    border-radius: 4px;\r\n    \r\n    \r\n  }\r\n \r\n  input1[_ngcontent-%COMP%] {\r\n    \r\n    max-height: 30px;\r\n    \r\n    margin-bottom: .5em;\r\n    border-radius: 4px;\r\n    \r\n    \r\n    border-radius: 4px;\r\n  }\r\n \r\n  legend[_ngcontent-%COMP%] {\r\n    width: 70vw;\r\n    text-align:center;\r\n    margin: 0 auto;\r\n  }\r\n \r\n  \r\n \r\n  \r\n \r\n  .row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n  }\r\n \r\n  .input-field[_ngcontent-%COMP%] {\r\n    margin-left: 1em;\r\n    padding: .5em;\r\n    margin-bottom: .5em;\r\n  }\r\n \r\n  .config-field[_ngcontent-%COMP%] {\r\n    box-shadow: 2px 2px 5px 2px;\r\n    border: 2px #d9d9d9;\r\n    border-radius: 5px;\r\n    \r\n    margin: 0 auto;\r\n    padding: 15px 20px 20px;\r\n    display: block;\r\n    text-align: left;\r\n    \r\n   \r\n     \r\n    \r\n    background-color: #f5f7f7;\r\n}\r\n \r\n  .config-field1[_ngcontent-%COMP%] {\r\n    box-shadow: 2px 2px 5px 2px;\r\n    border: 2px #d9d9d9;\r\n    border-radius: 5px;\r\n    \r\n    margin: 0 auto;\r\n    \r\n    display: block;\r\n    text-align: center;\r\n    \r\n}\r\n \r\n  \r\n \r\n  .container[_ngcontent-%COMP%] {\r\n    display: block;\r\n    position: relative;\r\n    padding-left: 35px;\r\n    cursor: pointer;\r\n    font-size: 17px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    user-select: none;\r\n    background-color: transparent;\r\n    border-radius: 5px;\r\n    border: 2px solid #dceff0;\r\n    padding: 5px; \r\n}\r\n \r\n  \r\n \r\n  .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 0;\r\n    width: 0;\r\n}\r\n \r\n  \r\n \r\n  .checkmark[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 30px;\r\n    background-color: transparent;\r\n    border-right: 2px solid #5f7d8b;\r\n}\r\n \r\n  \r\n \r\n  .container[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .checkmark[_ngcontent-%COMP%] {\r\n    background-color: #ccc;\r\n}\r\n \r\n  \r\n \r\n  .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\r\n    background-color: #ccc;\r\n    \r\n}\r\n \r\n  \r\n \r\n  .checkmark[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n}\r\n \r\n  \r\n \r\n  .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\r\n    display: block;\r\n}\r\n \r\n  \r\n \r\n  .container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\r\n    left: calc(50% - 4px);\r\n    top: 50%;\r\n    width: 7px;\r\n    height: 10px;\r\n    border: solid white;\r\n    border-width: 0px 3px 2px 0;\r\n    transform: rotate(45deg) translate(-50%, -50%);\r\n}\r\n \r\n  .input-file[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n}\r\n \r\n  \r\n \r\n  .btn-config[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background-color: #f27839;\r\n    border: 0;\r\n    border-radius: 8px;\r\n   \r\n   \r\n    color: #fff;\r\n    font-weight: 500;\r\n    padding: 10px;\r\n}\r\n \r\n  .info[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n    height: 20px;\r\n    cursor: pointer;\r\n    padding: 10px;\r\n\r\n}\r\n \r\n  .col[_ngcontent-%COMP%]{display:flex;}\r\n \r\n  .col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{flex:1}\r\n \r\n  .invisible[_ngcontent-%COMP%]{\r\n    display: block;\r\n    visibility: hidden;\r\n    height: 0;\r\n    width: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci91c2VyLWNydWQvdXNlci1jcnVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25COztFQUVGO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEI7d0JBQ29CO0VBQ3RCOztFQUNBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjs7RUFFQTs7Ozt1QkFJcUI7O0VBQ3RCLEtBQUs7O0VBRU47SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOztFQUVGO0lBQ0ksMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7O0tBRWY7K0JBQzBCO0lBQzNCLDZCQUE2QjtJQUM3Qix5QkFBeUI7QUFDN0I7O0VBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCOytCQUMyQjtBQUMvQjs7RUFDQSxrQkFBa0I7O0VBQ2xCO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsc0JBQXNCO0lBRXRCLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztFQUNBLHdDQUF3Qzs7RUFDeEM7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGVBQWU7SUFDZixTQUFTO0lBQ1QsUUFBUTtBQUNaOztFQUNBLDZCQUE2Qjs7RUFDN0I7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztJQUNYLDZCQUE2QjtJQUM3QiwrQkFBK0I7QUFDbkM7O0VBQ0EsK0NBQStDOztFQUMvQztJQUNJLHNCQUFzQjtBQUMxQjs7RUFDQSx3REFBd0Q7O0VBQ3hEO0lBQ0ksc0JBQXNCO0lBQ3RCLDhCQUE4QjtBQUNsQzs7RUFDQSw2REFBNkQ7O0VBQzdEO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztFQUNBLG9DQUFvQzs7RUFDcEM7SUFDSSxjQUFjO0FBQ2xCOztFQUNBLGtDQUFrQzs7RUFDbEM7SUFDSSxxQkFBcUI7SUFDckIsUUFBUTtJQUNSLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQiw4Q0FBOEM7QUFDbEQ7O0VBQ0E7SUFDSSxlQUFlO0FBQ25COztFQUNBOztFQUVFOztFQUNGO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1Qsa0JBQWtCO0dBQ25CO0tBQ0U7R0FDRjtLQUNFO0lBQ0QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztFQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTs7QUFFakI7O0VBRUEsS0FBSyxZQUFZLENBQUM7O0VBQ2xCLFNBQVMsTUFBTTs7RUFFZjtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvdXNlci1jcnVkL3VzZXItY3J1ZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZmllbGRzZXQge1xyXG4gICAgLyp3aWR0aDogNTB2dzsqL1xyXG4gICAgLyp0ZXh0LWFsaWduOiByaWdodDsqL1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwdnc7XHJcbiAgICBib3JkZXI6IDBweCBub25lIHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICB9XHJcbiBcclxuICBzZWxlY3Qge1xyXG4gICAgLyp3aWR0aDogNjAlOyovXHJcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gICAgLyptYXgtd2lkdGg6IDUwMHB4OyovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuXHJcbiAgLmRyb3BidG4gIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IC0zcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICB9XHJcblxyXG5pbnB1dCB7XHJcbiAgICAvKndpZHRoOiA2MCU7Ki9cclxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICAvKm1heC13aWR0aDogNTAwcHg7Ki9cclxuICAgIG1hcmdpbi1ib3R0b206IC41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAvKm1heC13aWR0aDogMTAwcHg7Ki9cclxuICAgIC8qbWFyZ2luLWJvdHRvbTogLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDsqL1xyXG4gIH1cclxuICBpbnB1dDEge1xyXG4gICAgLyp3aWR0aDogNjAlOyovXHJcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gICAgLyptYXgtd2lkdGg6IDUwMHB4OyovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgLyptYXgtd2lkdGg6IDEwMHB4OyovXHJcbiAgICAvKm1hcmdpbi1ib3R0b206IC41ZW07Ki9cclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgXHJcbiAgbGVnZW5kIHtcclxuICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIC8qbGFiZWwge1xyXG4gICBcclxuICAgIG1hcmdpbi1yaWdodDogMWVtOyBcclxuICAgIC8qd2lkdGg6IDMwJTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0OyovXHJcbiAvKiB9Ki9cclxuXHJcbi5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIH1cclxuICBcclxuICAuaW5wdXQtZmllbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIHBhZGRpbmc6IC41ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xyXG4gIH1cclxuXHJcbi5jb25maWctZmllbGQge1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4O1xyXG4gICAgYm9yZGVyOiAycHggI2Q5ZDlkOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8qbWluLWhlaWdodDogNTBweDsqL1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHggMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIC8qaGVpZ2h0OiAxMDAlOyovXHJcbiAgIFxyXG4gICAgIC8qYmFja2dyb3VuZC1jb2xvcjogI2QwZDBkMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4YjgyYjg7Ki9cclxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogI2RjZWZmMDsqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjdmNztcclxufVxyXG4uY29uZmlnLWZpZWxkMSB7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHg7XHJcbiAgICBib3JkZXI6IDJweCAjZDlkOWQ5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLyptaW4taGVpZ2h0OiA1cHg7Ki9cclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgLypwYWRkaW5nOiA1cHggMjBweCAyMHB4OyovXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qaGVpZ2h0OiAxMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDBkMGQwOyovXHJcbn1cclxuLyogVGhlIGNvbnRhaW5lciAqL1xyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2RjZWZmMDtcclxuICAgIHBhZGRpbmc6IDVweDsgXHJcbn1cclxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cclxuLmNvbnRhaW5lciBpbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbn1cclxuLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXHJcbi5jaGVja21hcmsge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjNWY3ZDhiO1xyXG59XHJcbi8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xyXG4uY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG59XHJcbi8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xyXG4uY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICM1ZjdkOGI7ICovXHJcbn1cclxuLyogQ3JlYXRlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cclxuLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4vKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXHJcbi5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cclxuLmNvbnRhaW5lciAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gNHB4KTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgd2lkdGg6IDdweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJvcmRlcjogc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweCAzcHggMnB4IDA7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcbi5pbnB1dC1maWxlIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4vKi5uZy12YWxpZCBsYWJlbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSovXHJcbi5idG4tY29uZmlnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyNzgzOTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgLyogd2lkdGg6IDEwMCU7XHJcbiAgICAqL1xyXG4gICAvKiBiYWNrZ3JvdW5kOiAjZjI3ODM5O1xyXG4gICAgKi9cclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmluZm8ge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxufVxyXG5cclxuLmNvbHtkaXNwbGF5OmZsZXg7fVxyXG4uY29sIGRpdntmbGV4OjF9XHJcblxyXG4uaW52aXNpYmxle1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserCrudComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-user-crud',
                templateUrl: './user-crud.component.html',
                styleUrls: ['./user-crud.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_7__["MainService"] }, { type: src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_8__["CrudService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] }]; }, { echangeData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], countChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/views/user/user-list/user-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/user/user-list/user-list.component.ts ***!
  \*************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_components_navbar_user_navbar_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/navbar-user/navbar-user.component */ "./src/app/components/navbar-user/navbar-user.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _navidation_sidenav_list_admin_sidenav_list_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../navidation/sidenav-list-admin/sidenav-list-admin.component */ "./src/app/navidation/sidenav-list-admin/sidenav-list-admin.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _components_dynamic_table_list_dynamic_table_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/dynamic-table-list/dynamic-table-list.component */ "./src/app/components/dynamic-table-list/dynamic-table-list.component.ts");
/* harmony import */ var _user_crud_user_crud_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../user-crud/user-crud.component */ "./src/app/views/user/user-crud/user-crud.component.ts");
















function UserListComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-progress-spinner", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserListComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-dynamic-table-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("countChanged", function UserListComponent_div_11_Template_app_dynamic_table_list_countChanged_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.actionHandler1($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("echangeData", ctx_r2.echangeData);
} }
function UserListComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-user-crud", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("countChanged", function UserListComponent_div_13_Template_app_user_crud_countChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.reloadData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("echangeData", ctx_r3.crudData);
} }
function UserListComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "BR");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "BR");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No Data To Display");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class UserListComponent {
    constructor(httpClient, mainService, crudService, activeRoute) {
        this.httpClient = httpClient;
        this.mainService = mainService;
        this.crudService = crudService;
        this.activeRoute = activeRoute;
        //isSearchShow: boolean;
        this.echangeData = {
            displayedColumns: [], data: [],
            actionColumns: [],
            actionButton: {},
            type: 'df'
        };
        this.displayedColumns = [];
        this.action = 'list';
        this.spinerSelectedField = false;
        this.dataConf = {};
        this.title = "";
        this.getAllObjects = () => {
            let o = {};
            //{'User':localStorage.getItem('user')}
            let sheet = 'co-owner';
            if (this.activeRoute.snapshot.params.req != undefined) {
                let req = this.activeRoute.snapshot.params.req;
                o['params_id'] = req;
            }
            this.mainService.getDataByCols(sheet, o).subscribe(data => {
                this.action = 'list';
                this.echangeData.data = data;
                if (this.activeRoute.snapshot.params.req != undefined) {
                    let event = {};
                    event['action'] = 'details';
                    event['data'] = []; //.push(ddata[0])
                    event['data'].push(data[0]);
                    this.actionHandler1(event);
                }
            });
        };
    }
    getJson() {
        console.log(' json  getJson ');
        return this.httpClient.get("assets/dbUserForm.json").toPromise();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('route ', this.activeRoute.snapshot.routeConfig.path);
            localStorage.setItem('route', this.activeRoute.snapshot.routeConfig.path);
            this.dataConf = yield this.getJson();
            this.title = this.dataConf['titleList'];
            this.echangeData.actionColumns = this.dataConf['actionColumns'];
            this.echangeData.displayedColumns = this.dataConf['displayedColumns'];
            this.getAllObjects();
            console.log(' getAllDataObjec before brfore  ', this.activeRoute.snapshot.params.req);
        });
    }
    deleteRowSheet(id, sheet) {
        return this.crudService.deleteRowSheet(id, sheet).toPromise();
    }
    actionHandler1(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let sheet = 'co-owner';
            this.action = event['action'];
            let data = event['data'][0];
            console.log('action ', this.action, ' actionHandler1 event ', event);
            if (this.action == 'delete') {
                if (window.confirm('Are sure you want to delete this row ?')) {
                    this.spinerSelectedField = true;
                    const resp = yield this.deleteRowSheet(data['id'], sheet);
                    this.ngOnInit();
                    this.spinerSelectedField = false;
                }
            }
            else {
                this.crudData = data;
                console.log(' actionHandler1  crud data ', this.crudData);
            }
        });
    }
    reloadData(event) {
        this.childC.ngAfterViewInit();
        this.action = 'list';
        this.ngOnInit();
    }
}
UserListComponent.ɵfac = function UserListComponent_Factory(t) { return new (t || UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
UserListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserListComponent, selectors: [["app-user-list"]], viewQuery: function UserListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](src_app_components_navbar_user_navbar_user_component__WEBPACK_IMPORTED_MODULE_2__["NavbarUserComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.childC = _t.first);
    } }, decls: 15, vars: 4, consts: [["mode", "side", 3, "sidenavToggle"], ["mode", "side", "opened", "true"], ["sidenav", ""], ["mode", "side", 3, "sidenavClose"], [1, "container"], ["class", "wrapper", "style", "padding-top: 200px; height: 20px; align-self: center", 4, "ngIf"], ["class", "row", 4, "ngIf"], [4, "ngIf"], ["style", "text-align: center", 4, "ngIf"], [1, "wrapper", 2, "padding-top", "200px", "height", "20px", "align-self", "center"], ["mode", "indeterminate", "diameter", "40", 1, "inner", 2, "left", "50%"], [1, "row"], [3, "echangeData", "countChanged"], [2, "text-align", "center"]], template: function UserListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-navbar-user", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sidenavToggle", function UserListComponent_Template_app_navbar_user_sidenavToggle_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "app-sidenav-list-admin", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sidenavClose", function UserListComponent_Template_app_sidenav_list_admin_sidenavClose_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, UserListComponent_div_10_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, UserListComponent_div_11_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "BR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, UserListComponent_div_13_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, UserListComponent_div_14_Template, 5, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.spinerSelectedField);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.echangeData.data.length > 0 && ctx.action === "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.action == "add" || ctx.action == "details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.action == "");
    } }, directives: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"], src_app_components_navbar_user_navbar_user_component__WEBPACK_IMPORTED_MODULE_2__["NavbarUserComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenav"], _navidation_sidenav_list_admin_sidenav_list_admin_component__WEBPACK_IMPORTED_MODULE_9__["SidenavListAdminComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinner"], _components_dynamic_table_list_dynamic_table_list_component__WEBPACK_IMPORTED_MODULE_12__["DynamicTableListComponent"], _user_crud_user_crud_component__WEBPACK_IMPORTED_MODULE_13__["UserCrudComponent"]], styles: ["mat-sidenav-container[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    height: 100%;\r\n    min-height: 100%;\r\n    width: 100%;\r\n    min-width: 100%;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZUFBZTtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-user-list',
                templateUrl: './user-list.component.html',
                styleUrls: ['./user-list.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"] }, { type: src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }]; }, { childC: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [src_app_components_navbar_user_navbar_user_component__WEBPACK_IMPORTED_MODULE_2__["NavbarUserComponent"], { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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
    production: true
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mmelliti\Documents\dev\PortalSyndic\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map