export type OtakuJournalUser = {
  "version": "0.1.0";
  "name": "otaku_journal_user";
  "instructions": [
    {
      "name": "initializeJournalState";
      "accounts": [
        {
          "name": "journalIdsAccount";
          "isMut": true;
          "isSigner": false;
        },
        {
          "name": "signer";
          "isMut": true;
          "isSigner": true;
        },
        {
          "name": "systemProgram";
          "isMut": false;
          "isSigner": false;
        },
      ];
      "args": [];
    },
    {
      "name": "addJournalEntry";
      "accounts": [
        {
          "name": "journalEntry";
          "isMut": true;
          "isSigner": false;
        },
        {
          "name": "userAccount";
          "isMut": true;
          "isSigner": false;
        },
        {
          "name": "journalIdsAccount";
          "isMut": true;
          "isSigner": false;
        },
        {
          "name": "signer";
          "isMut": true;
          "isSigner": true;
        },
        {
          "name": "systemProgram";
          "isMut": false;
          "isSigner": false;
        },
      ];
      "args": [
        {
          "name": "amount";
          "type": "u64";
        },
        {
          "name": "category";
          "type": {
            "vec": "string";
          };
        },
        {
          "name": "comment";
          "type": "string";
        },
        {
          "name": "motive";
          "type": {
            "defined": "TradeMotive";
          };
        },
        {
          "name": "profit";
          "type": "i64";
        },
        {
          "name": "token";
          "type": "string";
        },
      ];
    },
    {
      "name": "updateJournalEntry";
      "accounts": [
        {
          "name": "journalEntry";
          "isMut": true;
          "isSigner": false;
        },
        {
          "name": "signer";
          "isMut": true;
          "isSigner": true;
        },
        {
          "name": "systemProgram";
          "isMut": false;
          "isSigner": false;
        },
      ];
      "args": [
        {
          "name": "journalId";
          "type": "u64";
        },
        {
          "name": "journalUpdateFields";
          "type": {
            "defined": "JournalUpdateFields";
          };
        },
      ];
    },
    {
      "name": "deleteJournalEntry";
      "accounts": [
        {
          "name": "journalEntry";
          "isMut": true;
          "isSigner": false;
        },
        {
          "name": "signer";
          "isMut": true;
          "isSigner": true;
        },
        {
          "name": "systemProgram";
          "isMut": false;
          "isSigner": false;
        },
      ];
      "args": [
        {
          "name": "journalId";
          "type": "u64";
        },
      ];
    },
  ];
  "accounts": [
    {
      "name": "journalEntry";
      "type": {
        "kind": "struct";
        "fields": [
          {
            "name": "id";
            "type": "u64";
          },
          {
            "name": "token";
            "type": "string";
          },
          {
            "name": "amount";
            "type": "u64";
          },
          {
            "name": "profit";
            "type": "i64";
          },
          {
            "name": "motive";
            "type": {
              "defined": "TradeMotive";
            };
          },
          {
            "name": "category";
            "type": {
              "vec": "string";
            };
          },
          {
            "name": "comment";
            "type": "string";
          },
          {
            "name": "createdAt";
            "type": "i64";
          },
          {
            "name": "lastModified";
            "type": "i64";
          },
          {
            "name": "owner";
            "type": "publicKey";
          },
        ];
      };
    },
    {
      "name": "userAccount";
      "type": {
        "kind": "struct";
        "fields": [
          {
            "name": "userPubkey";
            "type": "publicKey";
          },
          {
            "name": "userJournalIds";
            "type": {
              "vec": "u64";
            };
          },
        ];
      };
    },
    {
      "name": "trackJournalIDsAccount";
      "type": {
        "kind": "struct";
        "fields": [
          {
            "name": "currentJournalId";
            "type": "u64";
          },
        ];
      };
    },
  ];
  "types": [
    {
      "name": "JournalUpdateFields";
      "type": {
        "kind": "struct";
        "fields": [
          {
            "name": "comment";
            "type": {
              "option": "string";
            };
          },
          {
            "name": "category";
            "type": {
              "option": {
                "vec": "string";
              };
            };
          },
          {
            "name": "motive";
            "type": {
              "option": {
                "defined": "TradeMotive";
              };
            };
          },
        ];
      };
    },
    {
      "name": "TradeMotive";
      "type": {
        "kind": "enum";
        "variants": [
          {
            "name": "News";
          },
          {
            "name": "Pattern";
          },
          {
            "name": "Influencer";
          },
          {
            "name": "Sentiment";
          },
          {
            "name": "Others";
          },
        ];
      };
    },
  ];
  "errors": [
    {
      "code": 6000;
      "name": "OnlyJournalOwner";
      "msg": "You do not own this journal";
    },
  ];
};

