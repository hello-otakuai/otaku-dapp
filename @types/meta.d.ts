// https://vike.dev/pageContext#typescript
declare global {
    namespace Vike {
        interface PageContext {
            config: {
                subdomain?: Record<string, Any>;
                credentials: Record<string, Any>;
            };
        }
    }
}

export {};
