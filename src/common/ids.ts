const CONF_ENV = "production";

const conf = {
  testing: {
    // General Contants
    STSUI_FIRST_PACKAGE_ID:
      "0xc9fc101b482220270153961cd831ec8291cb3b24eb5326033c879a9861e659f9",

    STSUI_LATEST_PACKAGE_ID:
      "0xee4beb73746391fc1eba3d70d6c14cf9e4ed4d68c5a0b2f6d6bcbfa0438813d1",

    LST_INFO:
      "0xc8806a0f5aa99bb10a97be162eda2d94b7196e66a696b899ebaef07e677ed85e",

    ADMIN_CAP:
      "0x211d66fa8e363d1381c9b83f3e75cd3a2856647492ebf3160085e80b8e8a4a7e",

    COLLECTION_FEE_CAP_ID:
      "0x26c607cdbb2063d6eb2900e63c80181f482996d65bf96c986d76c1264099b88a",

    SUI_SYSTEM_STATE_OBJECT_ID: "0x5",

    // Coin Types
    ALPHA_COIN_TYPE:
      "0xfe3afec26c59e874f3c1d60b8203cb3852d2bb2aa415df9548b8d688e6683f93::alpha::ALPHA",

    SUI_COIN_TYPE: "0x2::sui::SUI",

    STSUI_COIN_TYPE:
      "0x340528e229b5588fcc683de37a3c04112f4863c6311bfdd48574f612bc9b4757::st_sui::ST_SUI",
  },

  production: {
    // General Contants

    STSUI_FIRST_PACKAGE_ID:
      "0xc35ee7fee75782806890cf8ed8536b52b4ba0ace0fb46b944f1155cc5945baa3",

    STSUI_LATEST_PACKAGE_ID:
      "0xc35ee7fee75782806890cf8ed8536b52b4ba0ace0fb46b944f1155cc5945baa3",

    LST_INFO:
      "0x1adb343ab351458e151bc392fbf1558b3332467f23bda45ae67cd355a57fd5f5",

    ADMIN_CAP:
      "0x0d8f3533846c914a025744d87bc33715543fb87cf8f5ab9e3dd67dd7db65f273",

    COLLECTION_FEE_CAP_ID:
      "0x019466989adf3cf8320f8e7ab45a44c6f8ce9688125852b60c82475d2d2f9849",

    SUI_SYSTEM_STATE_OBJECT_ID: "0x5",

    // Coin Types
    ALPHA_COIN_TYPE:
      "0xfe3afec26c59e874f3c1d60b8203cb3852d2bb2aa415df9548b8d688e6683f93::alpha::ALPHA",

    SUI_COIN_TYPE: "0x2::sui::SUI",

    STSUI_COIN_TYPE:
      "0xd1b72982e40348d069bb1ff701e634c117bb5f741f44dff91e472d3b01461e55::stsui::STSUI",
  },
};

export function getConf() {
  return conf[CONF_ENV];
}
