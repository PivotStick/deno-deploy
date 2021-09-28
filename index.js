addEventListener("fetch", (event) => {
    const response = new Response(
        JSON.stringify({
            bonsoir: "papa reviens",
            grossePute: true,
        }),
        {
            headers: { "content-type": "application/json" },
        }
    )
    event.respondWith(response)
})
