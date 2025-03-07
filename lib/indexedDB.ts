// src/lib/indexedDB.ts
import { openDB } from 'idb';

const DB_NAME = 'TextEffectPlayground';
const STORE_NAME = 'EffectsStore';

export const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    },
  });
};

export const saveData = async (key: string, data: any) => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  await tx.store.put({ id: key, ...data });
  await tx.done;
};

export const getData = async (key: string) => {
  const db = await initDB();
  return db.get(STORE_NAME, key);
};