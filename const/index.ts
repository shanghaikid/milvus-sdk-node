// export const IP = "172.16.50.14:19530";
// export const IP = "172.16.50.11:19530";
export const IP = "in01-b4b42dfca4f60a1.aws-ap-southeast-1.vectordb-sit.zillizcloud.com:19530";

export const DIMENSION = 4;

export const INDEX_FILE_SIZE = 1024;

export const GENERATE_NAME = (pre = "collection") =>
  `${pre}_${Math.random().toString(36).substr(2, 8)}`;

export const PARTITION_TAG = "random";
