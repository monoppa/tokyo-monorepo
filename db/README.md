# Initialize the project

```bash
supabase init
```

Then we need to link the current project with the remote database. Use the connection string from your Supabase project here.

```bash
# set remote URL to live project
supabase db remote set 'postgresql://postgres:<your_password>@db.<your_project_ref>.supabase.co:5432/postgres'
# diff local vs live project
# outputs sql files in migrations folder
supabase db remote commit
```

# Start Supabase

```bash
supabase start
```

# Changing schema

To change the schema for the local database, simply run some SQL against the DB URL shown by supabase start. For the tour, we'll run these changes using a Postgres client of your choice:

```sql
CREATE TABLE boarders(
	id int4 PRIMARY KEY,
	name text
);
```

Commit the schema changes as part of the migrations

```bash
supabase db commit add_boarders
```

This will create a new migration named <timestamp>\_add_boarders.sql that represents any changes we've done to the local database since supabase start.

It won't be interesting without sample data in the table, but instead of inserting it directly, we use the seed script in supabase/seed.sql. This way we don't have to run it manually every time we run supabase start.

```sql
-- in supabase/seed.sql
INSERT INTO boarders(id, name) VALUES (1, 'Arthur Dent'), (2, 'Ford Prefect');
```

Now run the following to rerun the migration scripts and the seed script:

```bash
# revert DB schema to sane state
supabase db reset
```

# Deploying migrations

Finally, we need to deploy all these local changes to the remote database, i.e. the Supabase project DB. Once you're happy with your schema changes, run:

```bash
supabase db push
```

Ref: https://github.com/supabase/cli/tree/main/examples/tour
