const getLatestLog = (activityId: string) => {
  const logs = activitiesLogsData.filter(
    (log) => log.activityId === activityId,
  );
  const latestLog = logs.sort(
    (a, b) => new Date(b.loggedAt).getTime() - new Date(a.loggedAt).getTime(),
  )[0];
  return latestLog;
};

export const getActivitiesByGroup = async (groupId: string) => {
  const activities = activitiesData.map((activity) => {
    const logs = activitiesLogsData.filter(
      (log) => log.activityId === activity.id,
    );
    return {
      ...activity,
      groupId,
      totalLogs: logs.length,
      latestLog: getLatestLog(activity.id),
      logs,
    };
  });
  return activities;
};

export const getActivityById = async (id: string) => {
  const activity = activitiesData.find((activity) => activity.id === id);
  if (!activity) {
    throw new Error("Activity not found");
  }
  const logs = activitiesLogsData.filter(
    (log) => log.activityId === activity.id,
  );
  return {
    ...activity,
    logs,
    latestLog: getLatestLog(activity.id),
  };
};

const activitiesData = [
  {
    id: "788e86c4-1d49-4952-bcfa-1fa1dd4bca41",
    name: "枕カバー洗濯",
    createdAt: "2024-08-30T15:07:38.058Z",
  },
  {
    id: "b257eecc-52ae-4abf-aa09-3bd4d671b150",
    name: "毛布、布団干し",
    createdAt: "2024-08-29T15:07:38.060Z",
  },
  {
    id: "f04f16f7-957e-4354-8e04-12cdcbcb71ab",
    name: "レンジパネル新調",
    createdAt: "2024-08-28T15:07:38.060Z",
  },
  {
    id: "6e45a31a-dfe4-4122-814c-4072716c6750",
    name: "洗濯槽カビキラー",
    createdAt: "2024-08-27T15:07:38.060Z",
  },
  {
    id: "b57f1d40-435a-4e90-9f9d-7e2455b6e7d6",
    name: "ソファ座面キルト洗い",
    createdAt: "2024-08-26T15:07:38.060Z",
  },
  {
    id: "fd9880d5-4510-4e3d-823f-e6ab8db4949c",
    name: "パンパース開封",
    createdAt: "2024-08-25T15:07:38.060Z",
  },
  {
    id: "5f0a6045-614e-4136-9458-54c1ceee842f",
    name: "シャンプー開封",
    createdAt: "2024-08-24T15:07:38.060Z",
  },
  {
    id: "8d773ea2-0a74-4b04-9a70-117d96f7104a",
    name: "コンディショナー本体",
    createdAt: "2024-08-23T15:07:38.060Z",
  },
  {
    id: "395cb2ed-6c56-4d90-9aae-62f5deb77994",
    name: "ボディーソープ開封",
    createdAt: "2024-08-22T15:07:38.060Z",
  },
  {
    id: "1cd31226-6d9b-4556-845f-f1a2e5bf8846",
    name: "泡洗顔",
    createdAt: "2024-08-21T15:07:38.060Z",
  },
  {
    id: "f14f5255-0dec-4c29-85d0-cae8b9c9e539",
    name: "ポケGOレベル",
    createdAt: "2024-08-20T15:07:38.060Z",
  },
  {
    id: "da67b65a-8f49-481c-985a-963f084a35fc",
    name: "銀イオン浴室２ヶ月おき",
    createdAt: "2024-08-19T15:07:38.060Z",
  },
  {
    id: "66b939b1-944c-43d2-9812-90de885f94e3",
    name: "掃除機紙パック２ヶ月おき",
    createdAt: "2024-08-18T15:07:38.060Z",
  },
  {
    id: "787f54f6-682d-41af-8e0f-fe40844e0a4f",
    name: "床の拭き掃除",
    createdAt: "2024-08-17T15:07:38.060Z",
  },
  {
    id: "b07ce12f-ce12-443d-bb8b-a5f8a7cd8cf7",
    name: "お風呂換気扇フィルター2‐3ヶ月(取り替えサインあり)",
    createdAt: "2024-08-16T15:07:38.060Z",
  },
  {
    id: "7aa36528-34c5-451b-b3b6-0567d3476e96",
    name: "エアコンフィルター掃除",
    createdAt: "2024-08-15T15:07:38.060Z",
  },
  {
    id: "a307af4d-36b6-417d-8982-ee2504c1439e",
    name: "Applepencilペン先",
    createdAt: "2024-08-14T15:07:38.060Z",
  },
  {
    id: "5b8378cf-6667-4398-8f80-7ad5ad004ce1",
    name: "ダニシート3か月",
    createdAt: "2024-08-13T15:07:38.060Z",
  },
];

