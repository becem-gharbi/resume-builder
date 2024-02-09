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
        Notification: {
          padding: '16px'
        },
        Tabs: {
          panePaddingMedium: '20px 0 0 0'
        }
      },

      light: {
        common: {
          primaryColor: _colors.blue[500],
          primaryColorHover: _colors.blue[400],
          primaryColorPressed: _colors.blue[600],
          borderColor: _colors.slate[300],
          bodyColor: _colors.white,
          inputColor: _colors.slate[50],
          popoverColor: _colors.white,
          hoverColor: _colors.slate[100]
        },
        Layout: {
          headerColor: _colors.white,
          headerBorderColor: _colors.slate[300]
        },
        Card: {
          color: _colors.white,
          borderColor: _colors.slate[300]
        },
        List: {
          color: _colors.white,
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
          inputColor: _colors.slate[900],
          popoverColor: _colors.slate[900],
          hoverColor: _colors.slate[800]
        },
        Layout: {
          headerColor: _colors.slate[950],
          headerBorderColor: _colors.slate[900]
        },
        Card: {
          color: _colors.slate[950],
          borderColor: _colors.slate[900]
        },
        List: {
          color: _colors.slate[950],
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
