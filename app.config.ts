import { _colors } from '#tailwind-config/theme.mjs'

export default defineAppConfig({
  naiveui: {
    themeConfig: {
      shared: {
        common: {
          fontFamily: 'Rubik',
          borderRadius: '4px'
        },
        Form: {
          feedbackPadding: '10px 0px'
        },
        Dropdown: {
          padding: '10px'
        },
        Notification: {
          padding: '16px'
        }
      },

      light: {
        common: {
          primaryColor: _colors.blue[500],
          primaryColorHover: _colors.blue[400],
          primaryColorPressed: _colors.blue[600],
          borderColor: _colors.slate[200],
          bodyColor: _colors.white,
          inputColor: _colors.slate[100],
          popoverColor: _colors.slate[100],
          hoverColor: _colors.slate[200]
        },
        Layout: {
          headerColor: _colors.white,
          headerBorderColor: _colors.slate[200]
        },
        Dropdown: {
          color: _colors.slate[50],
          dividerColor: _colors.slate[200]
        },
        Card: {
          color: _colors.slate[50],
          borderColor: _colors.slate[200]
        },
        List: {
          color: _colors.slate[50],
          borderColor: _colors.slate[200]
        },
        Scrollbar: {
          color: _colors.slate[200]
        },
        Notification: {
          color: _colors.slate[50]
        }
      },

      dark: {
        common: {
          primaryColor: _colors.blue[500],
          primaryColorHover: _colors.blue[400],
          primaryColorPressed: _colors.blue[600],
          borderColor: _colors.slate[800],
          bodyColor: _colors.slate[950],
          inputColor: _colors.slate[800],
          popoverColor: _colors.slate[800],
          hoverColor: _colors.slate[700]
        },
        Layout: {
          headerColor: _colors.slate[950],
          headerBorderColor: _colors.slate[900]
        },
        Dropdown: {
          color: _colors.slate[800],
          dividerColor: _colors.slate[700]
        },
        Card: {
          color: _colors.slate[900],
          borderColor: _colors.slate[800]
        },
        List: {
          color: _colors.slate[900],
          borderColor: _colors.slate[800]
        },
        Scrollbar: {
          color: _colors.slate[900]
        },
        Notification: {
          color: _colors.slate[800]
        }
      }
    }
  }
})
