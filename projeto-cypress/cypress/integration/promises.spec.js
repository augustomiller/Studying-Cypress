/* eslint-disable no-undef */
/* eslint-disable no-console */
/* STUDY
 * Conceito de Promises
 *
 * Aguardar e pegar um dado em uma linha do tempo sem para a execução do NodeJS.
 */

it('sem testes ainda', () => {});

const getSomething = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(13);
  }, 1000);
});

// FIXME
const system = async () => {
  console.log('init');
  const some = await getSomething();
  console.log(`Something is ${some}`);
  console.log('end');
};

system();
