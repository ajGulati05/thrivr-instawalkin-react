import { colorPalette, textStyles, spacings, layout } from "./styleguide";
const gradient = "linear-gradient(90deg, #5046FE 0%, #1562C9 100%)";

const defaultTheme = {
  global: {
    gradient
  },
  colors: colorPalette,
  textStyles,
  spacings,
  sidebar: {
    bgColor: colorPalette.white,
    boxShadow: layout.sidebar.sidebarShadow,
    sidebarWidth: layout.sidebar.default,
    brand: {
      height: layout.sidebar.brand.height,
      bgColor: layout.sidebar.brand.bgColor
    },
    hamburger: {
      width: layout.sidebar.collapsed,
      bgColor: layout.sidebar.brand.bgColor
    },
    userMenu: {
      itemHeight: layout.sidebar.menu.itemHeight,
      textStyle: textStyles.sidebarUserMenuDefault,
      itemTextStyle: textStyles.sidebarUserMenuItemDefault
    },
    navMenu: {
      textStyle: textStyles.textStyle_2,
      itemTextStyle: textStyles.sidebarNavMenuItemDefault,
      menuListHeadingDefaultSmall: textStyles.menuListHeadingDefaultSmall,
      menuListHeadingActiveSmall: textStyles.menuListHeadingActiveSmall,
      menuSubItemDefaultSmall: textStyles.menuSubItemDefaultSmall,
      menuSubItemActiveSmall: textStyles.menuSubItemActiveSmall
    }
  },
  footer: {
    footerHeight: layout.footer.default,
    borderTop: layout.footer.borderTop,
    logo: {
      width: 70,
      height: 24,
      color: colorPalette.placeholder
    },
    footerMenu: {
      textStyle: textStyles.textPlaceHolderStyle
    },
    inc: {
      textStyle: textStyles.textIncStyle
    }
  },
  header: {
    defaultWidth: layout.header.defaultWidth,
    collapsedWidth: layout.header.collapsedWidth,
    userMenu: {
      avatarSize: 46,
      menuWidth: 180
    }
  },
  components: {
    datePicker: {
      prefixTextStyle: textStyles.datepickerPrefix,
      datepickerDefault: textStyles.datepickerDefault,
      datepickerPlaceholder: textStyles.datepickerPlaceholder,
      defaultSmall: {
        pickerSize: {
          width: 150,
          height: 38
        },
        pickerSizeBig: {
          width: 236,
          height: 38
        },
        pickerSizeSmall: {
          width: 113,
          height: 38
        },
        inputSize: {
          width: 70,
          height: 15
        },
        inputSizeBig: {
          width: 140,
          height: 15
        },
        inputSizeSmall: {
          width: 70,
          height: 15
        }
      }
    },
    dropdown: {
      default: {
        valueText: textStyles.dropdownDefaultValue
      }
    },
    button: {
      buttonPrime: {
        reset: {
          textStyle: textStyles.buttonPrimeReset,
          bgColor: colorPalette.disabledBackground,
          hoverBgColor: colorPalette.placeholder,
          color: colorPalette.muted,
          hoverColor: colorPalette.muted,
          disabledBgColor: colorPalette.disabledBackground
        },
        save: {
          textStyle: textStyles.buttonPrimeDefault,
          bgColor: colorPalette.greySuccess,
          hoverBgColor: colorPalette.success,
          color: colorPalette.success,
          hoverColor: colorPalette.white,
          disabledBgColor: colorPalette.greySuccess
        },
        default: {
          textStyle: textStyles.buttonPrimeDefault,
          bgColor: colorPalette.tableDark,
          hoverBgColor: colorPalette.cta,
          color: colorPalette.cta,
          hoverColor: colorPalette.white,
          disabledBgColor: colorPalette.tableDark
        },
        reject: {
          textStyle: textStyles.buttonPrimeDefault,
          bgColor: colorPalette.greyNegative,
          hoverBgColor: colorPalette.negative,
          color: colorPalette.negative,
          hoverColor: colorPalette.white,
          disabledBgColor: colorPalette.greyNegative
        }
      },
      buttonSecondary: {
        textStyle: textStyles.buttonSecondaryDefault,
        default: {
          color: colorPalette.muted,
          hoverColor: colorPalette.primary
        },
        blue: {
          color: colorPalette.cta,
          hoverColor: colorPalette.primary
        },
        checked: {
          color: colorPalette.primary
        },
        unchecked: {
          color: colorPalette.muted
        }
      }
    },
    tableStyles: {
      heading: {
        textStyle: textStyles.tableHeadingDefault,
        default: {
          color: colorPalette.muted
        }
      },
      amount: {
        textStyle: textStyles.tableAmountDefault,
        positive: {
          color: colorPalette.amountPositive
        },
        negative: {
          color: colorPalette.negative
        },
        zero: {
          color: colorPalette.zero
        }
      },
      value: {
        textStyle: textStyles.tableValueDefault
      },
      actions: {
        textStyle: textStyles.tableActionsDefault,
        trash: {
          color: colorPalette.negative
        },
        caretDown: {
          color: colorPalette.cta
        },
        continue: {
          color: colorPalette.cta
        },
        caretUp: {
          color: colorPalette.cta
        }
      },
      status: {
        textStyle: textStyles.tableStatusDefault,
        pending: {
          color: colorPalette.pending
        },
        active: {
          color: colorPalette.success
        },
        error: {
          color: colorPalette.negative
        },
        success: {
          color: colorPalette.success
        },
        rejected: {
          color: colorPalette.negative
        },
        approved: {
          color: colorPalette.success
        }
      },
      score: {
        textStyle: textStyles.tableScoreDefault,
        pending: {
          color: colorPalette.pending
        },
        approved: {
          color: colorPalette.success
        },
        rejected: {
          color: colorPalette.negative
        }
      }
    },
    lineChart: {
      xaxisTickTextStyle: textStyles.placeholderTextSmallBold
    }
  },
  views: {
    loginPage: {
      titleTextStyle: textStyles.titleBigDefault,
      summaryTextStyle: textStyles.placeholderTextMiddle,
      forgotPasswordTextStyle: textStyles.formElementValueDefault
    }
  }
};

export default {
  default: defaultTheme
};
