
#### What is the difference between sign-in and sign up?

Sign-up happens once, and afterwards the information that is used to authenticate a user exists in the system for sign-in.

#### What is authentication?

It boils down to a really interesting question: _Are you who you say you are?_ And we use the username/password as a proxy for that.

#### What is the difference between Authentication and Authorization?

Authorization happens after authentication. It's about scope, and specific information. _What is the user allowed to see/interact with?_

#### How do passwords work?

Do websites save our passwords? And if they do, how are they stored? Talk about encryption, and why hashed passwords are encrypted. We don't want malicious employees or hackers to see our passwords.

#### What is the difference between hashing and encrypting?

What is encryption? What can be encrypted? Anything that can be encrypted, must also be able to be decrypted. You can use this time to talk about ciphers, and show how at its core, encryption and hashing is about these principles. In order to decrypt a cypher, you need to know the cypher used and any parameters \(offset, perhaps\) used to encrypt the information.

Hashing is a little different: the ultimate goal of one-way hashing is that you cannot "decrypt" the original text. In addition to any encryption scheme, each authenticated user has a "salt", added information that augments the password to make decryption even harder.

Give an example of various text going through some kind of hashing scheme with salts, so that the students can see this in action. Be sure your example shows that the server is actually validating the equality of the _hashed password_ with the hashed input.

### Using `bcrypt` to create passwords in Rails

What's cool about `bcrypt`? By design, it's slow. This means that anyone who wants to crack it has to take a long time to brute-force passwords. It also allows you to define a column called `password_digest` and it will do the rest of the work.

_Remember, convention over configuration._ And especially in this case, we generally don't have the time or energy to build our own encryption that surpasses what already exists.

After installing the `bcrypt` gem, you can use a macro in your user model called `has_secure_password`, which does a lot of the integration for you. Go in and test this in the console. You can show how the `user` model ends up with a `password_digest` attribute even though you send in `password` through the `create`. Do it again, this time with a `password_confirmation` in the initialization hash. You can show how rails rejects the transaction.

Now that you've created a user with a password, you can do `user.authenticate("password")`.

