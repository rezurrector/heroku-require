define(["jquery","underscore","backbone","text!AboutViewTpl"],function(e,t,n,r){return n.View.extend({template:t.template(r),initialize:function(){this.render()},render:function(){return e(this.el).html(this.template()),this}})});