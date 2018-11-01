
module.exports.sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

module.exports.waitForConnection = async ({
  attempts = 30,
  interval = 1000, /* ms */
  connect = () => {},
  onError = (e) => console.error('Connection error.', e),
}) => {
  if (attempts === 0) throw new Error('Failed to connect');
  try {
    return connect();
  } catch (e) {
    onError(e)
    await sleep(interval);
    return run(connectionString, attempts - 1, interval);
  }
}
