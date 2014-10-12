(function() {
  app.module('setup', function(Setup) {
    var onResize;
    $("a[href^='/']", "body").click((function(_this) {
      return function(e) {
        var $link, href, link;
        link = e.target;
        $link = $(link);
        href = $link.attr('href');
        if (!(link.attributes['data-native-route'] || href.indexOf('/api') === 0)) {
          e.preventDefault();
          return app.router.navigate(href, {
            trigger: true
          });
        }
      };
    })(this));
    onResize = _.debounce((function(_this) {
      return function() {
        return app.trigger('resize', 250);
      };
    })(this));
    return $(window).on({
      resize: onResize
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHVwLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLEVBQUEsR0FBRyxDQUFDLE1BQUosQ0FBVyxPQUFYLEVBQW9CLFNBQUMsS0FBRCxHQUFBO0FBSW5CLFFBQUEsUUFBQTtBQUFBLElBQUEsQ0FBQSxDQUFFLGNBQUYsRUFBaUIsTUFBakIsQ0FBd0IsQ0FBQyxLQUF6QixDQUFnQyxDQUFBLFNBQUEsS0FBQSxHQUFBO2FBQUEsU0FBQyxDQUFELEdBQUE7QUFDL0IsWUFBQSxpQkFBQTtBQUFBLFFBQUEsSUFBQSxHQUFPLENBQUMsQ0FBQyxNQUFULENBQUE7QUFBQSxRQUNBLEtBQUEsR0FBUSxDQUFBLENBQUUsSUFBRixDQURSLENBQUE7QUFBQSxRQUVBLElBQUEsR0FBTyxLQUFLLENBQUMsSUFBTixDQUFXLE1BQVgsQ0FGUCxDQUFBO0FBR0EsUUFBQSxJQUFBLENBQUEsQ0FBUyxJQUFJLENBQUMsVUFBVyxDQUFBLG1CQUFBLENBQWhCLElBQXdDLElBQUksQ0FBQyxPQUFMLENBQWEsTUFBYixDQUFBLEtBQXdCLENBQWxFLENBQVA7QUFDQyxVQUFBLENBQUMsQ0FBQyxjQUFGLENBQUEsQ0FBQSxDQUFBO2lCQUNBLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBWCxDQUFvQixJQUFwQixFQUNDO0FBQUEsWUFBQSxPQUFBLEVBQVMsSUFBVDtXQURELEVBRkQ7U0FKK0I7TUFBQSxFQUFBO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFoQyxDQUFBLENBQUE7QUFBQSxJQVVBLFFBQUEsR0FBVyxDQUFDLENBQUMsUUFBRixDQUFXLENBQUEsU0FBQSxLQUFBLEdBQUE7YUFBQSxTQUFBLEdBQUE7ZUFBRyxHQUFHLENBQUMsT0FBSixDQUFZLFFBQVosRUFBc0IsR0FBdEIsRUFBSDtNQUFBLEVBQUE7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQVgsQ0FWWCxDQUFBO1dBV0EsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLEVBQVYsQ0FBYTtBQUFBLE1BQUEsTUFBQSxFQUFRLFFBQVI7S0FBYixFQWZtQjtFQUFBLENBQXBCLENBQUEsQ0FBQTtBQUFBIiwiZmlsZSI6InNldHVwLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLm1vZHVsZSAnc2V0dXAnLCAoU2V0dXApIC0+XG5cdFxuXHQjIENPTU1PTiBTRVRVUFxuXG5cdCQoXCJhW2hyZWZePScvJ11cIixcImJvZHlcIikuY2xpY2sgIChlKSA9PlxuXHRcdGxpbmsgPSBlLnRhcmdldFxuXHRcdCRsaW5rID0gJChsaW5rKVxuXHRcdGhyZWYgPSAkbGluay5hdHRyICdocmVmJ1xuXHRcdHVubGVzcyAoIGxpbmsuYXR0cmlidXRlc1snZGF0YS1uYXRpdmUtcm91dGUnXSBvciBocmVmLmluZGV4T2YoJy9hcGknKSBpcyAwIClcblx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0YXBwLnJvdXRlci5uYXZpZ2F0ZSBocmVmLFxuXHRcdFx0XHR0cmlnZ2VyOiB0cnVlXG5cblx0IyBXSU5ET1cgUkVTSVpFXG5cdG9uUmVzaXplID0gXy5kZWJvdW5jZSA9PiBhcHAudHJpZ2dlciAncmVzaXplJywgMjUwXG5cdCQod2luZG93KS5vbiByZXNpemU6IG9uUmVzaXplXHQiXX0=