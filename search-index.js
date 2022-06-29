var searchIndex = JSON.parse('{\
"hyperplonk":{"doc":"","t":[],"n":[],"q":[],"d":[],"i":[],"f":[],"p":[]},\
"pcs":{"doc":"","t":[16,13,13,13,13,3,8,4,16,3,16,16,13,3,3,16,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,11,12,12,12,12,11,11,11,11,11,11,11,11,11,11,12,12,10,11,12,12,11,11,11,11,11,11,11,11,11,11,11,11,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10,11,11,11,11,11,11,12,12,12,12,12],"n":["Commitment","InvalidParameters","InvalidProof","InvalidProver","InvalidVerifier","KZGMultilinearPC","MultilinearCommitmentScheme","PCSErrors","Proof","ProverParam","ProverParam","SRS","SerializationError","UniversalParams","VerifierParam","VerifierParam","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone","clone_into","clone_into","clone_into","commit","commit","deref","deref","deref","deref","deref","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deserialize","deserialize","deserialize","deserialize_unchecked","deserialize_unchecked","deserialize_unchecked","deserialize_uncompressed","deserialize_uncompressed","deserialize_uncompressed","drop","drop","drop","drop","drop","extract_prover_param","extract_verifier_param","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","g","g","gen_srs_for_testing","h","h","h_mask","h_mask","init","init","init","init","init","into","into","into","into","into","num_vars","num_vars","open","open","powers_of_g","prover_param","serialize","serialize","serialize","serialize_unchecked","serialize_unchecked","serialize_unchecked","serialize_uncompressed","serialize_uncompressed","serialize_uncompressed","serialized_size","serialized_size","serialized_size","setup","setup","to_owned","to_owned","to_owned","to_string","trim","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","uncompressed_size","uncompressed_size","uncompressed_size","verify","verify","vzip","vzip","vzip","vzip","vzip","0","0","0","0","0"],"q":["pcs","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","pcs::PCSErrors","","","",""],"d":["","Invalid parameters: {0}","Invalid Proof: {0}","Invalid Prover: {0}","Invalid Verifier: {0}","KZG Polynomial Commitment Scheme on multilinear extensions.","","A <code>enum</code> specifying the possible failure modes of the PCS.","","Prover Parameters","","","An error during (de)serialization: {0}","Universal Parameter","Verifier Parameters","","","","","","","","","","","","","","","","","","Generate a commitment for a polynomial","Generate a commitment for a polynomial.","","","","","","","","","","","","","","","","","","","","","","","","","Extract the prover parameters from the public parameters.","Extract the verifier parameters from the public parameters.","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","generator for G1","generator of G1","Build SRS for testing. WARNING: THIS FUNCTION IS FOR …","generator for G2","generator of G2","h^randomness: h^t1, h^t2, …, <strong>h^{t_nv}</strong>","h^randomness: h^t1, h^t2, …, <strong>h^{t_nv}</strong>","","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","number of variables","number of variables","On input a polynomial <code>p</code> and a point <code>point</code>, outputs a proof …","On input a polynomial <code>p</code> and a point <code>point</code>, outputs a proof …","<code>pp_{num_vars}</code>, <code>pp_{num_vars - 1}</code>, <code>pp_{num_vars - 2}</code>, …, …","prover parameters","","","","","","","","","","","","","Generate SRS from RNG. WARNING: THIS FUNCTION IS FOR …","Generate SRS from RNG. WARNING: THIS FUNCTION IS FOR …","","","","","Trim the universal parameters to specialize the public …","","","","","","","","","","","","","","","","","","","Verifies that <code>value</code> is the evaluation at <code>x</code> of the …","Verifies that <code>value</code> is the evaluation at <code>x</code> of the …","","","","","","","","","",""],"i":[1,2,2,2,2,0,0,0,1,0,1,1,2,0,0,1,3,2,4,5,6,3,2,4,5,6,4,5,6,4,5,6,1,3,3,2,4,5,6,3,2,4,5,6,4,5,6,4,5,6,4,5,6,3,2,4,5,6,4,4,2,2,4,5,6,3,2,2,4,5,6,5,6,4,5,6,4,6,3,2,4,5,6,3,2,4,5,6,5,6,1,3,5,4,4,5,6,4,5,6,4,5,6,4,5,6,1,3,4,5,6,2,4,3,2,4,5,6,3,2,4,5,6,3,2,4,5,6,4,5,6,1,3,3,2,4,5,6,7,8,9,10,11],"f":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["universalparams",3]],[[["",0]],["proverparam",3]],[[["",0]],["verifierparam",3]],[[["",0],["",0]]],[[["",0],["",0]]],[[["",0],["",0]]],[[],["result",4,[["pcserrors",4]]]],[[],["result",4,[["pcserrors",4]]]],[[["usize",0]],["",0]],[[["usize",0]],["",0]],[[["usize",0]],["",0]],[[["usize",0]],["",0]],[[["usize",0]],["",0]],[[["usize",0]],["",0]],[[["usize",0]],["",0]],[[["usize",0]],["",0]],[[["usize",0]],["",0]],[[["usize",0]],["",0]],[[["read",8]],["result",4,[["serializationerror",4]]]],[[["read",8]],["result",4,[["serializationerror",4]]]],[[["read",8]],["result",4,[["serializationerror",4]]]],[[["read",8]],["result",4,[["serializationerror",4]]]],[[["read",8]],["result",4,[["serializationerror",4]]]],[[["read",8]],["result",4,[["serializationerror",4]]]],[[["read",8]],["result",4,[["serializationerror",4]]]],[[["read",8]],["result",4,[["serializationerror",4]]]],[[["read",8]],["result",4,[["serializationerror",4]]]],[[["usize",0]]],[[["usize",0]]],[[["usize",0]]],[[["usize",0]]],[[["usize",0]]],[[["",0]],["proverparam",3]],[[["",0]],["verifierparam",3]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[]],[[]],[[["serializationerror",4]]],[[]],[[]],[[]],null,null,[[["",0],["usize",0]],["result",4,[["pcserrors",4]]]],null,null,null,null,[[],["usize",0]],[[],["usize",0]],[[],["usize",0]],[[],["usize",0]],[[],["usize",0]],[[]],[[]],[[]],[[]],[[]],null,null,[[],["result",4,[["pcserrors",4]]]],[[],["result",4,[["pcserrors",4]]]],null,null,[[["",0],["write",8]],["result",4,[["serializationerror",4]]]],[[["",0],["write",8]],["result",4,[["serializationerror",4]]]],[[["",0],["write",8]],["result",4,[["serializationerror",4]]]],[[["",0],["write",8]],["result",4,[["serializationerror",4]]]],[[["",0],["write",8]],["result",4,[["serializationerror",4]]]],[[["",0],["write",8]],["result",4,[["serializationerror",4]]]],[[["",0],["write",8]],["result",4,[["serializationerror",4]]]],[[["",0],["write",8]],["result",4,[["serializationerror",4]]]],[[["",0],["write",8]],["result",4,[["serializationerror",4]]]],[[["",0]],["usize",0]],[[["",0]],["usize",0]],[[["",0]],["usize",0]],[[["",0],["usize",0]],["result",4,[["pcserrors",4]]]],[[["",0],["usize",0]],["result",4,[["pcserrors",4]]]],[[["",0]]],[[["",0]]],[[["",0]]],[[["",0]],["string",3]],[[["",0],["usize",0]],["result",4,[["pcserrors",4]]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["usize",0]],[[["",0]],["usize",0]],[[["",0]],["usize",0]],[[],["result",4,[["bool",0],["pcserrors",4]]]],[[],["result",4,[["bool",0],["pcserrors",4]]]],[[]],[[]],[[]],[[]],[[]],null,null,null,null,null],"p":[[8,"MultilinearCommitmentScheme"],[4,"PCSErrors"],[3,"KZGMultilinearPC"],[3,"UniversalParams"],[3,"ProverParam"],[3,"VerifierParam"],[13,"InvalidProver"],[13,"InvalidVerifier"],[13,"InvalidProof"],[13,"InvalidParameters"],[13,"SerializationError"]]},\
"poly_iop":{"doc":"","t":[13,13,13,13,13,16,16,8,16,3,4,16,13,13,8,16,16,3,16,3,16,8,16,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10,11,12,11,11,11,11,11,11,11,11,11,11,10,11,5,11,11,11,11,10,10,10,11,11,11,11,11,11,11,12,11,11,11,11,11,12,12,10,10,10,11,11,11,11,11,5,14,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10,11,10,10,10,11,11,11,11,11,11,11,12,12,12,12,12,12],"n":["InvalidParameters","InvalidProof","InvalidProver","InvalidTranscript","InvalidVerifier","MultilinearExtension","PermutationChallenge","PermutationCheck","PermutationCheckSubClaim","PolyIOP","PolyIOPErrors","Proof","SerializationError","ShouldNotArrive","SumCheck","SumCheckSubClaim","Transcript","VPAuxInfo","VPAuxInfo","VirtualPolynomial","VirtualPolynomial","ZeroCheck","ZeroCheckSubClaim","add_mle_list","aux_info","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone","clone_into","clone_into","clone_into","compute_products","compute_products","default","default","default","deref","deref","deref","deref","deref_mut","deref_mut","deref_mut","deref_mut","drop","drop","drop","drop","eq","eq","evaluate","extract_sum","extract_sum","flattened_ml_extensions","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","generate_challenge","generate_challenge","identity_permutation_mle","init","init","init","init","init_transcript","init_transcript","init_transcript","init_transcript","init_transcript","init_transcript","into","into","into","into","max_degree","mul_by_mle","ne","ne","new","new_from_mle","num_variables","products","prove","prove","prove","prove","prove","prove","rand","rand_zero","random_permutation_mle","to_bytes","to_owned","to_owned","to_owned","to_string","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","update_challenge","update_challenge","verify","verify","verify","verify","verify","verify","vzip","vzip","vzip","vzip","0","0","0","0","0","0"],"q":["poly_iop","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","poly_iop::PolyIOPErrors","","","","",""],"d":["Invalid parameters: {0}","Invalid Proof: {0}","Invalid Prover: {0}","Invalid Transcript: {0}","Invalid Verifier: {0}","","","A PermutationCheck is derived from ZeroCheck.","","Struct for PolyIOP protocol. It has an associated type <code>F</code> …","A <code>enum</code> specifying the possible failure modes of the …","","An error during (de)serialization: {0}","Should not arrive to this point","Trait for doing sum check protocols.","","","Auxiliary information about the multilinear polynomial","","A virtual polynomial is a sum of products of multilinear …","","A ZeroCheck is derived from SumCheck.","","Add a product of list of multilinear extensions to self …","Aux information about the multilinear polynomial","","","","","","","","","","","","","","","Step 2 of the IOP. Compute the following 7 polynomials","Step 2 of the IOP. Compute the following 7 polynomials","","","","","","","","","","","","","","","","","","Evaluate the virtual polynomial at point <code>point</code>. Returns an …","Extract sum from the proof","Extract sum from the proof","Stores multilinear extensions in which product …","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Step 1 of the IOP. Generate challenge beta and gamma from …","Step 1 of the IOP. Generate challenge beta and gamma from …","An MLE that represent an identity permutation: …","","","","","Initialize the system with a transcript","Initialize the system with a transcript","Initialize the system with a transcript","Initialize the system with a transcript","Initialize the system with a transcript","Initialize the system with a transcript","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","max number of multiplicands in each product","Multiple the current VirtualPolynomial by an MLE:","","","Creates an empty virtual polynomial with <code>num_variables</code>.","Creates an new virtual polynomial from a MLE and its …","number of variables of the polynomial","list of reference to products (as usize) of multilinear …","Step 5 of the IOP.","Generate proof of the sum of polynomial over {0,1}^<code>num_vars</code>","initialize the prover to argue for the sum of polynomial …","Step 5 of the IOP.","Generate proof of the sum of polynomial over {0,1}^<code>num_vars</code>","Initialize the prover to argue for the sum of polynomial …","Sample a random virtual polynomial, return the polynomial …","Sample a random virtual polynomial that evaluates to zero …","An MLE that represent a random permutation","Takes as input a struct, and converts them to a series of …","","","","","","","","","","","","","","","","","Step 4 of the IOP. Update the challenge with alpha; …","Step 4 of the IOP. Update the challenge with alpha; …","Verify that an MLE g(x) is a permutation of MLE f(x) over …","Verify the claimed sum using the proof","verify the claimed sum using the proof","Verify the claimed sum using the proof","Verify that an MLE g(x) is a permutation of an MLE f(x) …","Verify that the polynomial’s sum is zero using the proof.","","","","","","","","","",""],"i":[1,1,1,1,1,2,3,0,3,0,0,2,1,1,0,2,2,0,2,0,2,0,4,5,5,1,5,6,7,1,5,6,7,5,6,7,5,6,7,3,7,5,6,7,1,5,6,7,1,5,6,7,1,5,6,7,5,6,5,2,7,5,1,1,5,6,7,1,1,5,6,7,3,7,0,1,5,6,7,3,2,4,7,7,7,1,5,6,7,6,5,5,6,5,5,6,5,3,2,4,7,7,7,5,5,0,0,5,6,7,1,1,5,6,7,1,5,6,7,1,5,6,7,3,7,3,2,4,7,7,7,1,5,6,7,8,9,10,11,12,13],"f":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[["",0]],["result",4,[["polyioperrors",4]]]],null,[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["virtualpolynomial",3]],[[["",0]],["vpauxinfo",3]],[[["",0]],["polyiop",3]],[[["",0],["",0]]],[[["",0],["",0]]],[[["",0],["",0]]],[[["densemultilinearextension",3],["densemultilinearextension",3],["densemultilinearextension",3]],["result",4,[["polyioperrors",4]]]],[[["densemultilinearextension",3],["densemultilinearextension",3],["densemultilinearextension",3]],["result",4,[["polyioperrors",4]]]],[[],["virtualpolynomial",3]],[[],["vpauxinfo",3]],[[],["polyiop",3]],[[["usize",0]],["",0]],[[["usize",0]],["",0]],[[["usize",0]],["",0]],[[["usize",0]],["",0]],[[["usize",0]],["",0]],[[["usize",0]],["",0]],[[["usize",0]],["",0]],[[["usize",0]],["",0]],[[["usize",0]]],[[["usize",0]]],[[["usize",0]]],[[["usize",0]]],[[["",0],["virtualpolynomial",3]],["bool",0]],[[["",0],["vpauxinfo",3]],["bool",0]],[[["",0]],["result",4,[["polyioperrors",4]]]],[[]],[[]],null,[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["serializationerror",4]]],[[]],[[]],[[]],[[]],[[],["result",4,[["polyioperrors",4]]]],[[],["result",4,[["polyioperrors",4]]]],[[["usize",0]],["densemultilinearextension",3,[["primefield",8]]]],[[],["usize",0]],[[],["usize",0]],[[],["usize",0]],[[],["usize",0]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],null,[[["",0],["rc",3,[["densemultilinearextension",3]]]],["result",4,[["polyioperrors",4]]]],[[["",0],["virtualpolynomial",3]],["bool",0]],[[["",0],["vpauxinfo",3]],["bool",0]],[[["usize",0]]],[[["rc",3,[["densemultilinearextension",3]]]]],null,null,[[["ioptranscript",3]],["result",4,[["polyioperrors",4]]]],[[],["result",4,[["polyioperrors",4]]]],[[],["result",4,[["polyioperrors",4]]]],[[["ioptranscript",3]],["result",4,[["polyioperrors",4]]]],[[],["result",4,[["polyioperrors",4]]]],[[],["result",4,[["polyioperrors",4]]]],[[["usize",0],["usize",0],["",0]],["result",4,[["polyioperrors",4]]]],[[["usize",0],["usize",0],["",0]],["result",4,[["polyioperrors",4]]]],[[["usize",0],["",0]],["densemultilinearextension",3,[["primefield",8]]]],null,[[["",0]]],[[["",0]]],[[["",0]]],[[["",0]],["string",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["result",4,[["polyioperrors",4]]]],[[["",0]],["result",4,[["polyioperrors",4]]]],[[],["result",4,[["polyioperrors",4]]]],[[],["result",4,[["polyioperrors",4]]]],[[],["result",4,[["polyioperrors",4]]]],[[],["result",4,[["polyioperrors",4]]]],[[],["result",4,[["polyioperrors",4]]]],[[],["result",4,[["polyioperrors",4]]]],[[]],[[]],[[]],[[]],null,null,null,null,null,null],"p":[[4,"PolyIOPErrors"],[8,"SumCheck"],[8,"PermutationCheck"],[8,"ZeroCheck"],[3,"VirtualPolynomial"],[3,"VPAuxInfo"],[3,"PolyIOP"],[13,"InvalidProver"],[13,"InvalidVerifier"],[13,"InvalidProof"],[13,"InvalidParameters"],[13,"InvalidTranscript"],[13,"SerializationError"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};