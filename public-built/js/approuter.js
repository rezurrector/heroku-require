define(["jquery","underscore","backbone"],function(e,t,n){return n.Router.extend({routes:{"":"home",wines:"list","wines/page/:page":"list","wines/add":"addWine","wines/:id":"wineDetails",about:"about"},initialize:function(){this.$navItems=e(".nav").find("li")},setContent:function(t){e("#content").html(t)},selectMenuItem:function(e){this.$navItems.removeClass("active"),e&&this.$navItems.filter("."+e).addClass("active")},home:function(e){var t=this;require(["routes/home"],function(e){t.setContent(e)})},list:function(e){var t=this;this.selectMenuItem("home-menu"),require(["routes/list"],function(n){n(e).done(function(e){t.setContent(e)})})},wineDetails:function(e){var t=this;this.selectMenuItem(),require(["routes/addview"],function(n){n.initView(e).done(function(e){t.setContent(e)})})},addWine:function(){var e=this;this.selectMenuItem("add-menu"),require(["routes/addview"],function(t){var n=t.initAdd();e.setContent(n)})},about:function(){var e=this;this.selectMenuItem("about-menu"),require(["routes/about"],function(t){e.setContent(t)})}})});