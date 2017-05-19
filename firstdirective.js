(function(){
  angular.module("app",[])
  .directive("FirstDirective" , FirstDirective);

  function FirstDirective() {
       var directive={};
       directive.restrict = 'EA';
       directive.template = '';
       directive.scope = {};
   };

})();
