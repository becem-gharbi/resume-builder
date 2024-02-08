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
        }
      },

      light: {
        common: {
          primaryColor: _colors.blue[600],
          primaryColorHover: _colors.blue[500],
          primaryColorPressed: _colors.blue[700],
          borderColor: _colors.gray[300]
        },
        Card: {
          borderColor: _colors.gray[300]
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
          color: _colors.slate[900]
        },
        Scrollbar: {
          color: _colors.slate[900]
        }
      }
    }
  }
})
