var searchIndex = JSON.parse('{\
"arithmetic":{"doc":"","t":"EDNNNDDLLLLLLLMLFLLLLLLLLFFLFLLLLLLLLLLLLLLLLLLLLLLLLLLFLLLLFFMFFFLMLLLLLLLLLLLLFFFFLFFLLLLLLLLLLLLMFLLLLMLMLMLLLFFFFLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL","n":["ArithErrors","DenseMultilinearExtension","InvalidParameters","SerializationErrors","ShouldNotArrive","VPAuxInfo","VirtualPolynomial","add","add","add","add_assign","add_assign","add_assign","add_mle_list","aux_info","batch_check","bit_decompose","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","build_eq_x_r","build_eq_x_r_vec","build_f_hat","build_l","check","clone","clone","clone","clone_into","clone_into","clone_into","default","default","default","deref","deref","deref","deref","deref_mut","deref_mut","deref_mut","deref_mut","deserialize_with_mode","drop","drop","drop","drop","eq","eq","eq","eq_eval","equivalent","equivalent","evaluate","evaluate","evaluate_no_par","evaluate_opt","evaluations","fix_last_variables","fix_last_variables_no_par","fix_variables","fix_variables","flattened_ml_extensions","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from_evaluations_slice","from_evaluations_vec","gen_eval_point","get_batched_nv","get_index","get_uni_domain","hash","identity_permutation","identity_permutation_mles","index","init","init","init","init","into","into","into","into","is_zero","iter","iter_mut","max_degree","merge_polynomials","mul_by_mle","neg","new","new_from_mle","num_variables","num_vars","num_vars","print_evals","products","rand","rand","rand_zero","random_mle_list","random_permutation","random_permutation_mles","random_zero_mle_list","relabel","relabel_in_place","serialize_with_mode","serialize_with_mode","serialized_size","serialized_size","sub","sub","sub_assign","sub_assign","to_evaluations","to_owned","to_owned","to_owned","to_string","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","vzip","vzip","vzip","vzip","zero"],"q":["arithmetic","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["A <code>enum</code> specifying the possible failure modes of the …","Stores a multilinear polynomial in dense evaluation form.","Invalid parameters: {0}","An error during (de)serialization: {0}","Should not arrive to this point","Auxiliary information about the multilinear polynomial","A virtual polynomial is a sum of products of multilinear …","","","","","","","Add a product of list of multilinear extensions to self …","Aux information about the multilinear polynomial","","Decompose an integer into a binary vector in little endian.","","","","","","","","","This function build the eq(x, r) polynomial for any given …","This function build the eq(x, r) polynomial for any given …","","Given a list of points, build <code>l(points)</code> which is a list of …","","","","","","","","","","","","","","","","","","","","","","","","","","","Evaluate eq polynomial.","","","Evaluate the virtual polynomial at point <code>point</code>. Returns an …","","","","The evaluation over {0,1}^<code>num_vars</code>","","","","","Stores multilinear extensions in which product …","","","","","","Returns the argument unchanged.","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Construct a new polynomial from a list of evaluations …","Construct a new polynomial from a list of evaluations …","given the evaluation input <code>point</code> of the <code>index</code>-th …","Return the number of variables that one need for an MLE to …","","get the domain for the univariate polynomial","","","A list of MLEs that represents an identity permutation","Returns the evaluation of the polynomial at a point …","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","Returns an iterator that iterates over the evaluations …","Returns a mutable iterator that iterates over the …","max number of multiplicands in each product","merge a set of polynomials. Returns an error if the …","Multiple the current VirtualPolynomial by an MLE:","","Creates an empty virtual polynomial with <code>num_variables</code>.","Creates an new virtual polynomial from a MLE and its …","number of variables of the polynomial","","Number of variables","Print out the evaluation map for testing. Panic if the …","list of reference to products (as usize) of multilinear …","Sample a random virtual polynomial, return the polynomial …","","Sample a random virtual polynomial that evaluates to zero …","Sample a random list of multilinear polynomials. Returns","","A list of MLEs that represent a random permutation","","","Relabel the point in place by switching <code>k</code> scalars from …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"i":[0,0,5,5,5,0,0,1,2,2,2,2,2,1,1,2,0,5,1,18,2,5,1,18,2,0,0,1,0,2,1,18,2,1,18,2,1,18,2,5,1,18,2,5,1,18,2,2,5,1,18,2,1,18,2,0,18,2,1,2,0,0,2,0,0,0,2,1,5,5,1,18,2,5,5,1,18,2,2,2,0,0,0,0,2,0,0,2,5,1,18,2,5,1,18,2,2,2,2,18,0,1,2,1,1,18,2,2,1,1,1,2,1,0,0,0,0,2,2,18,2,18,2,2,2,2,2,2,1,18,2,5,5,1,18,2,5,1,18,2,5,1,18,2,5,1,18,2,2],"f":[0,0,0,0,0,0,0,[[1,1]],[[2,2],2],[[2,2]],[[2,2]],[2],[[2,2]],[[[1,[3]],4,3],[[6,[5]]]],0,[[[0,[7,8]]],[[6,[9]]]],[[10,11],[[13,[12]]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],[[6,[[14,[[2,[3]]]],5]]]],[[],[[6,[[13,[3]],5]]]],[[[1,[3]]],[[6,[[1,[3]],5]]]],[[15,12],[[6,[[13,[[16,[3]]]],5]]]],[2,[[6,[9]]]],[[[1,[[0,[17,3]]]]],[[1,[[0,[17,3]]]]]],[[[18,[[0,[17,3]]]]],[[18,[[0,[17,3]]]]]],[2,2],[[]],[[]],[[]],[[],[[1,[[0,[19,3]]]]]],[[],[[18,[[0,[19,3]]]]]],[[],2],[11],[11],[11],[11],[11],[11],[11],[11],[[20,21],[[6,[2,9]]]],[11],[11],[11],[11],[[[1,[[0,[22,3]]]],1],12],[[[18,[[0,[22,3]]]],18],12],[[2,2],12],[[],[[6,[3,5]]]],[[],12],[[],12],[[[1,[3]]],[[6,[3,5]]]],[2,23],[2,24],[2,24],0,[2,[[2,[3]]]],[2,[[2,[3]]]],[2,[[2,[24]]]],[2,2],0,[[5,25],26],[[5,25],26],[[[1,[[0,[27,3]]]],25],26],[[[18,[[0,[27,3]]]],25],26],[[2,25],[[6,[28]]]],[[]],[9,5],[[]],[[]],[[]],[11,2],[[11,[13,[29]]],2],[[11,11],[[13,[3]]]],[[11,11],11],[[11,11]],[11,[[6,[[15,[3]],5]]]],[2],[[11,11],[[13,[3]]]],[[11,11],[[13,[[14,[[2,[3]]]]]]]],[[2,11]],[[],11],[[],11],[[],11],[[],11],[[]],[[]],[[]],[[]],[2,12],[2,30],[2,31],0,[[],[[6,[[14,[[2,[3]]]],5]]]],[[[1,[3]],[14,[[2,[3]]]],3],[[6,[5]]]],[2],[11,[[1,[3]]]],[[14,3],[[1,[3]]]],0,[2,11],0,[[[1,[3]]]],0,[[11,11],[[6,[5]]]],[11,2],[[11,11],[[6,[[1,[3]],5]]]],[[11,11]],[[11,11],[[13,[3]]]],[[11,11],[[13,[[14,[[2,[3]]]]]]]],[[11,11],[[13,[[14,[[2,[3]]]]]]]],[[2,11,11,11],2],[[2,11,11,11]],[[[18,[3]],32,20],[[6,[9]]]],[[2,20],[[6,[9]]]],[[[18,[3]],20],11],[[2,20],11],[[2,2]],[[2,2],2],[[2,2]],[[2,2]],[2,[[13,[29]]]],[[]],[[]],[[]],[[],33],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],34],[[],34],[[],34],[[],34],[[]],[[]],[[]],[[]],[[],2]],"p":[[3,"VirtualPolynomial"],[3,"DenseMultilinearExtension"],[8,"PrimeField"],[8,"IntoIterator"],[4,"ArithErrors"],[4,"Result"],[8,"Iterator"],[8,"Send"],[4,"SerializationError"],[15,"u64"],[15,"usize"],[15,"bool"],[3,"Vec"],[3,"Arc"],[3,"Radix2EvaluationDomain"],[3,"DensePolynomial"],[8,"Clone"],[3,"VPAuxInfo"],[8,"Default"],[4,"Compress"],[4,"Validate"],[8,"PartialEq"],[4,"Option"],[8,"Field"],[3,"Formatter"],[6,"Result"],[8,"Debug"],[3,"Error"],[3,"Global"],[3,"Iter"],[3,"IterMut"],[8,"Write"],[3,"String"],[3,"TypeId"]]},\
"hyperplonk":{"doc":"Main module for the HyperPlonk SNARK.","t":"IQQQQOAKKKNDECNNNNDNNDNNDLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLMLLLLLLLLLLLLLLLLLLLMLLLLLLLLLLLLLLLLLLLLLLLLLLM","n":["HyperPlonkSNARK","Index","Proof","ProvingKey","VerifyingKey","build_mle","prelude","preprocess","prove","verify","ArithmeticErrors","CustomizedGates","HyperPlonkErrors","HyperPlonkSNARK","InvalidParameters","InvalidProof","InvalidProver","InvalidVerifier","MockCircuit","PCSErrors","PolyIOPErrors","SelectorColumn","SerializationError","TranscriptError","WitnessColumn","append","append","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone","clone_into","clone_into","clone_into","coeff_ref","default","default","default","degree","deref","deref","deref","deref","deref","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","drop","drop","drop","drop","drop","eq","eq","equivalent","equivalent","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from","from","from_selector_rows","from_witness_rows","get_nv","get_nv","index","init","init","init","init","init","into","into","into","into","into","is_satisfied","jellyfish_turbo_plonk_gate","mock_gate","new","num_selector_columns","num_selector_columns","num_variables","num_witness_columns","num_witness_columns","public_inputs","super_long_selector_gate","to_owned","to_owned","to_owned","to_string","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","vanilla_plonk_gate","vzip","vzip","vzip","vzip","vzip","witnesses"],"q":["hyperplonk","","","","","","","","","","hyperplonk::prelude","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["A trait for HyperPlonk SNARKs. A HyperPlonk is derived …","","","","","Build MLE from matrix of witnesses.","","Generate the preprocessed polynomials output by the …","Generate HyperPlonk SNARK proof.","Verify the HyperPlonk proof.","Arithmetic Error: {0}","Customized gate is a list of tuples of (coefficient, …","A <code>enum</code> specifying the possible failure modes of hyperplonk.","","Invalid parameters: {0}","Invalid Proof: {0}","Invalid Prover: {0}","Invalid Verifier: {0}","","PCS error {0}","PolyIOP error {0}","A column of selectors of length <code>#constraints</code>","An error during (de)serialization: {0}","Transcript error {0}","A column of witnesses of length <code>#constraints</code>","Append a new element to the selector column","Append a new element to the witness column","","","","","","","","","","","","","","","","","","","","","The degree of the algebraic customized gate","","","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","","","","","Returns the argument unchanged.","","Returns the argument unchanged.","Returns the argument unchanged.","Build selector columns from rows","Build witness columns from rows","the number of variables of the multilinear polynomial that …","the number of variables of the multilinear polynomial that …","","","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","Return a jellyfish turbo plonk gate:","Generate a random gate for <code>num_witness</code> with a highest …","Generate a mock plonk circuit for the input constraint …","number of selector columns","The number of selectors in a customized gate","Number of variables in a multilinear system","number of witness columns","The number of witnesses in a customized gate","","Return a plonk gate where #selector &gt; #witness * 2","","","","","","","","","","","","","","","","","","","","Return a vanilla plonk gate:","","","","","",""],"i":[0,24,24,24,24,0,0,24,24,24,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,5,6,21,7,1,5,6,21,7,1,5,6,7,5,6,7,5,6,6,7,5,6,7,21,7,1,5,6,21,7,1,5,6,21,7,1,5,6,7,5,7,5,7,1,1,5,6,21,7,1,1,1,1,1,1,5,6,5,6,5,6,21,21,7,1,5,6,21,7,1,5,6,21,7,7,21,21,7,21,21,7,21,7,7,5,6,1,21,7,1,5,6,21,7,1,5,6,21,7,1,5,6,7,21,7,1,5,6,21],"f":[0,0,0,0,0,0,0,[[],[[2,[1]]]],[[],[[2,[1]]]],[[],[[2,[3,1]]]],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[[[5,[4]],4]],[[[6,[4]],4]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[7,7],[[[5,[[0,[8,4]]]]],[[5,[[0,[8,4]]]]]],[[[6,[[0,[8,4]]]]],[[6,[[0,[8,4]]]]]],[[]],[[]],[[]],[[[6,[4]]]],[[],7],[[],[[5,[[0,[9,4]]]]]],[[],[[6,[[0,[9,4]]]]]],[7,10],[10],[10],[10],[10],[10],[10],[10],[10],[10],[10],[10],[10],[10],[10],[10],[[7,7],3],[[[5,[[0,[11,4]]]],5],3],[[],3],[[],3],[[7,12],13],[[1,12],13],[[1,12],13],[[[5,[[0,[14,4]]]],12],13],[[[6,[[0,[14,4]]]],12],13],[[]],[[]],[15,1],[16,1],[17,1],[18,1],[[]],[19,1],[[]],[[]],[[],[[2,[[20,[[5,[4]]]],1]]]],[[],[[2,[[20,[[6,[4]]]],1]]]],[[[5,[4]]],10],[[[6,[4]]],10],0,[[],10],[[],10],[[],10],[[],10],[[],10],[[]],[[]],[[]],[[]],[[]],[[[21,[4]]],3],[[],7],[[10,10],7],[[10,7],[[21,[4]]]],[[[21,[4]]],10],[7,10],[[[21,[4]]],10],[[[21,[4]]],10],[7,10],0,[[],7],[[]],[[]],[[]],[[],22],[[],2],[[],2],[[],2],[[],2],[[],2],[[],2],[[],2],[[],2],[[],2],[[],2],[[],23],[[],23],[[],23],[[],23],[[],23],[[],7],[[]],[[]],[[]],[[]],[[]],0],"p":[[4,"HyperPlonkErrors"],[4,"Result"],[15,"bool"],[8,"PrimeField"],[3,"SelectorColumn"],[3,"WitnessColumn"],[3,"CustomizedGates"],[8,"Clone"],[8,"Default"],[15,"usize"],[8,"PartialEq"],[3,"Formatter"],[6,"Result"],[8,"Debug"],[4,"PolyIOPErrors"],[4,"ArithErrors"],[4,"SerializationError"],[4,"PCSError"],[4,"TranscriptError"],[3,"Vec"],[3,"MockCircuit"],[3,"String"],[3,"TypeId"],[8,"HyperPlonkSNARK"]]},\
"subroutines":{"doc":"","t":"AAOQQQQQIQQQQIQQLKKKKKLKAKKKNDDNNNNDDDDDECNCNGDDDDDLLLLLLLLLLMMLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLMLLLLLLLLLLLLLLLLLLLLLLLLLLLLMMMLLLLMMMMMMLLLLLLLLLLLLLLLLLLLLLLLLLLLLLMMLLMMMMMMLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLDLLLLLLLLLLLLLLLLLLLALLLLLLLLLLLLLNDNNNNNQNIQQCEIQQNNIQQQNQQIQQLLLLLLLLLLLLLLLKLLLLLLLLLLLKKKKLLMMKKKKOLLLLLLLLKKKKLL","n":["pcs","poly_iop","to_bytes","BatchProof","Commitment","Evaluation","Point","Polynomial","PolynomialCommitmentScheme","Proof","ProverParam","ProverParam","SRS","StructuredReferenceString","VerifierParam","VerifierParam","batch_verify","commit","extract_prover_param","extract_verifier_param","gen_srs_for_testing","gen_srs_for_testing","multi_open","open","prelude","trim","trim","verify","ArithErrors","BatchProof","Commitment","InvalidParameters","InvalidProof","InvalidProver","InvalidVerifier","MultilinearKzgPCS","MultilinearKzgProof","MultilinearProverParam","MultilinearUniversalParams","MultilinearVerifierParam","PCSError","PolynomialCommitmentScheme","SerializationError","StructuredReferenceString","TranscriptError","UnivariateKzgBatchProof","UnivariateKzgPCS","UnivariateKzgProof","UnivariateProverParam","UnivariateUniversalParams","UnivariateVerifierParam","batch_check","batch_check","batch_check","batch_check","batch_check","batch_check","batch_check","batch_check","batch_check","batch_verify","beta_h","beta_h","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","check","check","check","check","check","check","check","check","check","clone","clone","clone","clone","clone","clone","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","commit","commit","default","default","default","default","default","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deserialize_with_mode","deserialize_with_mode","deserialize_with_mode","deserialize_with_mode","deserialize_with_mode","deserialize_with_mode","deserialize_with_mode","deserialize_with_mode","deserialize_with_mode","drop","drop","drop","drop","drop","drop","drop","drop","drop","drop","drop","drop","drop","eq","eq","eq","eq","eq","eq","eq","equivalent","equivalent","equivalent","equivalent","equivalent","equivalent","equivalent","extract_prover_param","extract_prover_param","extract_verifier_param","extract_verifier_param","f_i_eval_at_point_i","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","g","g","g","gen_srs_for_testing","gen_srs_for_testing","gen_srs_for_testing","gen_srs_for_testing","h","h","h","h","h_mask","h_mask","hash","init","init","init","init","init","init","init","init","init","init","init","init","init","into","into","into","into","into","into","into","into","into","into","into","into","into","max_degree","multi_open","num_vars","num_vars","open","open","powers_of_g","powers_of_g","powers_of_g","proof","proofs","prover_param","serialize_with_mode","serialize_with_mode","serialize_with_mode","serialize_with_mode","serialize_with_mode","serialize_with_mode","serialize_with_mode","serialize_with_mode","serialize_with_mode","serialized_size","serialized_size","serialized_size","serialized_size","serialized_size","serialized_size","serialized_size","serialized_size","serialized_size","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_string","trim","trim","trim","trim","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","verify","verify","vzip","vzip","vzip","vzip","vzip","vzip","vzip","vzip","vzip","vzip","vzip","vzip","vzip","PolyIOP","borrow","borrow_mut","clone","clone_into","default","deref","deref_mut","drop","eq","equivalent","extract_sum","fmt","from","init","init_transcript","init_transcript","init_transcript","init_transcript","into","prelude","prove","prove","prove","prove","to_owned","try_from","try_into","type_id","verify","verify","verify","verify","vzip","ArithmeticErrors","IOPProof","InvalidChallenge","InvalidParameters","InvalidProof","InvalidProver","InvalidVerifier","MultilinearExtension","PCSErrors","PermutationCheck","PermutationCheckSubClaim","PermutationProof","PolyIOP","PolyIOPErrors","ProductCheck","ProductCheckProof","ProductCheckSubClaim","SerializationErrors","ShouldNotArrive","SumCheck","SumCheckProof","SumCheckSubClaim","Transcript","TranscriptErrors","VPAuxInfo","VirtualPolynomial","ZeroCheck","ZeroCheckProof","ZeroCheckSubClaim","borrow","borrow","borrow_mut","borrow_mut","clone","clone_into","default","deref","deref","deref_mut","deref_mut","drop","drop","eq","equivalent","extract_sum","fmt","fmt","fmt","from","from","from","from","from","from","init","init","init_transcript","init_transcript","init_transcript","init_transcript","into","into","point","proofs","prove","prove","prove","prove","to_bytes","to_owned","to_string","try_from","try_from","try_into","try_into","type_id","type_id","verify","verify","verify","verify","vzip","vzip"],"q":["subroutines","","","subroutines::pcs","","","","","","","","","","","","","","","","","","","","","","","","","subroutines::pcs::prelude","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","subroutines::poly_iop","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","subroutines::poly_iop::prelude","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["","","Takes as input a struct, and converts them to a series of …","Batch proofs","Commitments","Polynomial Evaluation","Polynomial input domain","Polynomial and its associated types","This trait defines APIs for polynomial commitment schemes. …","Proofs","Prover parameters","Prover parameters","Structured reference string","API definitions for structured reference string","Verifier parameters","Verifier parameters","Verifies that <code>value_i</code> is the evaluation at <code>x_i</code> of the …","Generate a commitment for a polynomial","Extract the prover parameters from the public parameters.","Extract the verifier parameters from the public parameters.","Build SRS for testing.","Build SRS for testing.","Input a list of multilinear extensions, and a same number …","On input a polynomial <code>p</code> and a point <code>point</code>, outputs a proof …","Prelude","Trim the universal parameters to specialize the public …","Trim the universal parameters to specialize the public …","Verifies that <code>value</code> is the evaluation at <code>x</code> of the …","ArithErrors error {0}","","A commitment is an Affine point.","Invalid parameters: {0}","Invalid Proof: {0}","Invalid Prover: {0}","Invalid Verifier: {0}","KZG Polynomial Commitment Scheme on multilinear …","proof of opening","Prover Parameters","Universal Parameter","Verifier Parameters","A <code>enum</code> specifying the possible failure modes of the PCS.","","An error during (de)serialization: {0}","","Transcript error {0}","batch proof","KZG Polynomial Commitment Scheme on univariate polynomial.","proof of opening","<code>UnivariateProverParam</code> is used to generate a proof","<code>UniversalParams</code> are the universal parameters for the KZG10 …","<code>UnivariateVerifierParam</code> is used to check evaluation proofs …","","","","","","","","","","Verifies that <code>value_i</code> is the evaluation at <code>x_i</code> of the …","\\\\beta times the above generator of G2.","\\\\beta times the above generator of G2.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Generate a commitment for a polynomial.","Generate a commitment for a polynomial Note that the …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Extract the prover parameters from the public parameters.","Extract the prover parameters from the public parameters.","Extract the verifier parameters from the public parameters.","Extract the verifier parameters from the public parameters.","f_i(point_i)","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","generator for G1","generator of G1","The generator of G1.","Build SRS for testing.","Build SRS for testing.","Build SRS for testing. WARNING: THIS FUNCTION IS FOR …","Build SRS for testing. WARNING: THIS FUNCTION IS FOR …","generator for G2","generator of G2","The generator of G2.","The generator of G2.","h^randomness: h^t1, h^t2, …, <strong>h^{t_nv}</strong>","h^randomness: h^t1, h^t2, …, <strong>h^{t_nv}</strong>","","","","","","","","","","","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Returns the maximum supported degree","Input a list of multilinear extensions, and a same number …","number of variables","number of variables","On input a polynomial <code>p</code> and a point <code>point</code>, outputs a proof …","On input a polynomial <code>p</code> and a point <code>point</code>, outputs a proof …","<code>pp_{0}</code>, <code>pp_{1}</code>, …,pp_{nu_vars} defined by XZZPD19 where …","Group elements of the form <code>{ \\\\beta^i G }</code>, where <code>i</code> ranges …","Parameters","Evaluation of quotients","Evaluation of quotients","prover parameters","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Trim the universal parameters to specialize the public …","Trim the universal parameters to specialize the public …","Trim the universal parameters to specialize the public …","Trim the universal parameters to specialize the public …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Verifies that <code>value</code> is the evaluation at <code>x</code> of the …","Verifies that <code>value</code> is the evaluation at <code>x</code> of the …","","","","","","","","","","","","","","Struct for PolyIOP protocol. It has an associated type <code>F</code> …","","","","","","","","","","","","","Returns the argument unchanged.","","","","","","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","Arithmetic Error: {0}","An IOP proof is a collections of","Invalid challenge: {0}","Invalid parameters: {0}","Invalid Proof: {0}","Invalid Prover: {0}","Invalid Verifier: {0}","","PCS error {0}","A PermutationCheck w.r.t. <code>(fs, gs, perms)</code> proves that (g1, …","","","","A <code>enum</code> specifying the possible failure modes of the …","A product-check proves that two lists of n-variate …","","","An error during (de)serialization: {0}","Should not arrive to this point","Trait for doing sum check protocols.","","","","Transcript Error: {0}","","","A ZeroCheck for <code>f(x)</code> proves that <code>f(x) = 0</code> for all …","","","","","","","","","","","","","","","","","","Extract sum from the proof","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","","","Initialize the system with a transcript","Initialize the system with a transcript","Initialize the system with a transcript","Initialize the system with a transcript","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","Inputs:","Proves that two lists of n-variate multilinear polynomials …","Generate proof of the sum of polynomial over {0,1}^<code>num_vars</code>","initialize the prover to argue for the sum of polynomial …","Takes as input a struct, and converts them to a series of …","","","","","","","","","Verify that (g1, …, gk) is a permutation of (f1, …, …","Verify that for witness multilinear polynomials (f1, …, …","Verify the claimed sum using the proof","verify the claimed sum using the proof","",""],"i":[0,0,0,43,43,43,43,43,0,43,43,44,43,0,43,44,43,43,44,44,43,44,43,43,0,43,44,43,3,0,0,3,3,3,3,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,12,13,14,15,16,17,19,20,21,34,17,20,34,45,3,22,12,13,14,15,16,17,19,20,21,34,45,3,22,12,13,14,15,16,17,19,20,21,12,13,14,15,16,17,19,20,21,22,12,13,14,15,16,17,19,20,21,22,12,13,14,15,16,17,19,20,21,34,45,22,16,17,19,20,34,45,3,22,12,13,14,15,16,17,19,20,21,34,45,3,22,12,13,14,15,16,17,19,20,21,12,13,14,15,16,17,19,20,21,34,45,3,22,12,13,14,15,16,17,19,20,21,22,15,16,17,19,20,21,22,15,16,17,19,20,21,12,17,12,17,22,3,3,22,12,13,14,15,16,17,19,20,21,34,45,3,3,3,3,22,12,13,14,15,16,17,19,20,21,13,14,20,34,45,12,17,13,14,17,20,12,14,16,34,45,3,22,12,13,14,15,16,17,19,20,21,34,45,3,22,12,13,14,15,16,17,19,20,21,17,34,13,14,34,45,13,17,19,21,15,12,12,13,14,15,16,17,19,20,21,12,13,14,15,16,17,19,20,21,22,12,13,14,15,16,17,19,20,21,3,34,45,12,17,34,45,3,22,12,13,14,15,16,17,19,20,21,34,45,3,22,12,13,14,15,16,17,19,20,21,34,45,3,22,12,13,14,15,16,17,19,20,21,34,45,34,45,3,22,12,13,14,15,16,17,19,20,21,0,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,0,39,39,39,39,39,39,39,39,39,39,39,39,39,40,0,40,40,40,40,40,46,40,0,47,47,0,0,0,48,48,40,40,0,46,46,46,40,46,46,0,49,49,40,42,40,42,42,42,42,40,42,40,42,40,42,42,42,46,40,40,42,40,40,40,40,40,42,40,42,47,48,46,49,40,42,42,42,47,48,46,49,0,42,40,40,42,40,42,40,42,47,48,46,49,40,42],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[1,[[4,[2,3]]]],[5,[[4,[3]]]],[6],[6],[6,[[4,[3]]]],[6,[[4,[3]]]],[[5,1],[[4,[3]]]],[5,[[4,[3]]]],0,[[5,[7,[6]],[7,[6]]],[[4,[3]]]],[6,[[4,[3]]]],[[],[[4,[2,3]]]],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[[[0,[8,9]]],[[4,[10]]]],[[[0,[8,9]]],[[4,[10]]]],[[[0,[8,9]]],[[4,[10]]]],[[[0,[8,9]]],[[4,[10]]]],[[[0,[8,9]]],[[4,[10]]]],[[[0,[8,9]]],[[4,[10]]]],[[[0,[8,9]]],[[4,[10]]]],[[[0,[8,9]]],[[4,[10]]]],[[[0,[8,9]]],[[4,[10]]]],[1,[[4,[2,3]]]],0,0,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[[12,[11]]],[[4,[10]]]],[[[13,[11]]],[[4,[10]]]],[[[14,[11]]],[[4,[10]]]],[[[15,[11]]],[[4,[10]]]],[[[16,[11]]],[[4,[10]]]],[[[17,[11]]],[[4,[10]]]],[[[19,[18]]],[[4,[10]]]],[[[20,[11]]],[[4,[10]]]],[[[21,[11]]],[[4,[10]]]],[22,22],[[[12,[[0,[23,11]]]]],[[12,[[0,[23,11]]]]]],[[[13,[[0,[23,11]]]]],[[13,[[0,[23,11]]]]]],[[[14,[[0,[23,11]]]]],[[14,[[0,[23,11]]]]]],[[[15,[[0,[23,11]]]]],[[15,[[0,[23,11]]]]]],[[[16,[11]]],[[16,[11]]]],[[[17,[[0,[23,11]]]]],[[17,[[0,[23,11]]]]]],[[[19,[[0,[23,18]]]]],[[19,[[0,[23,18]]]]]],[[[20,[11]]],[[20,[11]]]],[[[21,[[0,[23,11]]]]],[[21,[[0,[23,11]]]]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[5,[[4,[3]]]],[5,[[4,[3]]]],[[],22],[[],[[16,[11]]]],[[],[[17,[[0,[24,11]]]]]],[[],[[19,[[0,[24,18]]]]]],[[],[[20,[11]]]],[6],[6],[6],[6],[6],[6],[6],[6],[6],[6],[6],[6],[6],[6],[6],[6],[6],[6],[6],[6],[6],[6],[6],[6],[6],[6],[[25,26,27],[[4,[[12,[11]],10]]]],[[25,26,27],[[4,[[13,[11]],10]]]],[[25,26,27],[[4,[[14,[11]],10]]]],[[25,26,27],[[4,[[15,[11]],10]]]],[[25,26,27],[[4,[[16,[11]],10]]]],[[25,26,27],[[4,[[17,[11]],10]]]],[[25,26,27],[[4,[[19,[18]],10]]]],[[25,26,27],[[4,[[20,[11]],10]]]],[[25,26,27],[[4,[[21,[11]],10]]]],[6],[6],[6],[6],[6],[6],[6],[6],[6],[6],[6],[6],[6],[[22,22],2],[[[15,[[0,[28,11]]]],15],2],[[[16,[11]],[16,[11]]],2],[[[17,[[0,[28,11]]]],17],2],[[[19,[[0,[28,18]]]],19],2],[[[20,[11]],[20,[11]]],2],[[[21,[[0,[28,11]]]],21],2],[[],2],[[],2],[[],2],[[],2],[[],2],[[],2],[[],2],[[[12,[11]],6]],[[[17,[11]],6]],[[[12,[11]],6]],[[[17,[11]],6]],0,[[3,29],30],[[3,29],30],[[22,29],30],[[[12,[[0,[31,11]]]],29],30],[[[13,[[0,[31,11]]]],29],30],[[[14,[[0,[31,11]]]],29],30],[[[15,[[0,[31,11]]]],29],30],[[[16,[11]],29],30],[[[17,[[0,[31,11]]]],29],30],[[[19,[[0,[31,18]]]],29],30],[[[20,[11]],29],30],[[[21,[[0,[31,11]]]],29],30],[[]],[[]],[[]],[32,3],[10,3],[33,3],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],0,0,0,[6,[[4,[3]]]],[6,[[4,[3]]]],[6,[[4,[[12,[11]],3]]]],[6,[[4,[[17,[11]],3]]]],0,0,0,0,0,0,[[[16,[11]]]],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[[17,[11]]],6],[[5,1],[[4,[[22,[11,[34,[11]]]],3]]]],0,0,[5,[[4,[3]]]],[5,[[4,[3]]]],0,0,0,0,0,0,[[[12,[11]],35,26],[[4,[10]]]],[[[13,[11]],35,26],[[4,[10]]]],[[[14,[11]],35,26],[[4,[10]]]],[[[15,[11]],35,26],[[4,[10]]]],[[[16,[11]],35,26],[[4,[10]]]],[[[17,[11]],35,26],[[4,[10]]]],[[[19,[18]],35,26],[[4,[10]]]],[[[20,[11]],35,26],[[4,[10]]]],[[[21,[11]],35,26],[[4,[10]]]],[[[12,[11]],26],6],[[[13,[11]],26],6],[[[14,[11]],26],6],[[[15,[11]],26],6],[[[16,[11]],26],6],[[[17,[11]],26],6],[[[19,[18]],26],6],[[[20,[11]],26],6],[[[21,[11]],26],6],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],36],[[5,[7,[6]],[7,[6]]],[[4,[3]]]],[[5,[7,[6]],[7,[6]]],[[4,[3]]]],[[[12,[11]],6],[[4,[3]]]],[[[17,[11]],6],[[4,[3]]]],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],37],[[],37],[[],37],[[],37],[[],37],[[],37],[[],37],[[],37],[[],37],[[],37],[[],37],[[],37],[[],37],[[],[[4,[2,3]]]],[[],[[4,[2,3]]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],0,[[]],[[]],[[[39,[[0,[23,38]]]]],[[39,[[0,[23,38]]]]]],[[]],[[],[[39,[[0,[24,38]]]]]],[6],[6],[6],[[[39,[[0,[28,38]]]],39],2],[[],2],[[],38],[[[39,[[0,[31,38]]]],29],30],[[]],[[],6],[[]],[[]],[[]],[[]],[[]],0,[[],[[4,[40]]]],[1,[[4,[40]]]],[[],[[4,[40]]]],[1,[[4,[40]]]],[[]],[[],4],[[],4],[[],37],[[],[[4,[40]]]],[[],[[4,[40]]]],[38,[[4,[40]]]],[41,[[4,[40]]]],[[]],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[[]],[[]],[[]],[[]],[[[42,[[0,[23,38]]]]],[[42,[[0,[23,38]]]]]],[[]],[[],[[42,[[0,[24,38]]]]]],[6],[6],[6],[6],[6],[6],[[[42,[[0,[28,38]]]],42],2],[[],2],[[]],[[40,29],30],[[40,29],30],[[[42,[[0,[31,38]]]],29],30],[33,40],[3,40],[10,40],[32,40],[[]],[[]],[[],6],[[],6],[[]],[[]],[[]],[[]],[[]],[[]],0,0,[1,[[4,[40]]]],[1,[[4,[40]]]],[[],[[4,[40]]]],[[],[[4,[40]]]],0,[[]],[[],36],[[],4],[[],4],[[],4],[[],4],[[],37],[[],37],[[],[[4,[40]]]],[41,[[4,[40]]]],[[],[[4,[40]]]],[[],[[4,[40]]]],[[]],[[]]],"p":[[3,"IOPTranscript"],[15,"bool"],[4,"PCSError"],[4,"Result"],[8,"Borrow"],[15,"usize"],[4,"Option"],[8,"Iterator"],[8,"Send"],[4,"SerializationError"],[8,"Pairing"],[3,"MultilinearUniversalParams"],[3,"MultilinearProverParam"],[3,"MultilinearVerifierParam"],[3,"MultilinearKzgProof"],[3,"Commitment"],[3,"UnivariateUniversalParams"],[8,"AffineRepr"],[3,"UnivariateProverParam"],[3,"UnivariateVerifierParam"],[3,"UnivariateKzgProof"],[3,"BatchProof"],[8,"Clone"],[8,"Default"],[8,"Read"],[4,"Compress"],[4,"Validate"],[8,"PartialEq"],[3,"Formatter"],[6,"Result"],[8,"Debug"],[4,"ArithErrors"],[4,"TranscriptError"],[3,"MultilinearKzgPCS"],[8,"Write"],[3,"String"],[3,"TypeId"],[8,"PrimeField"],[3,"PolyIOP"],[4,"PolyIOPErrors"],[3,"VPAuxInfo"],[3,"IOPProof"],[8,"PolynomialCommitmentScheme"],[8,"StructuredReferenceString"],[3,"UnivariateKzgPCS"],[8,"SumCheck"],[8,"PermutationCheck"],[8,"ProductCheck"],[8,"ZeroCheck"]]},\
"transcript":{"doc":"Module for PolyIOP transcript. TODO(ZZ): move this module …","t":"DNNELLLLLLLLLLLLLLLLLLLLLLLLLLLOLLLLLLLLLL","n":["IOPTranscript","InvalidTranscript","SerializationError","TranscriptError","append_field_element","append_message","append_serializable_element","borrow","borrow","borrow_mut","borrow_mut","clone","clone_into","deref","deref","deref_mut","deref_mut","drop","drop","fmt","fmt","from","from","from","get_and_append_challenge","get_and_append_challenge_vectors","init","init","into","into","new","to_bytes","to_owned","to_string","try_from","try_from","try_into","try_into","type_id","type_id","vzip","vzip"],"q":["transcript","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["An IOP transcript consists of a Merlin transcript and a …","Invalid Transcript: {0}","An error during (de)serialization: {0}","A <code>enum</code> specifying the possible failure modes of the …","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","","Returns the argument unchanged.","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Create a new IOP transcript.","Takes as input a struct, and converts them to a series of …","","","","","","","","","",""],"i":[0,3,3,0,2,2,2,3,2,3,2,2,2,3,2,3,2,3,2,3,3,3,3,2,2,2,3,2,3,2,2,0,2,3,3,2,3,2,3,2,3,2],"f":[0,0,0,0,[[[2,[1]]],[[4,[3]]]],[[[2,[1]]],[[4,[3]]]],[[[2,[1]]],[[4,[3]]]],[[]],[[]],[[]],[[]],[[[2,[[0,[5,1]]]]],[[2,[[0,[5,1]]]]]],[[]],[6],[6],[6],[6],[6],[6],[[3,7],8],[[3,7],8],[[]],[9,3],[[]],[[[2,[1]]],[[4,[1,3]]]],[[[2,[1]],6],[[4,[[10,[1]],3]]]],[[],6],[[],6],[[]],[[]],[[],[[2,[1]]]],0,[[]],[[],11],[[],4],[[],4],[[],4],[[],4],[[],12],[[],12],[[]],[[]]],"p":[[8,"PrimeField"],[3,"IOPTranscript"],[4,"TranscriptError"],[4,"Result"],[8,"Clone"],[15,"usize"],[3,"Formatter"],[6,"Result"],[4,"SerializationError"],[3,"Vec"],[3,"String"],[3,"TypeId"]]},\
"util":{"doc":"Utilities for parallel code.","t":"F","n":["parallelizable_slice_iter"],"q":["util"],"d":["this function helps with slice iterator creation that …"],"i":[0],"f":[[[],[[2,[1]]]]],"p":[[8,"Sync"],[3,"Iter"]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};
