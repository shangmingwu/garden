---
title: Recurrent neural network text generation
date: 2023-01-16 11:00:00
---

# Generating text with recurrent neural networks

I built a recurrent neural network trained to generate text in the style of Shakespeare, as well as some other data (recipes, online tech blogs). See the [GitHub](https://github.com/shangmingwu/rnn-text-generator) repository, which has training data and a Jupyter notebook.

## Example: Shakespeare-style

Sentences often aren't grammatical and made-up words pop up frequently, but the RNN has learned the script structure of Shakespeare's writing well. (In some way this is pretty fitting for Shakespeare.) Without memory/attention built into this model, though, it's hard for it to be consistent in terms of things like the characters in the generated works.

> ROMEO: Did use thee fair?
>
> BENVOLIO:
> Do count us grand it: but 'tis well:
> In truth, sir; but the common rack with oath!
> Tendering me to the garteous labour.
>
> WARWICK:
> I I last to-day, the vanity and double on
> the human car above that gamps about,
> And were her lips, how he not heard
> The gamporr's maintily woo'd amazed: the unacowned silence
> Upon their very house; thou hast
> Wasted to thyself, but so defend thee.
> CLIFFORD:
> Come, couna with me well, and both be so long,
> 'Waving their fortune's to that Bolingbroke
> Hath throw'd to harve thee as we do.
> 
> POMPEY:
> Plentague, my lord; and weep you plain, I would know
> 
> KING RICHARD III:
> Look on her! not a warning sense.
> 
> TRANIO:
> Now is the Vincentio.
> 
> BAPTISTA:
> And I could wish I do welcome for it.
> 
> JULIET:
> Hath been God's knigns; we are comforter, no more;
> Amen, amaz, to put Both obedient heir
> A hope to give against yourself in thing,
> And most cheer to the Tarquis rinisher.
> 
> GLOUCESTER:
> At that may be!
> Be as this own vassal hands, will you seek to
> do.