const activitiesLogsData = [
  {
    id: "20f5f614-4087-4124-98ec-1789a09b0dc3",
    activityId: "788e86c4-1d49-4952-bcfa-1fa1dd4bca41",
    note: "",
    loggedAt: "2024-07-01T08:02:44.000Z",
  },
  {
    id: "a3dd01b6-fdb0-4e88-a663-f185b35fc6ef",
    activityId: "788e86c4-1d49-4952-bcfa-1fa1dd4bca41",
    note: "",
    loggedAt: "2024-07-07T23:25:02.000Z",
  },
  {
    id: "f05dface-346c-4d0c-9395-f71c2f62dc0b",
    activityId: "788e86c4-1d49-4952-bcfa-1fa1dd4bca41",
    note: "",
    loggedAt: "2024-07-16T00:51:36.000Z",
  },
  {
    id: "45be31c5-adfa-4a91-bbbf-ce868d37a1d3",
    activityId: "788e86c4-1d49-4952-bcfa-1fa1dd4bca41",
    note: "",
    loggedAt: "2024-07-26T09:19:49.000Z",
  },
  {
    id: "1e5ec396-882f-4296-9526-5df3f8417183",
    activityId: "788e86c4-1d49-4952-bcfa-1fa1dd4bca41",
    note: "",
    loggedAt: "2024-08-04T07:40:17.000Z",
  },
  {
    id: "c51db960-80ad-4745-8703-3132e51ea7e0",
    activityId: "788e86c4-1d49-4952-bcfa-1fa1dd4bca41",
    note: "",
    loggedAt: "2024-08-10T05:07:00.000Z",
  },
  {
    id: "a8d98cbe-a7df-423b-b527-c68f46cce866",
    activityId: "788e86c4-1d49-4952-bcfa-1fa1dd4bca41",
    note: "",
    loggedAt: "2024-08-20T23:43:53.000Z",
  },
  {
    id: "5d3e9309-82f2-41b9-9287-2bb8dae5f331",
    activityId: "788e86c4-1d49-4952-bcfa-1fa1dd4bca41",
    note: "",
    loggedAt: "2024-08-28T10:40:01.000Z",
  },
  {
    id: "8525df13-cd8d-45e7-850f-b8b51a32e8da",
    activityId: "b257eecc-52ae-4abf-aa09-3bd4d671b150",
    note: "厚手毛布洗い収納",
    loggedAt: "2024-06-13T00:57:32.000Z",
  },
  {
    id: "fa7aa7f7-379c-41e7-b303-240a0d18427b",
    activityId: "f04f16f7-957e-4354-8e04-12cdcbcb71ab",
    note: "",
    loggedAt: "2024-02-16T00:35:12.000Z",
  },
  {
    id: "10b36c4e-50a8-47d6-9f65-0b37583a11bd",
    activityId: "f04f16f7-957e-4354-8e04-12cdcbcb71ab",
    note: "",
    loggedAt: "2024-07-08T00:09:57.000Z",
  },
  {
    id: "2441c070-f873-48d1-894f-1e796660714d",
    activityId: "6e45a31a-dfe4-4122-814c-4072716c6750",
    note: "",
    loggedAt: "2024-08-27T22:56:56.000Z",
  },
  {
    id: "421cfa96-c5bf-4c0e-bdb2-6cf4c922ba82",
    activityId: "b57f1d40-435a-4e90-9f9d-7e2455b6e7d6",
    note: "",
    loggedAt: "2023-06-10T07:02:18.000Z",
  },
  {
    id: "8f47b86e-7a97-4e13-b7bd-c19510667ec7",
    activityId: "fd9880d5-4510-4e3d-823f-e6ab8db4949c",
    note: "",
    loggedAt: "2022-07-10T00:54:05.000Z",
  },
  {
    id: "03dae73b-4f85-439f-96f3-7d71e11f7a1b",
    activityId: "5f0a6045-614e-4136-9458-54c1ceee842f",
    note: "",
    loggedAt: "2024-08-28T10:40:13.000Z",
  },
  {
    id: "e98530d0-555d-4244-af33-7990ac216117",
    activityId: "8d773ea2-0a74-4b04-9a70-117d96f7104a",
    note: "",
    loggedAt: "2024-06-16T08:13:54.000Z",
  },
  {
    id: "11621b97-b23f-4012-9cb4-d694a97998cd",
    activityId: "395cb2ed-6c56-4d90-9aae-62f5deb77994",
    note: "次回詰め替え",
    loggedAt: "2024-08-16T10:59:40.000Z",
  },
  {
    id: "a4c4d35f-690f-40da-8217-416d0f792b86",
    activityId: "1cd31226-6d9b-4556-845f-f1a2e5bf8846",
    note: "",
    loggedAt: "2023-10-11T12:53:21.000Z",
  },
  {
    id: "2ff77a39-1d41-4409-845d-032bfebf9c91",
    activityId: "1cd31226-6d9b-4556-845f-f1a2e5bf8846",
    note: "詰め替え、次回本体",
    loggedAt: "2024-04-25T00:49:49.000Z",
  },
  {
    id: "44627144-330f-412a-9e62-8a873ff9e1aa",
    activityId: "f14f5255-0dec-4c29-85d0-cae8b9c9e539",
    note: "38",
    loggedAt: "2021-04-08T21:02:07.000Z",
  },
  {
    id: "ec3d0951-abc4-4508-a627-1d9103174d96",
    activityId: "f14f5255-0dec-4c29-85d0-cae8b9c9e539",
    note: "39",
    loggedAt: "2021-07-08T21:11:12.000Z",
  },
  {
    id: "bc9ab075-28bf-42e2-b077-0c4268a8d517",
    activityId: "f14f5255-0dec-4c29-85d0-cae8b9c9e539",
    note: "",
    loggedAt: "2022-06-29T08:39:24.000Z",
  },
  {
    id: "91926e9c-5439-47d9-8d15-7cb52a9e7007",
    activityId: "da67b65a-8f49-481c-985a-963f084a35fc",
    note: "",
    loggedAt: "2024-02-16T00:35:10.000Z",
  },
  {
    id: "1de67b7d-ee1d-4ead-83b2-0012e4dd51b2",
    activityId: "da67b65a-8f49-481c-985a-963f084a35fc",
    note: "",
    loggedAt: "2024-04-19T12:23:27.000Z",
  },
  {
    id: "e3178d3c-647a-4521-93bd-1625954adbab",
    activityId: "da67b65a-8f49-481c-985a-963f084a35fc",
    note: "",
    loggedAt: "2024-06-13T02:41:23.000Z",
  },
  {
    id: "85361b6c-c289-42ea-9308-ab8b140b2fee",
    activityId: "66b939b1-944c-43d2-9812-90de885f94e3",
    note: "",
    loggedAt: "2024-04-21T08:27:38.000Z",
  },
  {
    id: "4560d785-a176-4e0c-9a21-a02c12cbab40",
    activityId: "66b939b1-944c-43d2-9812-90de885f94e3",
    note: "",
    loggedAt: "2024-06-15T08:29:02.000Z",
  },
  {
    id: "d13bdfd7-bcb4-42dd-b58e-644d455aa611",
    activityId: "66b939b1-944c-43d2-9812-90de885f94e3",
    note: "",
    loggedAt: "2024-08-26T07:05:14.000Z",
  },
  {
    id: "f6dc1cdf-c5c5-497c-9cf4-3daf9246a666",
    activityId: "787f54f6-682d-41af-8e0f-fe40844e0a4f",
    note: "",
    loggedAt: "2022-07-12T06:04:41.000Z",
  },
  {
    id: "8279d6a0-0952-4c85-b917-40656cebbf47",
    activityId: "787f54f6-682d-41af-8e0f-fe40844e0a4f",
    note: "",
    loggedAt: "2023-09-13T02:44:01.000Z",
  },
  {
    id: "9e682191-0e5c-4339-abdd-337383725acc",
    activityId: "b07ce12f-ce12-443d-bb8b-a5f8a7cd8cf7",
    note: "",
    loggedAt: "2024-02-16T00:35:08.000Z",
  },
  {
    id: "c391b424-ac1c-4062-81ef-73242e99f95b",
    activityId: "b07ce12f-ce12-443d-bb8b-a5f8a7cd8cf7",
    note: "",
    loggedAt: "2024-04-19T12:23:29.000Z",
  },
  {
    id: "4352d1ec-d065-47fa-89ba-b2fb68bfb9bd",
    activityId: "b07ce12f-ce12-443d-bb8b-a5f8a7cd8cf7",
    note: "",
    loggedAt: "2024-06-13T02:41:21.000Z",
  },
  {
    id: "a6ace683-79e9-4a4a-bc37-23bed13996cf",
    activityId: "7aa36528-34c5-451b-b3b6-0567d3476e96",
    note: "3部屋すべて",
    loggedAt: "2022-11-13T02:18:34.000Z",
  },
  {
    id: "2a6c64ae-51ac-467f-8054-0a7db977cd9b",
    activityId: "7aa36528-34c5-451b-b3b6-0567d3476e96",
    note: "",
    loggedAt: "2023-10-11T12:52:52.000Z",
  },
  {
    id: "2eb42eb4-1012-437e-9e42-9306997b19ce",
    activityId: "7aa36528-34c5-451b-b3b6-0567d3476e96",
    note: "3部屋",
    loggedAt: "2024-04-25T01:27:18.000Z",
  },
  {
    id: "dff7cf23-ac10-436d-9ae0-ccf0da4163ca",
    activityId: "a307af4d-36b6-417d-8982-ee2504c1439e",
    note: "",
    loggedAt: "2024-01-29T05:42:20.000Z",
  },
  {
    id: "ea8f1c84-c6dd-4d00-bef3-63679d3a0c0b",
    activityId: "5b8378cf-6667-4398-8f80-7ad5ad004ce1",
    note: "",
    loggedAt: "2024-06-14T05:18:44.000Z",
  },
];