export const IDL: OtakuJournalUser = {
  "version": "0.1.0",
  "name": "otaku_journal_user",
  "instructions": [
    {
      "name": "initializeJournalState",
      "accounts": [
        {
          "name": "journalIdsAccount",
          "isMut": true,
          "isSigner": false,
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true,
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
        },
      ],
      "args": [],
    },
    {
      "name": "addJournalEntry",
      "accounts": [
        {
          "name": "journalEntry",
          "isMut": true,
          "isSigner": false,
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false,
        },
        {
          "name": "journalIdsAccount",
          "isMut": true,
          "isSigner": false,
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true,
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
        },
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64",
        },
        {
          "name": "category",
          "type": {
            "vec": "string",
          },
        },
        {
          "name": "comment",
          "type": "string",
        },
        {
          "name": "motive",
          "type": {
            "defined": "TradeMotive",
          },
        },
        {
          "name": "profit",
          "type": "i64",
        },
        {
          "name": "token",
          "type": "string",
        },
      ],
    },
    {
      "name": "updateJournalEntry",
      "accounts": [
        {
          "name": "journalEntry",
          "isMut": true,
          "isSigner": false,
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true,
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
        },
      ],
      "args": [
        {
          "name": "journalId",
          "type": "u64",
        },
        {
          "name": "journalUpdateFields",
          "type": {
            "defined": "JournalUpdateFields",
          },
        },
      ],
    },
    {
      "name": "deleteJournalEntry",
      "accounts": [
        {
          "name": "journalEntry",
          "isMut": true,
          "isSigner": false,
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true,
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
        },
      ],
      "args": [
        {
          "name": "journalId",
          "type": "u64",
        },
      ],
    },
  ],
  "accounts": [
    {
      "name": "journalEntry",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64",
          },
          {
            "name": "token",
            "type": "string",
          },
          {
            "name": "amount",
            "type": "u64",
          },
          {
            "name": "profit",
            "type": "i64",
          },
          {
            "name": "motive",
            "type": {
              "defined": "TradeMotive",
            },
          },
          {
            "name": "category",
            "type": {
              "vec": "string",
            },
          },
          {
            "name": "comment",
            "type": "string",
          },
          {
            "name": "createdAt",
            "type": "i64",
          },
          {
            "name": "lastModified",
            "type": "i64",
          },
          {
            "name": "owner",
            "type": "publicKey",
          },
        ],
      },
    },
    {
      "name": "userAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "userPubkey",
            "type": "publicKey",
          },
          {
            "name": "userJournalIds",
            "type": {
              "vec": "u64",
            },
          },
        ],
      },
    },
    {
      "name": "trackJournalIDsAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "currentJournalId",
            "type": "u64",
          },
        ],
      },
    },
  ],
  "types": [
    {
      "name": "JournalUpdateFields",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "comment",
            "type": {
              "option": "string",
            },
          },
          {
            "name": "category",
            "type": {
              "option": {
                "vec": "string",
              },
            },
          },
          {
            "name": "motive",
            "type": {
              "option": {
                "defined": "TradeMotive",
              },
            },
          },
        ],
      },
    },
    {
      "name": "TradeMotive",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "News",
          },
          {
            "name": "Pattern",
          },
          {
            "name": "Influencer",
          },
          {
            "name": "Sentiment",
          },
          {
            "name": "Others",
          },
        ],
      },
    },
  ],
  "errors": [
    {
      "code": 6000,
      "name": "OnlyJournalOwner",
      "msg": "You do not own this journal",
    },
  ],
};
