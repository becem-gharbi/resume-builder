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
          borderColor: _colors.gray[500]
        },
        Card: {
          borderColor: _colors.gray[800]
        }
      }
    }
  }
})
