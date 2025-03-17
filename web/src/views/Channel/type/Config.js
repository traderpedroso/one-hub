
const defaultConfig = {
  input: {
    name: '',
    type: 1,
    key: '',
    base_url: '',
    other: '',
    proxy: '',
    test_model: '',
    model_mapping: [],
    models: [],
    groups: ['default'],
    plugin: {},
    tag: '',
    only_chat: false,
    pre_cost: 1
  },
  inputLabel: {
    name: 'Channel Name',
    type: 'Channel Type',
    base_url: 'Channel API Address',
    key: 'Key',
    other: 'Other Parameters',
    proxy: 'Proxy Address',
    test_model: 'Speed Test Model',
    models: 'Models',
    model_mapping: 'Model Mapping',
    groups: 'User Groups',
    only_chat: 'Chat Only',
    tag: 'Tag',
    provider_models_list: '', //This was already empty
    pre_cost: 'Pre-cost Options'
  },
  prompt: {
    type: 'Please select the channel type',
    name: 'Please name the channel',
    base_url: 'Optional, please enter the relay API address, for example, relay through Cloudflare',
    key: 'Please enter the authentication key corresponding to the channel',
    other: '',
    proxy: 'Set the proxy address separately, support http and socks5, for example: http://127.0.0.1:1080',
    test_model: 'The model used for testing, it cannot be tested when it is empty, such as: gpt-3.5-turbo, only supports chat models',
    models:
      'Please select the models supported by this channel. You can also enter the wildcard * to match the model, for example: gpt-3.5*, which means that all models starting with gpt-3.5 are supported. The * can only be used at the end. There must be characters before it, for example: gpt-3.5* is correct, *gpt-3.5 is wrong',
    model_mapping: 'Model mapping relationship: For example, if a user requests model A, the model actually forwarded to the channel is model B. Adding a prefix + to model B means that the incoming model is used for billing, for example: +gpt-3.5-turbo',
    model_headers: 'custom model request header, for example: {"key": "value"}',
    groups: 'Please select the user groups supported by this channel',
    only_chat: 'If only chat is selected, requests with function calls will skip this channel',
    provider_models_list: 'You must fill in all the data before you can get the model list',
    tag: 'You can tag your channel. After tagging, you can manage channels in batches through tags. Note: After setting tags, some settings can only be modified through channel tags and cannot be modified in the channel list.',
    pre_cost:
      'Here, select the estimated cost option for pre-cost estimation. If you think that calculating image usage takes up too many resources, you can choose to turn off image billing.  But please note: Some channels will not return tokens under stream, which will cause incorrect input token calculations.'
  },
  modelGroup: 'OpenAI'
};

