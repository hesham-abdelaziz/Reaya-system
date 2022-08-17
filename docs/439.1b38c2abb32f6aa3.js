"use strict";(self.webpackChunkreaya=self.webpackChunkreaya||[]).push([[439],{4439:(V,x,a)=>{a.r(x),a.d(x,{AdsMoudle:()=>W});var g=a(6895),v=a(4006),f=a(3060),T=a(3868),_=a(9485),M=a(36),w=a(8106),r=a(6982),t=a(4650),y=a(7480),h=a(6090),m=a(3546),A=a(4859),Z=a(7392),C=a(9549),O=a(4385),U=a(3238),b=a(4850);const P=["card"],q=["overlay"];function S(n,o){if(1&n&&(t.TgZ(0,"mat-option",27),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.Q6J("value",e.name),t.xp6(1),t.Oqu(e.name)}}let F=(()=>{class n{constructor(e,i){this.specService=e,this.adService=i,this.specialities=[],this.ads=[],this.degree=new t.vpe,this.speciality=new t.vpe,this.gender=new t.vpe,this.price=new t.vpe,this.filter={degree:"",spec:"",gender:"",price:""}}ngOnInit(){this.specService.getAll(),this.specService.specialityArray.subscribe(e=>{this.specialities=e}),this.adService.adsArray.subscribe(e=>{this.closeCard()})}toggleCard(){this.card.nativeElement.classList.toggle("active"),this.overlay.nativeElement.classList.toggle("show"),document.body.style.overflow="hidden"}closeCard(){this.card.nativeElement.classList.remove("active"),this.overlay.nativeElement.classList.remove("show"),document.body.style.overflow="auto"}filterAds(e,i,s,l){!e||i||s||l?e&&i&&!s&&!l?(this.filter.degree=e,this.filter.spec=i,this.adService.filterAds(this.filter.degree,this.filter.spec,null,null)):e&&i&&s&&!l?this.adService.filterAds(e,i,s,null):e&&i&&s&&l?this.adService.filterAds(e,i,s,l):e||!i||s||l?e||i||!s||l?!e&&i&&s&&!l?this.adService.filterAds(null,i,s,null):e&&i&&s&&!l&&this.adService.filterAds(e,i,s,null):this.adService.filterAds(null,null,s,null):this.adService.filterAds(null,i,null,null):(this.filter.degree=e,this.adService.filterAds(this.filter.degree,null,null,null))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(y.d),t.Y36(h.P))},n.\u0275cmp=t.Xpm({type:n,selectors:[["filter"]],viewQuery:function(e,i){if(1&e&&(t.Gf(P,5),t.Gf(q,5)),2&e){let s;t.iGM(s=t.CRH())&&(i.card=s.first),t.iGM(s=t.CRH())&&(i.overlay=s.first)}},outputs:{degree:"degree",speciality:"speciality",gender:"gender",price:"price"},decls:63,vars:1,consts:[["mat-raised-button","",1,"d-xxl-none","d-xl-none","d-lg-none","d-md-block","d-sm-block","d-block","mainBtn","m-2",3,"click"],[1,"overlay",3,"click"],["overlay",""],[1,"d-xxl-block","d-xl-block","d-lg-block","sm-screen"],["card",""],["mat-icon-button","",1,"d-xxl-none","d-xl-none","d-lg-none","d-md-block","d-sm-block","d-block","closeBtn",3,"click"],[1,"justify-content-center"],[1,"d-flex","flex-column","justify-content-center","mt-4"],[3,"selectionChange"],["degree",""],["value","General_Practitioner"],["value","Specialist"],["value","Consultant"],["value","Teaching_Assistant"],["value","Assistant_Lecturer"],["value","Lecturer"],["value","Associate_Professor"],["value","Professor"],["spec",""],[3,"value",4,"ngFor","ngForOf"],["gender",""],["value","Male"],["value","Female"],["price",""],["value","less_50"],["value","between_100_50"],["value","between_100_200"],[3,"value"]],template:function(e,i){if(1&e){const s=t.EpF();t.TgZ(0,"button",0),t.NdJ("click",function(){return i.toggleCard()}),t._uU(1,"Specifiy search"),t.qZA(),t.TgZ(2,"div",1,2),t.NdJ("click",function(){return i.closeCard()}),t.qZA(),t.TgZ(4,"div",3,4)(6,"mat-card")(7,"button",5),t.NdJ("click",function(){return i.closeCard()}),t.TgZ(8,"mat-icon"),t._uU(9,"close"),t.qZA()(),t.TgZ(10,"mat-card-header",6)(11,"mat-card-title"),t._uU(12,"Specifiy your search"),t.qZA()(),t._UZ(13,"mat-divider"),t.TgZ(14,"mat-card-content")(15,"form",7)(16,"mat-form-field")(17,"mat-label"),t._uU(18,"Degree"),t.qZA(),t.TgZ(19,"mat-select",8,9),t.NdJ("selectionChange",function(){t.CHM(s);const c=t.MAs(20),d=t.MAs(41),p=t.MAs(47),u=t.MAs(56);return t.KtG(i.filterAds(c.value,d.value,p.value,u.value))}),t.TgZ(21,"mat-option",10),t._uU(22," General Practitioner"),t.qZA(),t.TgZ(23,"mat-option",11),t._uU(24," Specialist"),t.qZA(),t.TgZ(25,"mat-option",12),t._uU(26," Consultant "),t.qZA(),t.TgZ(27,"mat-option",13),t._uU(28," Teaching Assistant "),t.qZA(),t.TgZ(29,"mat-option",14),t._uU(30," Assistant Lecturer"),t.qZA(),t.TgZ(31,"mat-option",15),t._uU(32," Lecturer"),t.qZA(),t.TgZ(33,"mat-option",16),t._uU(34," Associate Professor"),t.qZA(),t.TgZ(35,"mat-option",17),t._uU(36," Professor"),t.qZA()()(),t.TgZ(37,"mat-form-field")(38,"mat-label"),t._uU(39,"Speciality"),t.qZA(),t.TgZ(40,"mat-select",8,18),t.NdJ("selectionChange",function(){t.CHM(s);const c=t.MAs(20),d=t.MAs(41),p=t.MAs(47),u=t.MAs(56);return t.KtG(i.filterAds(c.value,d.value,p.value,u.value))}),t.YNc(42,S,2,2,"mat-option",19),t.qZA()(),t.TgZ(43,"mat-form-field")(44,"mat-label"),t._uU(45,"Gender"),t.qZA(),t.TgZ(46,"mat-select",8,20),t.NdJ("selectionChange",function(){t.CHM(s);const c=t.MAs(20),d=t.MAs(41),p=t.MAs(47),u=t.MAs(56);return t.KtG(i.filterAds(c.value,d.value,p.value,u.value))}),t.TgZ(48,"mat-option",21),t._uU(49,"Male"),t.qZA(),t.TgZ(50,"mat-option",22),t._uU(51,"Female"),t.qZA()()(),t.TgZ(52,"mat-form-field")(53,"mat-label"),t._uU(54,"Price"),t.qZA(),t.TgZ(55,"mat-select",8,23),t.NdJ("selectionChange",function(){t.CHM(s);const c=t.MAs(20),d=t.MAs(41),p=t.MAs(47),u=t.MAs(56);return t.KtG(i.filterAds(c.value,d.value,p.value,u.value))}),t.TgZ(57,"mat-option",24),t._uU(58,"Less than 50"),t.qZA(),t.TgZ(59,"mat-option",25),t._uU(60,"From 100 to 50"),t.qZA(),t.TgZ(61,"mat-option",26),t._uU(62,"From 100 to 200"),t.qZA()()()()()()()}2&e&&(t.xp6(42),t.Q6J("ngForOf",i.specialities))},dependencies:[g.sg,m.a8,m.dk,m.dn,m.n5,A.lW,Z.Hw,C.KE,C.hX,O.gD,U.ey,b.d,v._Y,v.JL],styles:["mat-card[_ngcontent-%COMP%]{width:250px;box-shadow:0 15px 17px #0000001a!important;position:relative}.overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:40;background-color:#00000080;transition:.3s ease;visibility:hidden;opacity:0}.overlay.show[_ngcontent-%COMP%]{visibility:visible;opacity:1}.closeBtn[_ngcontent-%COMP%]{top:-15px;left:0px}@media (min-width : 1024px){.overlay[_ngcontent-%COMP%]{display:none}}@media (max-width : 992px){.sm-screen[_ngcontent-%COMP%]{position:fixed;top:30%;right:-500px;z-index:50;transition:.3s ease-in-out}.sm-screen.active[_ngcontent-%COMP%]{right:0}}"]}),n})();function k(n,o){1&n&&(t.TgZ(0,"div",10),t._uU(1,"Slide 1"),t.qZA(),t.TgZ(2,"div",11),t._uU(3,"Subtitle"),t.qZA(),t.TgZ(4,"div",12)(5,"p"),t._uU(6," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. "),t.qZA()())}function N(n,o){1&n&&(t.TgZ(0,"div",10),t._uU(1,"Slide 2"),t.qZA(),t.TgZ(2,"div",11),t._uU(3,"Subtitle"),t.qZA(),t.TgZ(4,"div",12)(5,"p"),t._uU(6," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. "),t.qZA()())}function J(n,o){1&n&&(t.TgZ(0,"div",10),t._uU(1,"Slide 3"),t.qZA(),t.TgZ(2,"div",11),t._uU(3,"Subtitle"),t.qZA(),t.TgZ(4,"div",12)(5,"p"),t._uU(6," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. "),t.qZA()())}const j=function(){return{delay:3500,disableOnInteraction:!0}};r.ZP.use([r.VS,r.tl,r.W_,r.pt]);let L=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-ads"]],decls:15,vars:7,consts:[[2,"position","relative"],[1,"overlay"],[1,"adSwiper",2,"--swiper-navigation-color","#fff","--swiper-pagination-color","#fff",3,"speed","parallax","autoplay","pagination","navigation","allowTouchMove"],["slot","container-start","data-swiper-parallax","-23%",1,"parallax-bg",2,"background-image","url('assets/patient-bg.jpg')"],["swiperSlide",""],[1,"holder"],[1,"container-fluid"],[1,"row"],[1,"col-xxl-8","col-xl-8","col-lg-8","col-md-12","col-sm-12","col-12"],[1,"d-flex","justify-content-center","col-xxl-4","col-xl-4","col-lg-4","col-md-12","col-sm-12","col-12","sticky-top"],["data-swiper-parallax","-300",1,"title"],["data-swiper-parallax","-200",1,"subtitle"],["data-swiper-parallax","-100",1,"text"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"div",1),t.TgZ(2,"swiper",2),t._UZ(3,"div",3),t.YNc(4,k,7,0,"ng-template",4),t.YNc(5,N,7,0,"ng-template",4),t.YNc(6,J,7,0,"ng-template",4),t.qZA()(),t.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8),t._UZ(11,"router-outlet"),t.qZA(),t.TgZ(12,"div",9)(13,"div"),t._UZ(14,"filter"),t.qZA()()()()()),2&e&&(t.xp6(2),t.Q6J("speed",1500)("parallax",!0)("autoplay",t.DdM(6,j))("pagination",!1)("navigation",!1)("allowTouchMove",!1))},dependencies:[f.lC,_.nF,_.YC,F],styles:["[_nghost-%COMP%]{display:block;position:relative;height:100%;width:100%}.swiper[_ngcontent-%COMP%]{width:100%;height:400px;background:#000;position:relative}.parallax-bg[_ngcontent-%COMP%]{position:absolute;left:0;top:0;width:130%;height:100%;background-size:cover;background-position:center -150px;background-repeat:no-repeat;-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}.title[_ngcontent-%COMP%]{font-size:41px;font-weight:300}.subtitle[_ngcontent-%COMP%]{font-size:21px}.text[_ngcontent-%COMP%]{font-size:14px;max-width:400px;line-height:1.3}@media (max-width : 992px){.justify-content-center[_ngcontent-%COMP%]{justify-content:start!important}.parallax-bg[_ngcontent-%COMP%]{background-position:center}.row[_ngcontent-%COMP%]{flex-direction:column-reverse}.sticky-top[_ngcontent-%COMP%]{all:unset}}"]}),n})();var D=a(9043),Y=a(1572);function I(n,o){1&n&&(t.TgZ(0,"div",4),t._UZ(1,"mat-spinner"),t.qZA())}function z(n,o){1&n&&(t.TgZ(0,"div",5)(1,"h4"),t._uU(2,"No matched results"),t.qZA()())}function Q(n,o){if(1&n&&(t.TgZ(0,"div",28)(1,"span"),t._uU(2),t.qZA()()),2&n){const e=t.oxw(2).$implicit;t.xp6(2),t.Oqu(e.discount+"% off")}}function G(n,o){if(1&n&&(t.TgZ(0,"span",29),t._uU(1),t.ALo(2,"currency"),t.qZA()),2&n){const e=t.oxw().$implicit,i=t.oxw().$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.price*(100-i.discount)/100,"EGP"))}}function H(n,o){if(1&n&&t._UZ(0,"img",31),2&n){const e=t.oxw().$implicit;t.Q6J("src",e,t.LSH)}}function $(n,o){1&n&&t.YNc(0,H,1,1,"ng-template",30)}function B(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"mat-card"),t.YNc(1,Q,3,1,"div",7),t.TgZ(2,"mat-card-content")(3,"div",8)(4,"div",9),t._UZ(5,"img",10),t.TgZ(6,"div",11)(7,"div",12)(8,"p",13)(9,"mat-icon"),t._uU(10,"person"),t.qZA(),t._uU(11),t.qZA(),t.TgZ(12,"p",14)(13,"mat-icon"),t._uU(14," local_hospital"),t.qZA(),t._uU(15),t.qZA()(),t.TgZ(16,"div",15)(17,"p",16)(18,"mat-icon"),t._uU(19,"domain"),t.qZA(),t._uU(20),t.qZA(),t.TgZ(21,"p",17)(22,"mat-icon"),t._uU(23,"location_on"),t.qZA(),t._uU(24),t.qZA(),t.TgZ(25,"p",18)(26,"span",19)(27,"mat-icon"),t._uU(28," money"),t.qZA(),t._uU(29),t.ALo(30,"currency"),t.qZA(),t.YNc(31,G,3,4,"span",20),t.qZA(),t.TgZ(32,"p",21)(33,"mat-icon"),t._uU(34,"local_phone"),t.qZA(),t._uU(35),t.qZA()()()(),t.TgZ(36,"div",22),t._UZ(37,"mat-divider"),t.qZA(),t.TgZ(38,"div",23)(39,"swiper",24),t.YNc(40,$,1,0,null,6),t.qZA(),t.TgZ(41,"div",25),t._UZ(42,"mat-divider"),t.qZA(),t.TgZ(43,"div",26)(44,"button",27),t.NdJ("click",function(){const l=t.CHM(e).$implicit,c=t.oxw(3);return t.KtG(c.navigateToProfile(l.doctor,l._id))}),t._uU(45,"Book now"),t.qZA()()()()()()}if(2&n){const e=o.$implicit,i=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",i.discount>0),t.xp6(4),t.Q6J("src",e.doctor[0].image,t.LSH),t.xp6(6),t.hij(" Dr / ",e.doctor[0].name," "),t.xp6(4),t.hij(" ",e.doctor[0].speciality," "),t.xp6(5),t.hij(" ",e.name," "),t.xp6(4),t.hij(" ",e.address," "),t.xp6(2),t.Udp("text-decoration",i.discount>0?"line-through":"unset"),t.xp6(3),t.hij(" ",t.xi3(30,15,e.price,"EGP")," "),t.xp6(2),t.Q6J("ngIf",i.discount>0),t.xp6(4),t.hij(" ",e.phone," "),t.xp6(4),t.Q6J("centeredSlides",!0)("pagination",!0)("navigation",!0),t.xp6(1),t.Q6J("ngForOf",e.images)}}function E(n,o){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,B,46,18,"mat-card",6),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Q6J("ngForOf",e.clinic)}}function K(n,o){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,E,2,1,"div",6),t.qZA()),2&n){const e=t.oxw();t.Q6J("@show",e.ads.length),t.xp6(1),t.Q6J("ngForOf",e.ads)}}r.ZP.use([r.tl,r.W_]);const R=[{path:"",component:L,children:[{path:"doctors",component:(()=>{class n{constructor(e,i){this.adService=e,this.router=i,this.ads=[]}ngOnInit(){this.adService.getAllAds(),this.adSub=this.adService.adsArray.subscribe(e=>{this.isLoading=!0,console.log(e),setTimeout(()=>{this.isLoading=!1},1e3),this.ads=e}),this.adService.filterdArray.subscribe(e=>{this.ads=e})}ngOnDestroy(){this.adSub.unsubscribe()}navigateToProfile(e,i){sessionStorage.setItem("id",e[0].id),sessionStorage.setItem("clinic",i),this.router.navigate([`/doctor/${e[0].name}`])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.P),t.Y36(f.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["doctors"]],decls:4,vars:3,consts:[[1,"container"],["class","d-flex align-items-center justify-content-center mt-5",4,"ngIf"],["class","text-center p-3",4,"ngIf"],[4,"ngIf"],[1,"d-flex","align-items-center","justify-content-center","mt-5"],[1,"text-center","p-3"],[4,"ngFor","ngForOf"],["class","discount-ribbon",4,"ngIf"],[1,"row","w-100"],[1,"col-xxl-6","col-xl-6","col-lg-6","col-md-12","col-sm-12","col-12","d-flex","align-items-center"],["alt","",1,"doctor-image",3,"src"],[1,"d-flex","flex-column"],[1,"doctor-details"],[1,"doctor-name"],[1,"doctor-speciality"],[1,"clinic-details"],[1,"name"],[1,"address"],[1,"price"],[1,"d-flex","align-items-center"],["style","margin-left:10px ;",4,"ngIf"],[1,"phone","mt-2"],[1,"d-xxl-none","d-xl-none","d-lg-none","d-md-block","d-sm-block","d-block","w-100","mt-3","mb-3"],[1,"col-xxl-6","col-xl-6","col-lg-6","col-md-12","col-sm-12","col-12","text-center"],[1,"adSwiper",3,"centeredSlides","pagination","navigation"],[1,"w-100","mt-3","mb-3"],[1,"d-xxl-block","d-xl-block","d-lg-block","d-md-grid","d-sm-grid","d-grid"],["mat-raised-button","",1,"mainBtn",3,"click"],[1,"discount-ribbon"],[2,"margin-left","10px"],["swiperSlide",""],["alt","",3,"src"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.YNc(1,I,2,0,"div",1),t.YNc(2,z,3,0,"div",2),t.YNc(3,K,2,2,"div",3),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",i.isLoading),t.xp6(1),t.Q6J("ngIf",0==i.ads.length&&!i.isLoading),t.xp6(1),t.Q6J("ngIf",i.ads.length>0&&!i.isLoading))},dependencies:[g.sg,g.O5,m.a8,m.dn,A.lW,Z.Hw,b.d,Y.Ou,_.nF,_.YC,g.H9],styles:['.swiper[_ngcontent-%COMP%]{width:265px;height:190px}mat-card[_ngcontent-%COMP%]{position:relative;height:300px;box-shadow:0 15px 17px #0000001a!important;margin:20px 0 0}.discount-ribbon[_ngcontent-%COMP%]{position:absolute;left:-5px;top:-5px;z-index:1;overflow:hidden;width:75px;height:75px;text-align:right}.discount-ribbon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:10px;font-weight:700;color:#fff;text-transform:uppercase;text-align:center;line-height:20px;transform:rotate(-45deg);width:100px;display:block;background:#3894ad;box-shadow:0 3px 10px -5px #000;position:absolute;top:19px;left:-21px}.discount-ribbon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0px;top:100%;z-index:-1;border-left:3px solid #3894ad;border-right:3px solid transparent;border-bottom:3px solid transparent;border-top:3px solid #3894ad}.discount-ribbon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{content:"";position:absolute;right:0px;top:100%;z-index:-1;border-left:3px solid transparent;border-right:3px solid #3894ad;border-bottom:3px solid transparent;border-top:3px solid #3894ad}.doctor-image[_ngcontent-%COMP%]{width:80px;height:80px;border-radius:5px;margin-right:8px}@media (max-width : 992px){mat-card[_ngcontent-%COMP%]{height:510px}}@media (max-width : 768px){.container[_ngcontent-%COMP%]{display:flex;justify-content:center}.row[_ngcontent-%COMP%]{flex-direction:column}mat-card[_ngcontent-%COMP%]{height:510px;width:350px;justify-content:center}}p[_ngcontent-%COMP%]{margin:0;padding:0;white-space:nowrap}.doctor-name[_ngcontent-%COMP%], .doctor-speciality[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:8px}.doctor-name[_ngcontent-%COMP%]{font-size:17px;font-weight:600}.doctor-speciality[_ngcontent-%COMP%]{font-size:16px;font-weight:500;color:#3894ad;cursor:pointer}.clinic-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;align-items:center}.clinic-details[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%], .clinic-details[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:16.5px;font-weight:500;margin-bottom:8px}swiper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px}mat-icon[_ngcontent-%COMP%]{margin-right:3px}'],data:{animation:[D.$]}}),n})()}]}];let X=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[f.Bz.forChild(R),f.Bz]}),n})(),W=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.ez,f.Bz,w.F,v.UX,T.uH,M.m,_.kz,X]}),n})()}}]);