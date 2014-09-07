app.module 'CardEditor.views', (views, app) ->
	
	class views.LayersPanel extends views.BaseToolbarPanelView
		logging: off

		className: 'row layers'

		childView: views.Layer

		# ui:
		# events:

		initialize: ->
			super
			@bind 'all', ->
				console.log "LAYERS PANEL VIEW:\t", arguments if @logging is on

			# @model = new Backbone.Model
			@collection = @editorModel.get 'layerCollection'
			@panelViewState.set 'templateOptions',
				title: 'Слои ( пока только на первом )'
				addButtonText: 'Добавить слой'
				removeButtonText: 'Удалить слой'

		onAddChildClicked: =>
			@collection.add layerName: "Слой #{ @collection.length+1 }"

		onRemoveChildCkicked: =>
			if @collection.length < 2
				alert 'Необходим хотя бы 1 слой'
				return false
			super

		onAddChild: (layer) =>
		onRemoveChild: =>