const typeConfig = {
  1: {
    inputLabel: {
      provider_models_list: 'Get model list from OpenAI'
    }
  },
  8: {
    inputLabel: {
      provider_models_list: 'Get model list from channel'
    },
    prompt: {
      other: ''
    }
  },
  3: {
    inputLabel: {
      base_url: 'AZURE_OPENAI_ENDPOINT',
      other: 'Default API Version',
      provider_models_list: 'Get deployed model list from Azure'
    },
    prompt: {
      base_url: 'Please fill in AZURE_OPENAI_ENDPOINT',
      other: 'Please enter the default API version, for example: 2024-05-01-preview'
    }
  },
  11: {
    input: {
      models: ['PaLM-2'],
      test_model: 'PaLM-2'
    },
    modelGroup: 'Google PaLM'
  },
  14: {
    inputLabel: {
      provider_models_list: 'Get model list from Claude'
    },
    input: {
      models: [
        'claude-instant-1.2',
        'claude-2.0',
        'claude-2.1',
        'claude-3-opus-20240229',
        'claude-3-sonnet-20240229',
        'claude-3-haiku-20240307'
      ],
      test_model: 'claude-3-haiku-20240307'
    },
    modelGroup: 'Anthropic'
  },
  15: {
    input: {
      models: [
        'ERNIE-4.0-Turbo-8K',
        'ERNIE-4.0-8K-Latest',
        'ERNIE-4.0-8K-0613',
        'ERNIE-3.5-8K-0613',
        'ERNIE-Bot-turbo',
        'ERNIE-Lite-8K-0922',
        'ERNIE-Lite-8K',
        'ERNIE-Lite-8K-0308',
        'ERNIE-3.5-8K',
        'ERNIE-Bot',
        'ERNIE-4.0-8K',
        'ERNIE-4.0-8K-Preview',
        'ERNIE-4.0-8K-Preview-0518',
        'ERNIE-4.0-8K-0329',
        'ERNIE-4.0-8K-0104',
        'ERNIE-Bot-4',
        'ERNIE-Bot-8k',
        'ERNIE-3.5-128K',
        'ERNIE-3.5-8K-preview',
        'ERNIE-3.5-8K-0329',
        'ERNIE-3.5-4K-0205',
        'ERNIE-3.5-8K-0205',
        'ERNIE-3.5-8K-1222',
        'ERNIE-Speed',
        'ERNIE-Speed-8K',
        'ERNIE-Speed-128K',
        'ERNIE-Tiny-8K',
        'ERNIE-Function-8K',
        'ERNIE-Character-8K',
        'ERNIE-Character-Fiction-8K',
        'ERNIE-Bot-turbo-AI',
        'Embedding-V1'
      ],
      test_model: 'ERNIE-Speed'
    },
    prompt: {
      key: 'Enter in the following format: APIKey|SecretKey, If OpenAI API is enabled, please enter APIKEY directly'
    },
    modelGroup: 'Baidu'
  },
  16: {
    input: {
      models: ['glm-3-turbo', 'glm-4', 'glm-4v', 'embedding-2', 'cogview-3'],
      test_model: 'glm-3-turbo'
    },
    modelGroup: 'Zhipu'
  },
  17: {
    inputLabel: {
      other: 'Plugin Parameters',
      provider_models_list: 'Get model list from Ali'
    },
    input: {
      models: ['qwen-turbo', 'qwen-plus', 'qwen-max', 'qwen-max-longcontext', 'text-embedding-v1'],
      test_model: 'qwen-turbo'
    },
    prompt: {
      other: 'Please enter the plugin parameters, that is, the value of the X-DashScope-Plugin request header'
    },
    modelGroup: 'Ali'
  },
  18: {
    inputLabel: {
      other: 'Version Number'
    },
    input: {
      models: ['SparkDesk', 'SparkDesk-v1.1', 'SparkDesk-v2.1', 'SparkDesk-v3.1', 'SparkDesk-v3.5']
    },
    prompt: {
      key: 'Enter in the following format: APPID|APISecret|APIKey',
      other: 'Please enter the version number, for example: v3.1'
    },
    modelGroup: 'Xunfei'
  },
  19: {
    input: {
      models: ['360GPT_S2_V9', 'embedding-bert-512-v1', 'embedding_s1_v1', 'semantic_similarity_s1_v1'],
      test_model: '360GPT_S2_V9'
    },
    modelGroup: '360'
  },
  22: {
    prompt: {
      key: 'Enter in the following format: APIKey-AppId, for example: fastgpt-0sp2gtvfdgyi4k30jwlgwf1i-64f335d84283f05518e9e041'
    }
  },
  23: {
    input: {
      models: ['ChatStd', 'ChatPro'],
      test_model: 'ChatStd'
    },
    prompt: {
      key: 'Enter in the following format: AppId|SecretId|SecretKey'
    },
    modelGroup: 'Tencent'
  },
  25: {
    inputLabel: {
      other: 'Version Number',
      provider_models_list: 'Get model list from Gemini'
    },
    input: {
      models: ['gemini-pro', 'gemini-pro-vision', 'gemini-1.0-pro', 'gemini-1.5-pro'],
      test_model: 'gemini-pro'
    },
    prompt: {
      other: 'Please enter the version number, for example: v1'
    },
    modelGroup: 'Google Gemini'
  },
  26: {
    input: {
      models: ['Baichuan2-Turbo', 'Baichuan2-Turbo-192k', 'Baichuan2-53B', 'Baichuan-Text-Embedding'],
      test_model: 'Baichuan2-Turbo'
    },
    modelGroup: 'Baichuan'
  },
  24: {
    inputLabel: {
      other: 'Location/Region'
    },
    input: {
      models: ['tts-1', 'tts-1-hd']
    },
    prompt: {
      test_model: '',
      base_url: '',
      other: 'Please enter the location/region of your Speech Studio, for example: eastasia'
    }
  },
  27: {
    input: {
      models: ['abab6.5s-chat', 'MiniMax-Text-01', 'speech-01-turbo', 'speech-01-240228', 'speech-01-turbo-240228'],
      test_model: 'abab6.5s-chat'
    },
    modelGroup: 'MiniMax'
  },
  28: {
    input: {
      models: ['deepseek-coder', 'deepseek-chat'],
      test_model: 'deepseek-chat'
    },
    inputLabel: {
      provider_models_list: 'Get model list from Deepseek'
    },
    modelGroup: 'Deepseek'
  },
  29: {
    inputLabel: {
      provider_models_list: 'Get model list from Moonshot'
    },
    input: {
      models: ['moonshot-v1-8k', 'moonshot-v1-32k', 'moonshot-v1-128k'],
      test_model: 'moonshot-v1-8k'
    },
    modelGroup: 'Moonshot'
  },
  30: {
    input: {
      models: [
        'open-mistral-7b',
        'open-mixtral-8x7b',
        'mistral-small-latest',
        'mistral-medium-latest',
        'mistral-large-latest',
        'mistral-embed'
      ],
      test_model: 'open-mistral-7b'
    },
    inputLabel: {
      provider_models_list: 'Get model list from Mistral'
    },
    modelGroup: 'Mistral'
  },
  31: {
    input: {
      models: ['llama2-7b-2048', 'llama2-70b-4096', 'mixtral-8x7b-32768', 'gemma-7b-it'],
      test_model: 'llama2-7b-2048'
    },
    inputLabel: {
      provider_models_list: 'Get model list from Groq'
    },
    modelGroup: 'Groq'
  },
  32: {
    input: {
      models: [
        'claude-instant-1.2',
        'claude-2.0',
        'claude-2.1',
        'claude-3-opus-20240229',
        'claude-3-sonnet-20240229',
        'claude-3-haiku-20240307'
      ],
      test_model: 'claude-3-haiku-20240307'
    },
    prompt: {
      key: 'Enter in the following format: Region|AccessKeyID|SecretAccessKey|SessionToken, where SessionToken can be left empty'
    },
    modelGroup: 'Anthropic'
  },
  33: {
    input: {
      models: ['yi-34b-chat-0205', 'yi-34b-chat-200k', 'yi-vl-plus'],
      test_model: 'yi-34b-chat-0205'
    },
    modelGroup: 'Lingyiwanwu'
  },
  34: {
    input: {
      models: [
        'mj_imagine',
        'mj_variation',
        'mj_reroll',
        'mj_blend',
        'mj_modal',
        'mj_zoom',
        'mj_shorten',
        'mj_high_variation',
        'mj_low_variation',
        'mj_pan',
        'mj_inpaint',
        'mj_custom_zoom',
        'mj_describe',
        'mj_upscale',
        'swap_face',
        'mj_upload'
      ]
    },
    prompt: {
      key: 'Fill in the key with the midjourney-proxy key. If no key is set, you can fill in anything',
      base_url: 'Fill in the address with the deployed address of midjourney-proxy',
      test_model: '',
      model_mapping: ''
    },
    modelGroup: 'Midjourney'
  },
  35: {
    input: {
      models: [
        '@cf/stabilityai/stable-diffusion-xl-base-1.0',
        '@cf/lykon/dreamshaper-8-lcm',
        '@cf/bytedance/stable-diffusion-xl-lightning',
        '@cf/qwen/qwen1.5-7b-chat-awq',
        '@cf/qwen/qwen1.5-14b-chat-awq',
        '@hf/google/gemma-7b-it',
        '@hf/thebloke/deepseek-coder-6.7b-base-awq',
        '@hf/thebloke/llama-2-13b-chat-awq',
        '@cf/openai/whisper'
      ],
      test_model: '@hf/google/gemma-7b-it'
    },
    prompt: {
      key: 'Enter in the following format: CLOUDFLARE_ACCOUNT_ID|CLOUDFLARE_API_TOKEN',
      base_url: ''
    },
    modelGroup: 'Cloudflare AI'
  },
  36: {
    input: {
      models: ['command-r', 'command-r-plus'],
      test_model: 'command-r'
    },
    inputLabel: {
      provider_models_list: 'Get model list from Cohere'
    },
    modelGroup: 'Cohere'
  },
  37: {
    input: {
      models: ['sd3', 'sd3-turbo', 'stable-image-core']
    },
    prompt: {
      test_model: ''
    },
    modelGroup: 'Stability AI'
  },
  38: {
    input: {
      models: ['coze-*']
    },
    prompt: {
      models: 'The model name is coze-{bot_id}, you can also directly use the coze-* wildcard to match all models starting with coze',
      model_mapping:
        'Model name mapping, you can use an easy-to-remember name instead of coze-{bot_id}, for example: {"coze-translate": "coze-xxxxx"}, Note: If model mapping is used, then the above model name must use the name before mapping. In the above example, you should fill in coze-translate in the model (if coze-* is already used, it can be ignored).'
    },
    modelGroup: 'Coze'
  },
  39: {
    input: {
      models: ['phi3', 'llama3']
    },
    prompt: {
      base_url: 'Please enter your deployed Ollama address, for example: http://127.0.0.1:11434.  If you are using Cloudflare Zero Trust, you can fill in the authorization information in the plugin below',
      key: 'Please fill in anything'
    }
  },
  40: {
    input: {
      models: ['hunyuan-lite', 'hunyuan-pro', 'hunyuan-standard-256K', 'hunyuan-standard'],
      test_model: 'hunyuan-lite'
    },
    prompt: {
      key: 'Enter in the following format: SecretId|SecretKey'
    },
    modelGroup: 'Hunyuan'
  },
  41: {
    input: {
      models: ['suno_lyrics', 'chirp-v3-0', 'chirp-v3-5']
    },
    prompt: {
      key: 'Fill in the key with the Suno-API key. If no key is set, you can fill it in randomly.',
      base_url: 'Fill in address with deployed Suno-API address.',
      test_model: '',
      model_mapping: ''
    },
    modelGroup: 'Suno'
  },
  42: {
    input: {
      models: ['claude-3-opus-20240229', 'claude-3-sonnet-20240229', 'claude-3-haiku-20240307']
    },
    prompt: {
      key: 'Please refer to the document in the wiki to get the key. https://github.com/MartialBE/one-hub/wiki/VertexAI',
      other: 'Region|ProjectID',
      base_url: ''
    },
    modelGroup: 'VertexAI'
  },
  45: {
    input: {
      models: ['black-forest-labs/FLUX.1-dev', 'black-forest-labs/FLUX.1-schnell']
    },
    inputLabel: {
      provider_models_list: 'Get model list from Siliconflow'
    },
    prompt: {
      base_url: ''
    },
    modelGroup: 'Siliconflow'
  },
  47: {
    input: {
      models: ['jina-reranker-v2-base-multilingual']
    },
    prompt: {
      test_model: ''
    },
    modelGroup: 'Jina'
  },
  49: {
    input: {
      models: ['gpt-4o', 'gpt-4o-mini', 'text-embedding-3-large', 'text-embedding-3-small', 'Cohere-command-r-plus', 'Cohere-command-r'],
      test_model: 'gpt-4o-mini'
    },
    prompt: {
      key: 'For key information, please refer to https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens',
      base_url: 'https://models.inference.ai.azure.com'
    },
    modelGroup: 'Github'
  },
  51: {
    input: {
      models: [
        'recraftv3',
        'recraft20b',
        'recraft_vectorize',
        'recraft_removeBackground',
        'recraft_clarityUpscale',
        'recraft_generativeUpscale',
        'recraft_styles'
      ]
    }
  },
  53: {
    input: {
      models: [
        'kling-video_kling-v1_std_5',
        'kling-video_kling-v1_std_10',
        'kling-video_kling-v1_pro_5',
        'kling-video_kling-v1_pro_10',

        'kling-video_kling-v1-5_std_5',
        'kling-video_kling-v1-5_std_10',
        'kling-video_kling-v1-5_pro_5',
        'kling-video_kling-v1-5_pro_10',

        'kling-video_kling-v1-10_std_5',
        'kling-video_kling-v1-10_std_10',
        'kling-video_kling-v1-10_pro_5',
        'kling-video_kling-v1-10_pro_10'
      ]
    },
    prompt: {
      key: 'Official key format: accessKey|secretKey'
    },
    modelGroup: 'Kling'
  }
};

export { defaultConfig, typeConfig };
