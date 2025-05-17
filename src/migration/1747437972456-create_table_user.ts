import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUser1747437972456 implements MigrationInterface {
  // Quando criamos o servidor a primeira coisa a ser feita é rodar o up (Verifica se alguma vez esse migration foi rodado, se foi executado ele não roda novamente). E o down é o que desfaz a migração.
  // O down é o que desfaz a migração, ou seja, se você rodar o down ele vai desfazer o que foi feito no up.
  // O up é o que faz a migração, ou seja, se você rodar o up ele vai fazer o que foi feito no up.

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
                CREATE TABLE public.user (
                    id integer NOT NULL,
                    name character varying NOT NULL,
                    email character varying NOT NULL,
                    cpf character varying NOT NULL,
                    type_user int NOT NULL,
                    phone character varying NOT NULL,
                    password character varying NOT NULL,
                    created_at timestamp without time zone DEFAULT now() NOT NULL,
                    updated_at timestamp without time zone DEFAULT now() NOT NULL,
                    primary key (id)
                );

                CREATE SEQUENCE public.user_id_seq
                    AS integer
                    START WITH 1
                    INCREMENT BY 1
                    NO MINVALUE
                    NO MAXVALUE
                    CACHE 1;

                ALTER SEQUENCE public.user_id_seq OWNED BY public.user.id;

                ALTER TABLE ONLY public.user ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        drop table public.user;
    `);
  }
}
