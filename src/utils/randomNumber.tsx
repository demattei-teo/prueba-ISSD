import getCareers from '@/services/get-careers/getCareers'
export async function generateRandomNumber() {
  const collectionCareers = await getCareers()

  let randomNumber = Math.floor(Math.random() * 100)

  const codeCareers = collectionCareers.map((doc) => doc.code)
  while (codeCareers.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * 100)
  }

  return randomNumber
}
