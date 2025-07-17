from dash.development.base_component import Component, _explicitize_args

__all__ = ['DashTour']

class DashTour(Component):
    _type = 'DashTour'
    _namespace = 'dash_tour_component'
    _valid_wildcard_attributes = []
    _prop_names = [
        'id', 'accentColor', 'isOpen', 'steps', 'children', 'className',
        'closeWithMask', 'disableDotsNavigation', 'disableInteraction',
        'disableKeyboardNavigation', 'CurrentStep', 'goTopStep',
        'highlightedMaskClassName', 'inViewThreshold', 'maskClassName',
        'maskSpace', 'rounded', 'scrollDuration', 'scrollOffset',
        'showButtons', 'showCloseButton', 'showNavigation',
        'showNavigationNumber', 'showNumber', 'startAt', 'update',
        'updateDelay'
    ]
    _positional_parameters = []
    _keyword_params = _prop_names
    _dash_private_props = []
    _component_name = 'DashTour'

    @_explicitize_args
    def __init__(self, children=None, **kwargs):
        # Dash adds `_explicit_args` to kwargs when the component is
        # initialised.  The base ``Component`` does not expect this
        # argument, so remove it before calling ``super``.
        kwargs.pop("_explicit_args", None)
        super(DashTour, self).__init__(children=children, **kwargs)

# Define JavaScript and CSS assets
_js_dist = [
    {
        'relative_package_path': 'dash_tour_component.min.js',
        'namespace': 'dash_tour_component'
    }
]

_css_dist = []
