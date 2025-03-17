import { Icon } from '@iconify/react';

const icons = {
  IconSitemap: () => <Icon width={20} icon="ph:open-ai-logo-duotone" />,
  IconBasket: () => <Icon width={20} icon="solar:shop-bold-duotone" />,
  IconKey: () => <Icon width={20} icon="solar:key-bold-duotone" />,
  IconUser: () => <Icon width={20} icon="solar:user-bold-duotone" />,
  IconUserScan: () => <Icon width={20} icon="solar:user-id-bold-duotone" />,
  IconReceipt2: () => <Icon width={20} icon="solar:document-bold-duotone" />,
  IconSettingsCog: () => <Icon width={20} icon="solar:settings-bold-duotone" />,
  IconBrandTelegram: () => <Icon width={20} icon="solar:plain-bold-duotone" />,
  IconCoin: () => <Icon width={20} icon="solar:dollar-minimalistic-bold-duotone" />,
  IconBrandPaypal: () => <Icon width={20} icon="solar:wallet-money-bold-duotone" />,
  IconCoins: () => <Icon width={20} icon="solar:hand-money-bold-duotone" />,
  IconUsers: () => <Icon width={20} icon="solar:users-group-rounded-bold-duotone" />,
  IconModel: () => <Icon width={20} icon="mingcute:ai-fill" />
};

const Setting = {
  id: 'setting',
  title: 'setting',
  type: 'group',
  children: [
    {
      id: 'user',
      title: 'User', // "用户" -> "User"
      type: 'item',
      url: '/panel/user',
      icon: icons.IconUser,
      breadcrumbs: false,
      isAdmin: true
    },
    {
      id: 'channel',
      title: 'Channel', // "渠道" -> "Channel"
      type: 'item',
      url: '/panel/channel',
      icon: icons.IconSitemap,
      breadcrumbs: false,
      isAdmin: true
    },
    {
      id: 'operation',
      title: 'Operation', // "运营" -> "Operation"
      type: 'collapse',
      icon: icons.IconBasket,
      isAdmin: true,
      children: [
        {
          id: 'user_group',
          title: 'User Group', // "用户分组" -> "User Group"
          type: 'item',
          url: '/panel/user_group',
          icon: icons.IconUsers,
          breadcrumbs: false,
          isAdmin: true
        },
        {
          id: 'pricing',
          title: 'Model Pricing', // "模型价格" -> "Model Pricing"
          type: 'item',
          url: '/panel/pricing',
          icon: icons.IconReceipt2,
          breadcrumbs: false,
          isAdmin: true
        },
        {
          id: 'telegram',
          title: 'Telegram Bot',
          type: 'item',
          url: '/panel/telegram',
          icon: icons.IconBrandTelegram,
          breadcrumbs: false,
          isAdmin: true
        },
        {
          id: 'model_ownedby',
          title: 'Model Ownership', // "模型归属" -> "Model Ownership"
          type: 'item',
          url: '/panel/model_ownedby',
          icon: icons.IconModel,
          breadcrumbs: false,
          isAdmin: true
        }
      ]
    },
    {
      id: 'paySetting',
      title: 'Payment Settings', // "支付设置" -> "Payment Settings"
      type: 'collapse',
      icon: icons.IconBrandPaypal,
      isAdmin: true,
      children: [
        {
          id: 'redemption',
          title: 'Redemption', // "兑换" -> "Redemption"
          type: 'item',
          url: '/panel/redemption',
          icon: icons.IconCoin,
          breadcrumbs: false,
          isAdmin: true
        },
        {
          id: 'payment',
          title: 'Payment', // "支付" -> "Payment"
          type: 'item',
          url: '/panel/payment',
          icon: icons.IconBrandPaypal,
          breadcrumbs: false,
          isAdmin: true
        }
      ]
    },

    {
      id: 'token',
      title: 'Token', // "令牌" -> "Token"
      type: 'item',
      url: '/panel/token',
      icon: icons.IconKey,
      breadcrumbs: false
    },

    {
      id: 'profile',
      title: 'Personal Settings', // "个人设置" -> "Personal Settings"
      type: 'item',
      url: '/panel/profile',
      icon: icons.IconUserScan,
      breadcrumbs: false,
      isAdmin: false
    },

    {
      id: 'setting',
      title: 'Settings', // "设置" -> "Settings"
      type: 'item',
      url: '/panel/setting',
      icon: icons.IconSettingsCog,
      breadcrumbs: false,
      isAdmin: true
    }
  ]
};

export default Setting;