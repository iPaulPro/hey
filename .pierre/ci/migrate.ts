import { Icons, annotate, run } from "pierre";

export const label = "Migrate DB";

const migrateProductionDb = async ({ branch }) => {
  if (branch.name !== "main") {
    await run('echo "Skipping DB Migration on non-main branches 🚫"', {
      label: "Skipping DB Migration"
    });

    annotate({
      color: "fg",
      label: "Skipped Production DB Migration",
      icon: Icons.Table
    });
  } else {
    await run("cd apps/api && pnpm prisma:migrate", {
      label: "Migrating Production DB",
      env: { DATABASE_URL: process.env.DATABASE_URL as string }
    });
  }
};

export default migrateProductionDb;
