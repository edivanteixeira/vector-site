import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener("fetch", event => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  try {
    // Tenta retornar o ativo estático requisitado
    return await getAssetFromKV(event);
  } catch (error) {
    return new Response("Erro ao carregar o ativo.", { status: 500 });
  }
}
