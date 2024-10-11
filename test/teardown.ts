export default async function () {
	if (global.pgContainer && global.pgClient) {
		await global.pgContainer.stop()
		await global.pgClient.end()
	}
}